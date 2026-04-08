import { Request, Response } from 'express';
import * as vetsService from '../services/vets.service';

export const getVets = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const vets = await vetsService.getVetsList(userId);
    res.status(200).json({ vets });
  } catch (err) {
    console.error('Get vets error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const getVetRecords = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const records = await vetsService.getVetRecordsList(userId);
    res.status(200).json({ records });
  } catch (err) {
    console.error('Get vet records error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const createVet = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const vet = await vetsService.addVetContact(userId, req.body);
    res.status(201).json({ message: 'Vet added successfully.', vet });
  } catch (err) {
    console.error('Add vet error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const createVetRecord = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const record = await vetsService.addVetVisitRecord(userId, req.body);
    res.status(201).json({ message: 'Vet record added successfully.', record });
  } catch (err) {
    console.error('Add vet record error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};
