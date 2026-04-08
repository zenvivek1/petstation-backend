import { Request, Response } from 'express';
import * as petService from '../services/pet.service';

export const getPets = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const pets = await petService.getPetsByUserId(userId);
    res.status(200).json({ pets });
  } catch (err) {
    console.error('Get pets error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const createPet = async (req: Request, res: Response): Promise<void> => {
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
  } catch (err) {
    console.error('Add pet error:', err);
    res.status(err instanceof Error && err.message.includes('failed') ? 400 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};

export const updatePet = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const petId = req.params.id as string;
    const updatedPet = await petService.updatePetData(petId, userId, req.body);
    res.status(200).json({ message: 'Pet updated successfully.', pet: updatedPet });
  } catch (err) {
    console.error('Update pet error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};

export const deletePet = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const petId = req.params.id as string;
    await petService.deletePetData(petId, userId);
    res.status(200).json({ message: 'Pet deleted successfully.' });
  } catch (err) {
    console.error('Delete pet error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};
