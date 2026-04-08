import { FeedingSchedule } from '../types';
export declare const getTodaySchedule: (userId: number) => Promise<{
    pet_name: string;
    pet_emoji: string;
    pet: {
        name: string;
        emoji: string;
    };
    id: number;
    status: string;
    pet_id: number;
    meal_type: string;
    time: string;
    food_name: string;
    amount_g: number;
    schedule_date: string;
}[]>;
export declare const getActiveFoodAlerts: (userId: number) => Promise<{
    pet_name: string;
    pet: {
        name: string;
    };
    level: string;
    id: number;
    created_at: Date;
    pet_id: number;
    message: string;
    is_resolved: boolean;
}[]>;
export declare const addFeedingScheduleItem: (userId: number, data: Partial<FeedingSchedule>) => Promise<FeedingSchedule>;
export declare const markFeedingDone: (id: number | string, userId: number) => Promise<void>;
//# sourceMappingURL=food.service.d.ts.map