import * as petRepository from '../repositories/pet.repository';
import { Pet } from '../types';

export const getPetsByUserId = async (userId: number): Promise<Pet[]> => {
  return await petRepository.findAllByUserId(userId);
};

export const createPet = async (userId: number, petData: Partial<Pet>): Promise<Pet> => {
  const pet = await petRepository.create({ ...petData, user_id: userId });
  if (!pet) throw new Error('Pet creation failed.');
  return pet;
};

export const updatePetData = async (petId: string | number, userId: number, petData: Partial<Pet>): Promise<Pet> => {
  const exists = await petRepository.findByIdAndUserId(petId, userId);
  if (!exists) throw new Error('Pet not found or unauthorized.');

  const updatedPet = await petRepository.update(petId, userId, petData);
  if (!updatedPet) throw new Error('Update verification failed.');
  return updatedPet;
};

export const deletePetData = async (petId: string | number, userId: number): Promise<void> => {
    const deletedCount = await petRepository.remove(petId, userId);
    if (deletedCount === 0) throw new Error('Pet not found or unauthorized.');
};
