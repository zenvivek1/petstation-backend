import { Vet, VetRecord } from '../types';
export declare const findAllByUserId: (userId: number) => Promise<Vet[]>;
export declare const findAllRecordsByUserId: (userId: number) => Promise<{
    pet_name: string;
    pet_emoji: string;
    pet: {
        name: string;
        emoji: string;
    };
    date: string;
    id: number;
    status: string;
    pet_id: number;
    type: string;
    vet_id: number | null;
    vet_name: string | null;
    notes: string | null;
}[]>;
export declare const createVet: (data: any) => Promise<Vet>;
export declare const findVetById: (id: number | string) => Promise<Vet | null>;
export declare const createRecord: (data: any) => Promise<VetRecord>;
export declare const findRecordById: (id: number | string) => Promise<VetRecord | null>;
//# sourceMappingURL=vets.repository.d.ts.map