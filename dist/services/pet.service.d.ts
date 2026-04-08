import { Pet } from '../types';
export declare const getPetsByUserId: (userId: number) => Promise<Pet[]>;
export declare const createPet: (userId: number, petData: Partial<Pet>) => Promise<Pet>;
export declare const updatePetData: (petId: string | number, userId: number, petData: Partial<Pet>) => Promise<Pet>;
export declare const deletePetData: (petId: string | number, userId: number) => Promise<void>;
//# sourceMappingURL=pet.service.d.ts.map