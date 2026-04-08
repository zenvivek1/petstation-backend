import { CalendarEvent } from '../types';
export declare const findAllByUserId: (userId: number) => Promise<{
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
export declare const create: (data: any) => Promise<CalendarEvent>;
export declare const findById: (id: number | string) => Promise<CalendarEvent | null>;
export declare const remove: (id: number | string, userId: number) => Promise<number>;
//# sourceMappingURL=calendar.repository.d.ts.map