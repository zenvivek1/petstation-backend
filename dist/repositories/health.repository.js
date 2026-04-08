"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.create = exports.findByPetId = exports.findAllByUserId = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const findAllByUserId = async (userId) => {
    const result = await prisma_1.default.healthRecord.findMany({
        where: {
            pet: { user_id: userId }
        },
        include: {
            pet: {
                select: { name: true, emoji: true }
            }
        },
        orderBy: { recorded_at: 'desc' }
    });
    return result.map(hr => ({
        ...hr,
        pet_name: hr.pet.name,
        pet_emoji: hr.pet.emoji
    }));
};
exports.findAllByUserId = findAllByUserId;
const findByPetId = async (petId) => {
    return prisma_1.default.healthRecord.findMany({
        where: { pet_id: Number(petId) },
        orderBy: { recorded_at: 'desc' }
    });
};
exports.findByPetId = findByPetId;
const create = async (recordData) => {
    const { pet_id, score, weight_kg, last_checkup, vaccinated, conditions } = recordData;
    return prisma_1.default.healthRecord.create({
        data: {
            pet_id: Number(pet_id),
            score,
            weight_kg: weight_kg || null,
            last_checkup: last_checkup || null,
            vaccinated: !!vaccinated,
            conditions: conditions || '[]'
        }
    });
};
exports.create = create;
const findById = async (id) => {
    return prisma_1.default.healthRecord.findUnique({
        where: { id: Number(id) }
    });
};
exports.findById = findById;
//# sourceMappingURL=health.repository.js.map