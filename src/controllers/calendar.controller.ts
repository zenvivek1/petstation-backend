import { Request, Response } from 'express';
import * as calendarService from '../services/calendar.service';

export const getEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const events = await calendarService.getEventsList(userId);
    res.status(200).json({ events });
  } catch (err) {
    console.error('Get calendar events error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const createEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const event = await calendarService.addCalendarEvent(userId, req.body);
    res.status(201).json({ message: 'Event added successfully.', event });
  } catch (err) {
    console.error('Add calendar event error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const id = req.params.id as string;
    await calendarService.deleteCalendarEvent(id, userId);
    res.status(200).json({ message: 'Event deleted successfully.' });
  } catch (err) {
    console.error('Delete calendar event error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};
