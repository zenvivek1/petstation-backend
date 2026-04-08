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
exports.deleteMedication = exports.createMedication = exports.getAllMedications = void 0;
const medicationsRepository = __importStar(require("../repositories/medications.repository"));
const petRepository = __importStar(require("../repositories/pet.repository"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const getAllMedications = async (userId) => {
    return await medicationsRepository.findAllByUserId(userId);
};
exports.getAllMedications = getAllMedications;
const createMedication = async (userId, medData) => {
    const { pet_id, name, next_dose_date } = medData;
    if (!pet_id || !name || !medData.frequency) {
        throw new Error('Pet ID, name, and frequency are required.');
    }
    const pet = await petRepository.findByIdAndUserId(pet_id, userId);
    if (!pet)
        throw new Error('Pet not found or unauthorized.');
    const createdMedication = await medicationsRepository.create(medData);
    // Business Logic: Sync to calendar
    if (next_dose_date) {
        await prisma_1.default.calendarEvent.create({
            data: {
                pet_id: Number(pet_id),
                user_id: userId,
                title: `${name} dose`,
                event_date: next_dose_date,
                type: 'Medication',
                icon_type: 'pill'
            }
        });
    }
    return createdMedication;
};
exports.createMedication = createMedication;
const deleteMedication = async (id, userId) => {
    const deletedCount = await medicationsRepository.remove(id, userId);
    if (deletedCount === 0)
        throw new Error('Medication not found or unauthorized.');
};
exports.deleteMedication = deleteMedication;
//# sourceMappingURL=medications.service.js.map