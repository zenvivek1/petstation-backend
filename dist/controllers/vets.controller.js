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
exports.createVetRecord = exports.createVet = exports.getVetRecords = exports.getVets = void 0;
const vetsService = __importStar(require("../services/vets.service"));
const getVets = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const vets = await vetsService.getVetsList(userId);
        res.status(200).json({ vets });
    }
    catch (err) {
        console.error('Get vets error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.getVets = getVets;
const getVetRecords = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const records = await vetsService.getVetRecordsList(userId);
        res.status(200).json({ records });
    }
    catch (err) {
        console.error('Get vet records error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.getVetRecords = getVetRecords;
const createVet = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const vet = await vetsService.addVetContact(userId, req.body);
        res.status(201).json({ message: 'Vet added successfully.', vet });
    }
    catch (err) {
        console.error('Add vet error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.createVet = createVet;
const createVetRecord = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const record = await vetsService.addVetVisitRecord(userId, req.body);
        res.status(201).json({ message: 'Vet record added successfully.', record });
    }
    catch (err) {
        console.error('Add vet record error:', err);
        res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.createVetRecord = createVetRecord;
//# sourceMappingURL=vets.controller.js.map