import { Request, Response } from 'express';
import * as healthService from '../services/health.service';

export const getHealthRecords = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const records = await healthService.getAllHealthRecords(userId);
    res.status(200).json({ records });
  } catch (err) {
    console.error('Get health records error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const getHealthByPet = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const petId = req.params.petId as string;
    const records = await healthService.getHealthRecordsByPet(petId, userId);
    res.status(200).json({ records });
  } catch (err) {
    console.error('Get health for pet error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};

export const createHealthRecord = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const record = await healthService.createHealthRecord(userId, req.body);
    res.status(201).json({ message: 'Health record added successfully.', record });
  } catch (err) {
    console.error('Add health record error:', err);
    res.status(err instanceof Error && err.message.includes('found or unauthorized') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};
