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
exports.markFeedingDone = exports.addFeedingScheduleItem = exports.getActiveFoodAlerts = exports.getTodaySchedule = void 0;
const foodRepository = __importStar(require("../repositories/food.repository"));
const petRepository = __importStar(require("../repositories/pet.repository"));
const getTodaySchedule = async (userId) => {
    return await foodRepository.findScheduleByUserId(userId);
};
exports.getTodaySchedule = getTodaySchedule;
const getActiveFoodAlerts = async (userId) => {
    return await foodRepository.findAlertsByUserId(userId);
};
exports.getActiveFoodAlerts = getActiveFoodAlerts;
const addFeedingScheduleItem = async (userId, data) => {
    const { pet_id, meal_type, time, food_name, amount_g } = data;
    if (!pet_id || !meal_type || !time || !food_name || amount_g === undefined) {
        throw new Error('Pet ID, meal type, time, food name, and amount are required.');
    }
    const pet = await petRepository.findByIdAndUserId(pet_id, userId);
    if (!pet)
        throw new Error('Pet not found or unauthorized.');
    const createdSchedule = await foodRepository.createSchedule(data);
    return createdSchedule;
};
exports.addFeedingScheduleItem = addFeedingScheduleItem;
const markFeedingDone = async (id, userId) => {
    const updatedCount = await foodRepository.updateScheduleStatus(id, userId, 'Done');
    if (updatedCount === 0)
        throw new Error('Feeding task not found or unauthorized.');
};
exports.markFeedingDone = markFeedingDone;
//# sourceMappingURL=food.service.js.map