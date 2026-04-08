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
exports.deletePet = exports.updatePet = exports.createPet = exports.getPets = void 0;
const petService = __importStar(require("../services/pet.service"));
const getPets = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const pets = await petService.getPetsByUserId(userId);
        res.status(200).json({ pets });
    }
    catch (err) {
        console.error('Get pets error:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
exports.getPets = getPets;
const createPet = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        if (!req.body.name || !req.body.species) {
            res.status(400).json({ error: 'Pet name and species are required.' });
            return;
        }
        const pet = await petService.createPet(userId, req.body);
        res.status(201).json({ message: 'Pet added successfully.', pet });
    }
    catch (err) {
        console.error('Add pet error:', err);
        res.status(err instanceof Error && err.message.includes('failed') ? 400 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.createPet = createPet;
const updatePet = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const petId = req.params.id;
        const updatedPet = await petService.updatePetData(petId, userId, req.body);
        res.status(200).json({ message: 'Pet updated successfully.', pet: updatedPet });
    }
    catch (err) {
        console.error('Update pet error:', err);
        res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.updatePet = updatePet;
const deletePet = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const petId = req.params.id;
        await petService.deletePetData(petId, userId);
        res.status(200).json({ message: 'Pet deleted successfully.' });
    }
    catch (err) {
        console.error('Delete pet error:', err);
        res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
            .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
    }
};
exports.deletePet = deletePet;
//# sourceMappingURL=pet.controller.js.map