"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.findById = exports.create = exports.findAllByUserId = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const findAllByUserId = async (userId) => {
    const result = await prisma_1.default.medication.findMany({
        where: {
            pet: { user_id: userId }
        },
        include: {
            pet: {
                select: { name: true, emoji: true }
            }
        },
        orderBy: { next_dose_date: 'asc' }
    });
    return result.map(m => ({
        ...m,
        pet_name: m.pet.name,
        pet_emoji: m.pet.emoji
    }));
};
exports.findAllByUserId = findAllByUserId;
const create = async (medData) => {
    const { pet_id, name, frequency, next_dose_date } = medData;
    return prisma_1.default.medication.create({
        data: {
            pet_id: Number(pet_id),
            name: name?.trim(),
            frequency: frequency?.trim(),
            next_dose_date: next_dose_date || null
        }
    });
};
exports.create = create;
const findById = async (id) => {
    return prisma_1.default.medication.findUnique({
        where: { id: Number(id) }
    });
};
exports.findById = findById;
const remove = async (id, userId) => {
    const result = await prisma_1.default.medication.deleteMany({
        where: {
            id: Number(id),
            pet: { user_id: userId }
        }
    });
    return result.count;
};
exports.remove = remove;
//# sourceMappingURL=medications.repository.js.map