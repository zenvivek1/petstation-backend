import * as medicationsRepository from '../repositories/medications.repository';
import * as petRepository from '../repositories/pet.repository';
import { Medication } from '../types';
import prisma from '../lib/prisma';

export const getAllMedications = async (userId: number) => {
  return await medicationsRepository.findAllByUserId(userId);
};

export const createMedication = async (userId: number, medData: Partial<Medication>) => {
  const { pet_id, name, next_dose_date } = medData;

  if (!pet_id || !name || !medData.frequency) {
    throw new Error('Pet ID, name, and frequency are required.');
  }

  const pet = await petRepository.findByIdAndUserId(pet_id, userId);
  if (!pet) throw new Error('Pet not found or unauthorized.');

  const createdMedication = await medicationsRepository.create(medData);

  // Business Logic: Sync to calendar
  if (next_dose_date) {
    await prisma.calendarEvent.create({
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

export const deleteMedication = async (id: number | string, userId: number) => {
    const deletedCount = await medicationsRepository.remove(id, userId);
    if (deletedCount === 0) throw new Error('Medication not found or unauthorized.');
};

