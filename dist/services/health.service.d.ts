import { HealthRecord } from '../types';
export declare const getAllHealthRecords: (userId: number) => Promise<{
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
export declare const getHealthRecordsByPet: (petId: string | number, userId: number) => Promise<HealthRecord[]>;
export declare const createHealthRecord: (userId: number, recordData: Partial<HealthRecord>) => Promise<HealthRecord>;
//# sourceMappingURL=health.service.d.ts.map