import prisma from '../lib/prisma';
import { Vet, VetRecord } from '../types';

export const findAllByUserId = async (userId: number): Promise<Vet[]> => {
  return prisma.vet.findMany({
    where: { user_id: userId },
    orderBy: { name: 'asc' }
  });
};

export const findAllRecordsByUserId = async (userId: number) => {
  const result = await prisma.vetRecord.findMany({
    where: {
      pet: { user_id: userId }
    },
    include: {
      pet: {
        select: { name: true, emoji: true }
      }
    },
    orderBy: { date: 'desc' }
  });

  return result.map(vr => ({
    ...vr,
    pet_name: vr.pet.name,
    pet_emoji: vr.pet.emoji
  }));
};

export const createVet = async (data: any): Promise<Vet> => {
  const { user_id, name, clinic, phone, address, specialty } = data;
  return prisma.vet.create({
    data: {
      user_id,
      name: name?.trim(),
      clinic: clinic?.trim() || null,
      phone: phone?.trim() || null,
      address: address?.trim() || null,
      specialty: specialty?.trim() || 'General'
    }
  });
};

export const findVetById = async (id: number | string): Promise<Vet | null> => {
    return prisma.vet.findUnique({
      where: { id: Number(id) }
    });
};

export const createRecord = async (data: any): Promise<VetRecord> => {
  const { pet_id, vet_id, vet_name, date, type, notes, status } = data;
  return prisma.vetRecord.create({
    data: {
      pet_id: Number(pet_id),
      vet_id: vet_id ? Number(vet_id) : null,
      vet_name: vet_name?.trim() || null,
      date,
      type,
      notes: notes?.trim() || null,
      status: status || 'Scheduled'
    }
  });
};

export const findRecordById = async (id: number | string): Promise<VetRecord | null> => {
    return prisma.vetRecord.findUnique({
      where: { id: Number(id) }
    });
};

