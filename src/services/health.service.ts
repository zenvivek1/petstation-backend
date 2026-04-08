import * as healthRepository from '../repositories/health.repository';
import * as petRepository from '../repositories/pet.repository';
import { HealthRecord } from '../types';
import prisma from '../lib/prisma';

export const getAllHealthRecords = async (userId: number) => {
  return await healthRepository.findAllByUserId(userId);
};

export const getHealthRecordsByPet = async (petId: string | number, userId: number) => {
  const pet = await petRepository.findByIdAndUserId(petId, userId);
  if (!pet) throw new Error('Pet not found or unauthorized.');
  return await healthRepository.findByPetId(petId);
};

export const createHealthRecord = async (userId: number, recordData: Partial<HealthRecord>) => {
  const { pet_id, score, weight_kg } = recordData;

  if (!pet_id || score === undefined) {
    throw new Error('Pet ID and health score are required.');
  }

  const pet = await petRepository.findByIdAndUserId(pet_id, userId);
  if (!pet) throw new Error('Pet not found or unauthorized.');

  const createdRecord = await healthRepository.create(recordData);

  // Business Logic: Update pet's main status and score when a new record is added
  await prisma.pet.update({
    where: { id: Number(pet_id) },
    data: {
      health_score: score,
      weight_kg: weight_kg !== undefined ? weight_kg : undefined,
      status: score >= 90 ? 'Healthy' : 'Needs Checkup'
    }
  });

  return createdRecord;
};

