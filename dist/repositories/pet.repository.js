"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.findByIdAndUserId = exports.findAllByUserId = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const findAllByUserId = async (userId) => {
    return prisma_1.default.pet.findMany({
        where: { user_id: userId },
        orderBy: { created_at: 'desc' }
    });
};
exports.findAllByUserId = findAllByUserId;
const findByIdAndUserId = async (petId, userId) => {
    return prisma_1.default.pet.findFirst({
        where: {
            id: Number(petId),
            user_id: userId
        }
    });
};
exports.findByIdAndUserId = findByIdAndUserId;
const create = async (petData) => {
    const { user_id, name, species, breed, gender, color, microchip, bio, image_url, weight_kg, birthday, emoji } = petData;
    return prisma_1.default.pet.create({
        data: {
            user_id,
            name: name?.trim(),
            species: species?.trim(),
            breed: breed?.trim() || null,
            gender: gender?.trim() || null,
            color: color?.trim() || null,
            microchip: microchip?.trim() || null,
            bio: bio?.trim() || null,
            image_url: image_url || null,
            weight_kg: weight_kg || null,
            birthday: birthday || null,
            emoji: emoji || '🐾'
        }
    });
};
exports.create = create;
const update = async (petId, userId, petData) => {
    const { name, species, breed, gender, color, microchip, bio, image_url, weight_kg, birthday, status, health_score, emoji } = petData;
    return prisma_1.default.pet.update({
        where: {
            id: Number(petId),
            user_id: userId
        },
        data: {
            name: name?.trim() || undefined,
            species: species?.trim() || undefined,
            breed: breed?.trim() || undefined,
            gender: gender?.trim() || undefined,
            color: color?.trim() || undefined,
            microchip: microchip?.trim() || undefined,
            bio: bio?.trim() || undefined,
            image_url: image_url || undefined,
            weight_kg: weight_kg || undefined,
            birthday: birthday || undefined,
            status: status || undefined,
            health_score: health_score || undefined,
            emoji: emoji || undefined
        }
    });
};
exports.update = update;
const remove = async (petId, userId) => {
    const result = await prisma_1.default.pet.deleteMany({
        where: {
            id: Number(petId),
            user_id: userId
        }
    });
    return result.count;
};
exports.remove = remove;
//# sourceMappingURL=pet.repository.js.map