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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVetVisitRecord = exports.addVetContact = exports.getVetRecordsList = exports.getVetsList = void 0;
const vetsRepository = __importStar(require("../repositories/vets.repository"));
const petRepository = __importStar(require("../repositories/pet.repository"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const getVetsList = async (userId) => {
    return await vetsRepository.findAllByUserId(userId);
};
exports.getVetsList = getVetsList;
const getVetRecordsList = async (userId) => {
    return await vetsRepository.findAllRecordsByUserId(userId);
};
exports.getVetRecordsList = getVetRecordsList;
const addVetContact = async (userId, data) => {
    if (!data.name)
        throw new Error('Vet name is required.');
    const newVet = await vetsRepository.createVet({ ...data, user_id: userId });
    return newVet;
};
exports.addVetContact = addVetContact;
const addVetVisitRecord = async (userId, data) => {
    const { pet_id, date, type } = data;
    if (!pet_id || !date || !type) {
        throw new Error('Pet ID, date, and visit type are required.');
    }
    const pet = await petRepository.findByIdAndUserId(pet_id, userId);
    if (!pet)
        throw new Error('Pet not found or unauthorized.');
    const createdRecord = await vetsRepository.createRecord(data);
    // Business Logic: Sync visit to calendar
    await prisma_1.default.calendarEvent.create({
        data: {
            pet_id: Number(pet_id),
            user_id: userId,
            title: `${type} for ${pet.name}`,
            event_date: date,
            type: 'Vet Visit',
            icon_type: 'stethoscope'
        }
    });
    return createdRecord;
};
exports.addVetVisitRecord = addVetVisitRecord;
//# sourceMappingURL=vets.service.js.map