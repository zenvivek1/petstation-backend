import { Medication } from '../types';
export declare const getAllMedications: (userId: number) => Promise<{
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
export declare const createMedication: (userId: number, medData: Partial<Medication>) => Promise<Medication>;
export declare const deleteMedication: (id: number | string, userId: number) => Promise<void>;
//# sourceMappingURL=medications.service.d.ts.map