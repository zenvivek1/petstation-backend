import { FeedingSchedule } from '../types';
export declare const findScheduleByUserId: (userId: number) => Promise<{
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
export declare const findAlertsByUserId: (userId: number) => Promise<{
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
export declare const createSchedule: (data: any) => Promise<FeedingSchedule>;
export declare const findScheduleById: (id: number | string) => Promise<FeedingSchedule | null>;
export declare const updateScheduleStatus: (id: number | string, userId: number, status: string) => Promise<number>;
//# sourceMappingURL=food.repository.d.ts.map