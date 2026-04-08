import { Pet } from '../types';
export declare const findAllByUserId: (userId: number) => Promise<Pet[]>;
export declare const findByIdAndUserId: (petId: string | number, userId: number) => Promise<Pet | null>;
export declare const create: (petData: any) => Promise<Pet>;
export declare const update: (petId: string | number, userId: number, petData: any) => Promise<Pet | null>;
export declare const remove: (petId: string | number, userId: number) => Promise<number>;
//# sourceMappingURL=pet.repository.d.ts.map