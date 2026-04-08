import prisma from '../lib/prisma';
import { FeedingSchedule } from '../types';

export const findScheduleByUserId = async (userId: number) => {
  const today = new Date().toISOString().split('T')[0];
  const result = await prisma.feedingSchedule.findMany({
    where: {
      pet: { user_id: userId },
      schedule_date: today
    },
    include: {
      pet: {
        select: { name: true, emoji: true }
      }
    },
    orderBy: { time: 'asc' }
  });

  return result.map(fs => ({
    ...fs,
    pet_name: fs.pet.name,
    pet_emoji: fs.pet.emoji
  }));
};

export const findAlertsByUserId = async (userId: number) => {
  const result = await prisma.foodAlert.findMany({
    where: {
      pet: { user_id: userId },
      is_resolved: false
    },
    include: {
      pet: {
        select: { name: true }
      }
    },
    orderBy: { created_at: 'desc' }
  });

  return result.map(fa => ({
    ...fa,
    pet_name: fa.pet.name
  }));
};

export const createSchedule = async (data: any): Promise<FeedingSchedule> => {
  const { pet_id, meal_type, time, food_name, amount_g } = data;
  return prisma.feedingSchedule.create({
    data: {
      pet_id: Number(pet_id),
      meal_type,
      time,
      food_name,
      amount_g
    }
  });
};

export const findScheduleById = async (id: number | string): Promise<FeedingSchedule | null> => {
    return prisma.feedingSchedule.findUnique({
      where: { id: Number(id) }
    });
};

export const updateScheduleStatus = async (id: number | string, userId: number, status: string): Promise<number> => {
    const result = await prisma.feedingSchedule.updateMany({
      where: {
        id: Number(id),
        pet: { user_id: userId }
      },
      data: { status }
    });
    return result.count;
};

