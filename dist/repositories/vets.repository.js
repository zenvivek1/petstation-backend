"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRecordById = exports.createRecord = exports.findVetById = exports.createVet = exports.findAllRecordsByUserId = exports.findAllByUserId = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const findAllByUserId = async (userId) => {
    return prisma_1.default.vet.findMany({
        where: { user_id: userId },
        orderBy: { name: 'asc' }
    });
};
exports.findAllByUserId = findAllByUserId;
const findAllRecordsByUserId = async (userId) => {
    const result = await prisma_1.default.vetRecord.findMany({
        where: {
            pet: { user_id: userId }
        },
        include: {
            pet: {
                select: { name: true, emoji: true }
            }
        },
        orderBy: { date: 'desc' }
    });
    return result.map(vr => ({
        ...vr,
        pet_name: vr.pet.name,
        pet_emoji: vr.pet.emoji
    }));
};
exports.findAllRecordsByUserId = findAllRecordsByUserId;
const createVet = async (data) => {
    const { user_id, name, clinic, phone, address, specialty } = data;
    return prisma_1.default.vet.create({
        data: {
            user_id,
            name: name?.trim(),
            clinic: clinic?.trim() || null,
            phone: phone?.trim() || null,
            address: address?.trim() || null,
            specialty: specialty?.trim() || 'General'
        }
    });
};
exports.createVet = createVet;
const findVetById = async (id) => {
    return prisma_1.default.vet.findUnique({
        where: { id: Number(id) }
    });
};
exports.findVetById = findVetById;
const createRecord = async (data) => {
    const { pet_id, vet_id, vet_name, date, type, notes, status } = data;
    return prisma_1.default.vetRecord.create({
        data: {
            pet_id: Number(pet_id),
            vet_id: vet_id ? Number(vet_id) : null,
            vet_name: vet_name?.trim() || null,
            date,
            type,
            notes: notes?.trim() || null,
            status: status || 'Scheduled'
        }
    });
};
exports.createRecord = createRecord;
const findRecordById = async (id) => {
    return prisma_1.default.vetRecord.findUnique({
        where: { id: Number(id) }
    });
};
exports.findRecordById = findRecordById;
//# sourceMappingURL=vets.repository.js.map