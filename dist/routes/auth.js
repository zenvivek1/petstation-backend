"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const mail_service_1 = require("../services/mail.service");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// ─── Helper: sign JWT ────────────────────────────────────────────────────────
function signToken(payload) {
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    });
}
// ─── POST /api/auth/register ─────────────────────────────────────────────────
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Validation
        if (!name || !email || !password) {
            res.status(400).json({ error: 'Name, email, and password are required.' });
            return;
        }
        if (password.length < 6) {
            res.status(400).json({ error: 'Password must be at least 6 characters.' });
            return;
        }
        console.log('📝 Registering user:', email);
        // Check if email already exists
        const existing = await prisma_1.default.user.findUnique({
            where: { email: email.toLowerCase().trim() }
        });
        console.log('🔍 Existing user check:', existing ? 'Exists' : 'New');
        if (existing) {
            res.status(409).json({ error: 'An account with this email already exists.' });
            return;
        }
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        console.log('🔑 Password hashed');
        // Insert user with default settings
        console.log('🏗️ Creating user in Prisma...');
        const user = await prisma_1.default.user.create({
            data: {
                name: name.trim(),
                email: email.toLowerCase().trim(),
                password: hashedPassword,
                settings: {
                    create: {} // Using default values from schema
                }
            }
        });
        console.log('✅ User created:', user.id);
        // Send Welcome Email (Async - don't await to keep response fast)
        mail_service_1.mailService.sendWelcomeEmail(user.email, user.name).catch(console.error);
        // Sign token
        const token = signToken({ id: user.id, email: user.email, name: user.name });
        res.status(201).json({
            message: 'Account created successfully.',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (err) {
        console.error('Register error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});
// ─── POST /api/auth/login ─────────────────────────────────────────────────────
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required.' });
            return;
        }
        // Find user
        const user = await prisma_1.default.user.findUnique({
            where: { email: email.toLowerCase().trim() }
        });
        if (!user) {
            res.status(401).json({ error: 'Invalid email or password.' });
            return;
        }
        // Check password
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ error: 'Invalid email or password.' });
            return;
        }
        // Sign token
        const token = signToken({ id: user.id, email: user.email, name: user.name });
        res.status(200).json({
            message: 'Logged in successfully.',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});
// ─── GET /api/auth/me (protected) ────────────────────────────────────────────
router.get('/me', auth_1.authenticate, async (req, res) => {
    try {
        const user = await prisma_1.default.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true
            }
        });
        if (!user) {
            res.status(404).json({ error: 'User not found.' });
            return;
        }
        res.status(200).json({ user });
    }
    catch (err) {
        console.error('Me error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map