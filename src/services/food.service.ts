import * as foodRepository from '../repositories/food.repository';
import * as petRepository from '../repositories/pet.repository';
import { FeedingSchedule } from '../types';

export const getTodaySchedule = async (userId: number) => {
  return await foodRepository.findScheduleByUserId(userId);
};

export const getActiveFoodAlerts = async (userId: number) => {
  return await foodRepository.findAlertsByUserId(userId);
};

export const addFeedingScheduleItem = async (userId: number, data: Partial<FeedingSchedule>) => {
  const { pet_id, meal_type, time, food_name, amount_g } = data;

  if (!pet_id || !meal_type || !time || !food_name || amount_g === undefined) {
    throw new Error('Pet ID, meal type, time, food name, and amount are required.');
  }

  const pet = await petRepository.findByIdAndUserId(pet_id, userId);
  if (!pet) throw new Error('Pet not found or unauthorized.');

  const createdSchedule = await foodRepository.createSchedule(data);
  return createdSchedule;
};

export const markFeedingDone = async (id: number | string, userId: number) => {
    const updatedCount = await foodRepository.updateScheduleStatus(id, userId, 'Done');
    if (updatedCount === 0) throw new Error('Feeding task not found or unauthorized.');
};

