import { CalendarEvent } from '../types';
export declare const getEventsList: (userId: number) => Promise<{
    pet_name: string | null;
    pet_emoji: string | null;
    pet: {
        name: string;
        emoji: string;
    } | null;
    id: number;
    created_at: Date;
    user_id: number;
    pet_id: number | null;
    title: string;
    event_date: string;
    type: string;
    icon_type: string;
}[]>;
export declare const addCalendarEvent: (userId: number, data: Partial<CalendarEvent>) => Promise<CalendarEvent>;
export declare const deleteCalendarEvent: (id: number | string, userId: number) => Promise<void>;
//# sourceMappingURL=calendar.service.d.ts.map