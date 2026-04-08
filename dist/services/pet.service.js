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
exports.deletePetData = exports.updatePetData = exports.createPet = exports.getPetsByUserId = void 0;
const petRepository = __importStar(require("../repositories/pet.repository"));
const getPetsByUserId = async (userId) => {
    return await petRepository.findAllByUserId(userId);
};
exports.getPetsByUserId = getPetsByUserId;
const createPet = async (userId, petData) => {
    const pet = await petRepository.create({ ...petData, user_id: userId });
    if (!pet)
        throw new Error('Pet creation failed.');
    return pet;
};
exports.createPet = createPet;
const updatePetData = async (petId, userId, petData) => {
    const exists = await petRepository.findByIdAndUserId(petId, userId);
    if (!exists)
        throw new Error('Pet not found or unauthorized.');
    const updatedPet = await petRepository.update(petId, userId, petData);
    if (!updatedPet)
        throw new Error('Update verification failed.');
    return updatedPet;
};
exports.updatePetData = updatePetData;
const deletePetData = async (petId, userId) => {
    const deletedCount = await petRepository.remove(petId, userId);
    if (deletedCount === 0)
        throw new Error('Pet not found or unauthorized.');
};
exports.deletePetData = deletePetData;
//# sourceMappingURL=pet.service.js.map