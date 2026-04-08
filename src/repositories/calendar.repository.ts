import prisma from '../lib/prisma';
import { CalendarEvent } from '../types';

export const findAllByUserId = async (userId: number) => {
  const result = await prisma.calendarEvent.findMany({
    where: { user_id: userId },
    include: {
      pet: {
        select: { name: true, emoji: true }
      }
    },
    orderBy: { event_date: 'asc' }
  });

  return result.map(ce => ({
    ...ce,
    pet_name: ce.pet?.name || null,
    pet_emoji: ce.pet?.emoji || null
  }));
};

export const create = async (data: any): Promise<CalendarEvent> => {
  const { pet_id, user_id, title, event_date, type, icon_type } = data;
  return prisma.calendarEvent.create({
    data: {
      pet_id: pet_id ? Number(pet_id) : null,
      user_id,
      title: title?.trim(),
      event_date,
      type,
      icon_type: icon_type || 'calendar'
    }
  });
};

export const findById = async (id: number | string): Promise<CalendarEvent | null> => {
    return prisma.calendarEvent.findUnique({
      where: { id: Number(id) }
    });
};

export const remove = async (id: number | string, userId: number): Promise<number> => {
    const result = await prisma.calendarEvent.deleteMany({
      where: {
        id: Number(id),
        user_id: userId
      }
    });
    return result.count;
};

