import prisma from '../lib/prisma';
import { Medication } from '../types';

export const findAllByUserId = async (userId: number) => {
  const result = await prisma.medication.findMany({
    where: {
      pet: { user_id: userId }
    },
    include: {
      pet: {
        select: { name: true, emoji: true }
      }
    },
    orderBy: { next_dose_date: 'asc' }
  });

  return result.map(m => ({
    ...m,
    pet_name: m.pet.name,
    pet_emoji: m.pet.emoji
  }));
};

export const create = async (medData: any): Promise<Medication> => {
  const { pet_id, name, frequency, next_dose_date } = medData;
  return prisma.medication.create({
    data: {
      pet_id: Number(pet_id),
      name: name?.trim(),
      frequency: frequency?.trim(),
      next_dose_date: next_dose_date || null
    }
  });
};

export const findById = async (id: number | string): Promise<Medication | null> => {
    return prisma.medication.findUnique({
      where: { id: Number(id) }
    });
};

export const remove = async (id: number | string, userId: number): Promise<number> => {
    const result = await prisma.medication.deleteMany({
      where: {
        id: Number(id),
        pet: { user_id: userId }
      }
    });
    return result.count;
};

