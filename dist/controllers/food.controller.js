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
exports.markDone = exports.createSchedule = exports.getFoodAlerts = exports.getFeedingSchedule = void 0;
const foodService = __importStar(require("../services/food.service"));
const getFeedingSchedule = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const schedule = await foodService.getTodaySchedule(userId);
        res.status(200).json({ schedule });
    }
    catch (err) {
        console.error('Get feeding schedule error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.getFeedingSchedule = getFeedingSchedule;
const getFoodAlerts = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const alerts = await foodService.getActiveFoodAlerts(userId);
        res.status(200).json({ alerts });
    }
    catch (err) {
        console.error('Get food alerts error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.getFoodAlerts = getFoodAlerts;
const createSchedule = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const schedule = await foodService.addFeedingScheduleItem(userId, req.body);
        res.status(201).json({ message: 'Feeding schedule added successfully.', schedule });
    }
    catch (err) {
        console.error('Add feeding schedule error:', err);
        res.status(err instanceof Error && err.message.includes('found or unauthorized') ? 404 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.createSchedule = createSchedule;
const markDone = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const id = req.params.id;
        await foodService.markFeedingDone(id, userId);
        res.status(200).json({ message: 'Feeding task marked as done.' });
    }
    catch (err) {
        console.error('Mark feeding as done error:', err);
        res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.markDone = markDone;
//# sourceMappingURL=food.controller.js.map