import { HealthRecord } from '../types';
export declare const findAllByUserId: (userId: number) => Promise<{
    pet_name: string;
    pet_emoji: string;
    pet: {
        name: string;
        emoji: string;
    };
    id: number;
    weight_kg: number | null;
    pet_id: number;
    score: number;
    last_checkup: string | null;
    vaccinated: boolean;
    conditions: string;
    recorded_at: Date;
}[]>;
export declare const findByPetId: (petId: string | number) => Promise<HealthRecord[]>;
export declare const create: (recordData: any) => Promise<HealthRecord>;
export declare const findById: (id: number | string) => Promise<HealthRecord | null>;
//# sourceMappingURL=health.repository.d.ts.map