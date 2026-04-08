import prisma from '../lib/prisma';
import { HealthRecord } from '../types';

export const findAllByUserId = async (userId: number) => {
  const result = await prisma.healthRecord.findMany({
    where: {
      pet: { user_id: userId }
    },
    include: {
      pet: {
        select: { name: true, emoji: true }
      }
    },
    orderBy: { recorded_at: 'desc' }
  });

  return result.map(hr => ({
    ...hr,
    pet_name: hr.pet.name,
    pet_emoji: hr.pet.emoji
  }));
};

export const findByPetId = async (petId: string | number): Promise<HealthRecord[]> => {
  return prisma.healthRecord.findMany({
    where: { pet_id: Number(petId) },
    orderBy: { recorded_at: 'desc' }
  });
};

export const create = async (recordData: any): Promise<HealthRecord> => {
  const { pet_id, score, weight_kg, last_checkup, vaccinated, conditions } = recordData;
  return prisma.healthRecord.create({
    data: {
      pet_id: Number(pet_id),
      score,
      weight_kg: weight_kg || null,
      last_checkup: last_checkup || null,
      vaccinated: !!vaccinated,
      conditions: conditions || '[]'
    }
  });
};

export const findById = async (id: number | string): Promise<HealthRecord | null> => {
    return prisma.healthRecord.findUnique({
      where: { id: Number(id) }
    });
};

