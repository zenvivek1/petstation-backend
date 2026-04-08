import * as calendarRepository from '../repositories/calendar.repository';
import * as petRepository from '../repositories/pet.repository';
import { CalendarEvent } from '../types';

export const getEventsList = async (userId: number) => {
  return await calendarRepository.findAllByUserId(userId);
};

export const addCalendarEvent = async (userId: number, data: Partial<CalendarEvent>) => {
  const { pet_id, title, event_date, type } = data;

  if (!title || !event_date || !type) {
    throw new Error('Event title, date, and type are required.');
  }

  if (pet_id) {
    const pet = await petRepository.findByIdAndUserId(pet_id, userId);
    if (!pet) throw new Error('Pet not found or unauthorized.');
  }

  const createdEvent = await calendarRepository.create({ ...data, user_id: userId });
  return createdEvent;
};

export const deleteCalendarEvent = async (id: number | string, userId: number) => {
    const deletedCount = await calendarRepository.remove(id, userId);
    if (deletedCount === 0) throw new Error('Event not found or unauthorized.');
};

