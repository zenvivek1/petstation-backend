import { Request, Response } from 'express';
import * as medicationsService from '../services/medications.service';

export const getMedications = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const medications = await medicationsService.getAllMedications(userId);
    res.status(200).json({ medications });
  } catch (err) {
    console.error('Get medications error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const createMedication = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const medication = await medicationsService.createMedication(userId, req.body);
    res.status(201).json({ message: 'Medication added successfully.', medication });
  } catch (err) {
    console.error('Add medication error:', err);
    res.status(err instanceof Error && err.message.includes('found or unauthorized') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};

export const deleteMedication = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const id = req.params.id as string;
    await medicationsService.deleteMedication(id, userId);
    res.status(200).json({ message: 'Medication deleted successfully.' });
  } catch (err) {
    console.error('Delete medication error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};
