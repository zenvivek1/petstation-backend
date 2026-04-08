import { Vet, VetRecord } from '../types';
export declare const getVetsList: (userId: number) => Promise<Vet[]>;
export declare const getVetRecordsList: (userId: number) => Promise<{
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
export declare const addVetContact: (userId: number, data: Partial<Vet>) => Promise<Vet>;
export declare const addVetVisitRecord: (userId: number, data: Partial<VetRecord>) => Promise<VetRecord>;
//# sourceMappingURL=vets.service.d.ts.map