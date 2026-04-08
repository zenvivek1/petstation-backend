import { Medication } from '../types';
export declare const findAllByUserId: (userId: number) => Promise<{
    pet_name: string;
    pet_emoji: string;
    pet: {
        name: string;
        emoji: string;
    };
    name: string;
    id: number;
    created_at: Date;
    pet_id: number;
    frequency: string;
    next_dose_date: string | null;
}[]>;
export declare const create: (medData: any) => Promise<Medication>;
export declare const findById: (id: number | string) => Promise<Medication | null>;
export declare const remove: (id: number | string, userId: number) => Promise<number>;
//# sourceMappingURL=medications.repository.d.ts.map