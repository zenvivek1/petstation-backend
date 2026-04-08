import * as vetsRepository from '../repositories/vets.repository';
import * as petRepository from '../repositories/pet.repository';
import { Vet, VetRecord } from '../types';
import prisma from '../lib/prisma';

export const getVetsList = async (userId: number) => {
  return await vetsRepository.findAllByUserId(userId);
};

export const getVetRecordsList = async (userId: number) => {
  return await vetsRepository.findAllRecordsByUserId(userId);
};

export const addVetContact = async (userId: number, data: Partial<Vet>) => {
  if (!data.name) throw new Error('Vet name is required.');
  const newVet = await vetsRepository.createVet({ ...data, user_id: userId });
  return newVet;
};

export const addVetVisitRecord = async (userId: number, data: Partial<VetRecord>) => {
  const { pet_id, date, type } = data;

  if (!pet_id || !date || !type) {
    throw new Error('Pet ID, date, and visit type are required.');
  }

  const pet = await petRepository.findByIdAndUserId(pet_id, userId);
  if (!pet) throw new Error('Pet not found or unauthorized.');

  const createdRecord = await vetsRepository.createRecord(data);

  // Business Logic: Sync visit to calendar
  await prisma.calendarEvent.create({
    data: {
      pet_id: Number(pet_id),
      user_id: userId,
      title: `${type} for ${pet.name}`,
      event_date: date,
      type: 'Vet Visit',
      icon_type: 'stethoscope'
    }
  });

  return createdRecord;
};

