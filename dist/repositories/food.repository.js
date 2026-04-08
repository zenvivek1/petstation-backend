"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateScheduleStatus = exports.findScheduleById = exports.createSchedule = exports.findAlertsByUserId = exports.findScheduleByUserId = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const findScheduleByUserId = async (userId) => {
    const today = new Date().toISOString().split('T')[0];
    const result = await prisma_1.default.feedingSchedule.findMany({
        where: {
            pet: { user_id: userId },
            schedule_date: today
        },
        include: {
            pet: {
                select: { name: true, emoji: true }
            }
        },
        orderBy: { time: 'asc' }
    });
    return result.map(fs => ({
        ...fs,
        pet_name: fs.pet.name,
        pet_emoji: fs.pet.emoji
    }));
};
exports.findScheduleByUserId = findScheduleByUserId;
const findAlertsByUserId = async (userId) => {
    const result = await prisma_1.default.foodAlert.findMany({
        where: {
            pet: { user_id: userId },
            is_resolved: false
        },
        include: {
            pet: {
                select: { name: true }
            }
        },
        orderBy: { created_at: 'desc' }
    });
    return result.map(fa => ({
        ...fa,
        pet_name: fa.pet.name
    }));
};
exports.findAlertsByUserId = findAlertsByUserId;
const createSchedule = async (data) => {
    const { pet_id, meal_type, time, food_name, amount_g } = data;
    return prisma_1.default.feedingSchedule.create({
        data: {
            pet_id: Number(pet_id),
            meal_type,
            time,
            food_name,
            amount_g
        }
    });
};
exports.createSchedule = createSchedule;
const findScheduleById = async (id) => {
    return prisma_1.default.feedingSchedule.findUnique({
        where: { id: Number(id) }
    });
};
exports.findScheduleById = findScheduleById;
const updateScheduleStatus = async (id, userId, status) => {
    const result = await prisma_1.default.feedingSchedule.updateMany({
        where: {
            id: Number(id),
            pet: { user_id: userId }
        },
        data: { status }
    });
    return result.count;
};
exports.updateScheduleStatus = updateScheduleStatus;
//# sourceMappingURL=food.repository.js.map