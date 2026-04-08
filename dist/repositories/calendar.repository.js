"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.findById = exports.create = exports.findAllByUserId = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const findAllByUserId = async (userId) => {
    const result = await prisma_1.default.calendarEvent.findMany({
        where: { user_id: userId },
        include: {
            pet: {
                select: { name: true, emoji: true }
            }
        },
        orderBy: { event_date: 'asc' }
    });
    return result.map(ce => ({
        ...ce,
        pet_name: ce.pet?.name || null,
        pet_emoji: ce.pet?.emoji || null
    }));
};
exports.findAllByUserId = findAllByUserId;
const create = async (data) => {
    const { pet_id, user_id, title, event_date, type, icon_type } = data;
    return prisma_1.default.calendarEvent.create({
        data: {
            pet_id: pet_id ? Number(pet_id) : null,
            user_id,
            title: title?.trim(),
            event_date,
            type,
            icon_type: icon_type || 'calendar'
        }
    });
};
exports.create = create;
const findById = async (id) => {
    return prisma_1.default.calendarEvent.findUnique({
        where: { id: Number(id) }
    });
};
exports.findById = findById;
const remove = async (id, userId) => {
    const result = await prisma_1.default.calendarEvent.deleteMany({
        where: {
            id: Number(id),
            user_id: userId
        }
    });
    return result.count;
};
exports.remove = remove;
//# sourceMappingURL=calendar.repository.js.map