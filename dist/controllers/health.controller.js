"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHealthRecord = exports.getHealthByPet = exports.getHealthRecords = void 0;
const healthService = __importStar(require("../services/health.service"));
const getHealthRecords = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const records = await healthService.getAllHealthRecords(userId);
        res.status(200).json({ records });
    }
    catch (err) {
        console.error('Get health records error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.getHealthRecords = getHealthRecords;
const getHealthByPet = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const petId = req.params.petId;
        const records = await healthService.getHealthRecordsByPet(petId, userId);
        res.status(200).json({ records });
    }
    catch (err) {
        console.error('Get health for pet error:', err);
        res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.getHealthByPet = getHealthByPet;
const createHealthRecord = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const record = await healthService.createHealthRecord(userId, req.body);
        res.status(201).json({ message: 'Health record added successfully.', record });
    }
    catch (err) {
        console.error('Add health record error:', err);
        res.status(err instanceof Error && err.message.includes('found or unauthorized') ? 404 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.createHealthRecord = createHealthRecord;
//# sourceMappingURL=health.controller.js.map