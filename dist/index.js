"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = require("./config/database");
// Route imports
const auth_1 = __importDefault(require("./routes/auth"));
const pets_1 = __importDefault(require("./routes/pets"));
const health_1 = __importDefault(require("./routes/health"));
const medications_1 = __importDefault(require("./routes/medications"));
const food_1 = __importDefault(require("./routes/food"));
const vets_1 = __importDefault(require("./routes/vets"));
const calendar_1 = __importDefault(require("./routes/calendar"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// 1. ABSOLUTE TOP LOGGER (Before everything else)
app.use((req, _res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    console.error(`\n🔔 [${timestamp}] Incoming: ${req.method} ${req.url}`);
    next();
});
// 2. CORS
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:8080',
    credentials: true,
}));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.use((0, morgan_1.default)('dev'));
// Custom body logger for development
if (process.env.NODE_ENV !== 'production') {
    app.use((req, _res, next) => {
        if (req.method !== 'GET' && Object.keys(req.body).length > 0) {
            console.log('📦 Request Body:', JSON.stringify(req.body, null, 2));
        }
        next();
    });
}
// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
// ─── API Routes ───────────────────────────────────────────────────────────────
app.use('/api/auth', auth_1.default);
app.use('/api/pets', pets_1.default);
app.use('/api/health', health_1.default);
app.use('/api/medications', medications_1.default);
app.use('/api/food', food_1.default);
app.use('/api/vets', vets_1.default);
app.use('/api/calendar', calendar_1.default);
// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
    res.status(404).json({ error: 'Route not found.' });
});
// ─── Global error handler ────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
    console.error(`❌ ERROR in ${req.method} ${req.url}:`, err.message || err);
    const status = err.status || err.statusCode || 500;
    res.status(status).json({
        error: err.message || 'Internal server error.',
        status
    });
});
// ─── Bootstrap ───────────────────────────────────────────────────────────────
(0, database_1.initializeDatabase)();
app.listen(PORT, () => {
    console.log(`\n🚀 [${new Date().toLocaleTimeString()}] PetStation API LIVE`);
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`📧 Mail User: ${process.env.EMAIL_USER || 'NOT SET'}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map