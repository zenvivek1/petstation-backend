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
exports.createHealthRecord = exports.getHealthRecordsByPet = exports.getAllHealthRecords = void 0;
const healthRepository = __importStar(require("../repositories/health.repository"));
const petRepository = __importStar(require("../repositories/pet.repository"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const getAllHealthRecords = async (userId) => {
    return await healthRepository.findAllByUserId(userId);
};
exports.getAllHealthRecords = getAllHealthRecords;
const getHealthRecordsByPet = async (petId, userId) => {
    const pet = await petRepository.findByIdAndUserId(petId, userId);
    if (!pet)
        throw new Error('Pet not found or unauthorized.');
    return await healthRepository.findByPetId(petId);
};
exports.getHealthRecordsByPet = getHealthRecordsByPet;
const createHealthRecord = async (userId, recordData) => {
    const { pet_id, score, weight_kg } = recordData;
    if (!pet_id || score === undefined) {
        throw new Error('Pet ID and health score are required.');
    }
    const pet = await petRepository.findByIdAndUserId(pet_id, userId);
    if (!pet)
        throw new Error('Pet not found or unauthorized.');
    const createdRecord = await healthRepository.create(recordData);
    // Business Logic: Update pet's main status and score when a new record is added
    await prisma_1.default.pet.update({
        where: { id: Number(pet_id) },
        data: {
            health_score: score,
            weight_kg: weight_kg !== undefined ? weight_kg : undefined,
            status: score >= 90 ? 'Healthy' : 'Needs Checkup'
        }
    });
    return createdRecord;
};
exports.createHealthRecord = createHealthRecord;
//# sourceMappingURL=health.service.js.map