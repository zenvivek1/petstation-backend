import prisma from '../lib/prisma';
import { Pet } from '../types';

export const findAllByUserId = async (userId: number): Promise<Pet[]> => {
  return prisma.pet.findMany({
    where: { user_id: userId },
    orderBy: { created_at: 'desc' }
  });
};

export const findByIdAndUserId = async (petId: string | number, userId: number): Promise<Pet | null> => {
  return prisma.pet.findFirst({
    where: {
      id: Number(petId),
      user_id: userId
    }
  });
};

export const create = async (petData: any): Promise<Pet> => {
  const { user_id, name, species, breed, gender, color, microchip, bio, image_url, weight_kg, birthday, emoji } = petData;
  return prisma.pet.create({
    data: {
      user_id,
      name: name?.trim(),
      species: species?.trim(),
      breed: breed?.trim() || null,
      gender: gender?.trim() || null,
      color: color?.trim() || null,
      microchip: microchip?.trim() || null,
      bio: bio?.trim() || null,
      image_url: image_url || null,
      weight_kg: weight_kg || null,
      birthday: birthday || null,
      emoji: emoji || '🐾'
    }
  });
};

export const update = async (petId: string | number, userId: number, petData: any): Promise<Pet | null> => {
  const { name, species, breed, gender, color, microchip, bio, image_url, weight_kg, birthday, status, health_score, emoji } = petData;
  return prisma.pet.update({
    where: {
      id: Number(petId),
      user_id: userId
    },
    data: {
      name: name?.trim() || undefined,
      species: species?.trim() || undefined,
      breed: breed?.trim() || undefined,
      gender: gender?.trim() || undefined,
      color: color?.trim() || undefined,
      microchip: microchip?.trim() || undefined,
      bio: bio?.trim() || undefined,
      image_url: image_url || undefined,
      weight_kg: weight_kg || undefined,
      birthday: birthday || undefined,
      status: status || undefined,
      health_score: health_score || undefined,
      emoji: emoji || undefined
    }
  });
};

export const remove = async (petId: string | number, userId: number): Promise<number> => {
  const result = await prisma.pet.deleteMany({
    where: {
      id: Number(petId),
      user_id: userId
    }
  });
  return result.count;
};
