import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.6.0
 * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly UserSettings: "UserSettings";
    readonly Pet: "Pet";
    readonly HealthRecord: "HealthRecord";
    readonly Medication: "Medication";
    readonly FeedingSchedule: "FeedingSchedule";
    readonly Vet: "Vet";
    readonly VetRecord: "VetRecord";
    readonly CalendarEvent: "CalendarEvent";
    readonly FoodAlert: "FoodAlert";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "userSettings" | "pet" | "healthRecord" | "medication" | "feedingSchedule" | "vet" | "vetRecord" | "calendarEvent" | "foodAlert";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserSettings: {
            payload: Prisma.$UserSettingsPayload<ExtArgs>;
            fields: Prisma.UserSettingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                findFirst: {
                    args: Prisma.UserSettingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                findMany: {
                    args: Prisma.UserSettingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>[];
                };
                create: {
                    args: Prisma.UserSettingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                createMany: {
                    args: Prisma.UserSettingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>[];
                };
                delete: {
                    args: Prisma.UserSettingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                update: {
                    args: Prisma.UserSettingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                deleteMany: {
                    args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>[];
                };
                upsert: {
                    args: Prisma.UserSettingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserSettingsPayload>;
                };
                aggregate: {
                    args: Prisma.UserSettingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserSettings>;
                };
                groupBy: {
                    args: Prisma.UserSettingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSettingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserSettingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserSettingsCountAggregateOutputType> | number;
                };
            };
        };
        Pet: {
            payload: Prisma.$PetPayload<ExtArgs>;
            fields: Prisma.PetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>;
                };
                findFirst: {
                    args: Prisma.PetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>;
                };
                findMany: {
                    args: Prisma.PetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>[];
                };
                create: {
                    args: Prisma.PetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>;
                };
                createMany: {
                    args: Prisma.PetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>[];
                };
                delete: {
                    args: Prisma.PetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>;
                };
                update: {
                    args: Prisma.PetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>;
                };
                deleteMany: {
                    args: Prisma.PetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>[];
                };
                upsert: {
                    args: Prisma.PetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetPayload>;
                };
                aggregate: {
                    args: Prisma.PetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePet>;
                };
                groupBy: {
                    args: Prisma.PetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PetCountAggregateOutputType> | number;
                };
            };
        };
        HealthRecord: {
            payload: Prisma.$HealthRecordPayload<ExtArgs>;
            fields: Prisma.HealthRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HealthRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HealthRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>;
                };
                findFirst: {
                    args: Prisma.HealthRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HealthRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>;
                };
                findMany: {
                    args: Prisma.HealthRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>[];
                };
                create: {
                    args: Prisma.HealthRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>;
                };
                createMany: {
                    args: Prisma.HealthRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HealthRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>[];
                };
                delete: {
                    args: Prisma.HealthRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>;
                };
                update: {
                    args: Prisma.HealthRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.HealthRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HealthRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HealthRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>[];
                };
                upsert: {
                    args: Prisma.HealthRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HealthRecordPayload>;
                };
                aggregate: {
                    args: Prisma.HealthRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHealthRecord>;
                };
                groupBy: {
                    args: Prisma.HealthRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HealthRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HealthRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HealthRecordCountAggregateOutputType> | number;
                };
            };
        };
        Medication: {
            payload: Prisma.$MedicationPayload<ExtArgs>;
            fields: Prisma.MedicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MedicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>;
                };
                findFirst: {
                    args: Prisma.MedicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>;
                };
                findMany: {
                    args: Prisma.MedicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>[];
                };
                create: {
                    args: Prisma.MedicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>;
                };
                createMany: {
                    args: Prisma.MedicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>[];
                };
                delete: {
                    args: Prisma.MedicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>;
                };
                update: {
                    args: Prisma.MedicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>;
                };
                deleteMany: {
                    args: Prisma.MedicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MedicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>[];
                };
                upsert: {
                    args: Prisma.MedicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationPayload>;
                };
                aggregate: {
                    args: Prisma.MedicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMedication>;
                };
                groupBy: {
                    args: Prisma.MedicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MedicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicationCountAggregateOutputType> | number;
                };
            };
        };
        FeedingSchedule: {
            payload: Prisma.$FeedingSchedulePayload<ExtArgs>;
            fields: Prisma.FeedingScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeedingScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeedingScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.FeedingScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeedingScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                findMany: {
                    args: Prisma.FeedingScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[];
                };
                create: {
                    args: Prisma.FeedingScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                createMany: {
                    args: Prisma.FeedingScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeedingScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[];
                };
                delete: {
                    args: Prisma.FeedingScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                update: {
                    args: Prisma.FeedingScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.FeedingScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeedingScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeedingScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.FeedingScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.FeedingScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeedingSchedule>;
                };
                groupBy: {
                    args: Prisma.FeedingScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedingScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeedingScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedingScheduleCountAggregateOutputType> | number;
                };
            };
        };
        Vet: {
            payload: Prisma.$VetPayload<ExtArgs>;
            fields: Prisma.VetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>;
                };
                findFirst: {
                    args: Prisma.VetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>;
                };
                findMany: {
                    args: Prisma.VetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>[];
                };
                create: {
                    args: Prisma.VetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>;
                };
                createMany: {
                    args: Prisma.VetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>[];
                };
                delete: {
                    args: Prisma.VetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>;
                };
                update: {
                    args: Prisma.VetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>;
                };
                deleteMany: {
                    args: Prisma.VetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>[];
                };
                upsert: {
                    args: Prisma.VetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetPayload>;
                };
                aggregate: {
                    args: Prisma.VetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVet>;
                };
                groupBy: {
                    args: Prisma.VetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VetCountAggregateOutputType> | number;
                };
            };
        };
        VetRecord: {
            payload: Prisma.$VetRecordPayload<ExtArgs>;
            fields: Prisma.VetRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VetRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VetRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>;
                };
                findFirst: {
                    args: Prisma.VetRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VetRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>;
                };
                findMany: {
                    args: Prisma.VetRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>[];
                };
                create: {
                    args: Prisma.VetRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>;
                };
                createMany: {
                    args: Prisma.VetRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VetRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>[];
                };
                delete: {
                    args: Prisma.VetRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>;
                };
                update: {
                    args: Prisma.VetRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.VetRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VetRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VetRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>[];
                };
                upsert: {
                    args: Prisma.VetRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VetRecordPayload>;
                };
                aggregate: {
                    args: Prisma.VetRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVetRecord>;
                };
                groupBy: {
                    args: Prisma.VetRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VetRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VetRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VetRecordCountAggregateOutputType> | number;
                };
            };
        };
        CalendarEvent: {
            payload: Prisma.$CalendarEventPayload<ExtArgs>;
            fields: Prisma.CalendarEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CalendarEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CalendarEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>;
                };
                findFirst: {
                    args: Prisma.CalendarEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CalendarEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>;
                };
                findMany: {
                    args: Prisma.CalendarEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>[];
                };
                create: {
                    args: Prisma.CalendarEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>;
                };
                createMany: {
                    args: Prisma.CalendarEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CalendarEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>[];
                };
                delete: {
                    args: Prisma.CalendarEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>;
                };
                update: {
                    args: Prisma.CalendarEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>;
                };
                deleteMany: {
                    args: Prisma.CalendarEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CalendarEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CalendarEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>[];
                };
                upsert: {
                    args: Prisma.CalendarEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalendarEventPayload>;
                };
                aggregate: {
                    args: Prisma.CalendarEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCalendarEvent>;
                };
                groupBy: {
                    args: Prisma.CalendarEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CalendarEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CalendarEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CalendarEventCountAggregateOutputType> | number;
                };
            };
        };
        FoodAlert: {
            payload: Prisma.$FoodAlertPayload<ExtArgs>;
            fields: Prisma.FoodAlertFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FoodAlertFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FoodAlertFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>;
                };
                findFirst: {
                    args: Prisma.FoodAlertFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FoodAlertFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>;
                };
                findMany: {
                    args: Prisma.FoodAlertFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>[];
                };
                create: {
                    args: Prisma.FoodAlertCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>;
                };
                createMany: {
                    args: Prisma.FoodAlertCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FoodAlertCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>[];
                };
                delete: {
                    args: Prisma.FoodAlertDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>;
                };
                update: {
                    args: Prisma.FoodAlertUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>;
                };
                deleteMany: {
                    args: Prisma.FoodAlertDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FoodAlertUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FoodAlertUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>[];
                };
                upsert: {
                    args: Prisma.FoodAlertUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FoodAlertPayload>;
                };
                aggregate: {
                    args: Prisma.FoodAlertAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFoodAlert>;
                };
                groupBy: {
                    args: Prisma.FoodAlertGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FoodAlertGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FoodAlertCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FoodAlertCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserSettingsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly notify_vet_visits: "notify_vet_visits";
    readonly notify_feeding: "notify_feeding";
    readonly notify_weekly_report: "notify_weekly_report";
    readonly notify_medication: "notify_medication";
};
export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum];
export declare const PetScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly name: "name";
    readonly species: "species";
    readonly breed: "breed";
    readonly gender: "gender";
    readonly color: "color";
    readonly microchip: "microchip";
    readonly bio: "bio";
    readonly image_url: "image_url";
    readonly weight_kg: "weight_kg";
    readonly birthday: "birthday";
    readonly status: "status";
    readonly health_score: "health_score";
    readonly emoji: "emoji";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum];
export declare const HealthRecordScalarFieldEnum: {
    readonly id: "id";
    readonly pet_id: "pet_id";
    readonly score: "score";
    readonly weight_kg: "weight_kg";
    readonly last_checkup: "last_checkup";
    readonly vaccinated: "vaccinated";
    readonly conditions: "conditions";
    readonly recorded_at: "recorded_at";
};
export type HealthRecordScalarFieldEnum = (typeof HealthRecordScalarFieldEnum)[keyof typeof HealthRecordScalarFieldEnum];
export declare const MedicationScalarFieldEnum: {
    readonly id: "id";
    readonly pet_id: "pet_id";
    readonly name: "name";
    readonly frequency: "frequency";
    readonly next_dose_date: "next_dose_date";
    readonly created_at: "created_at";
};
export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum];
export declare const FeedingScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly pet_id: "pet_id";
    readonly meal_type: "meal_type";
    readonly time: "time";
    readonly food_name: "food_name";
    readonly amount_g: "amount_g";
    readonly schedule_date: "schedule_date";
    readonly status: "status";
};
export type FeedingScheduleScalarFieldEnum = (typeof FeedingScheduleScalarFieldEnum)[keyof typeof FeedingScheduleScalarFieldEnum];
export declare const VetScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly name: "name";
    readonly clinic: "clinic";
    readonly phone: "phone";
    readonly address: "address";
    readonly specialty: "specialty";
};
export type VetScalarFieldEnum = (typeof VetScalarFieldEnum)[keyof typeof VetScalarFieldEnum];
export declare const VetRecordScalarFieldEnum: {
    readonly id: "id";
    readonly pet_id: "pet_id";
    readonly vet_id: "vet_id";
    readonly vet_name: "vet_name";
    readonly date: "date";
    readonly type: "type";
    readonly notes: "notes";
    readonly status: "status";
};
export type VetRecordScalarFieldEnum = (typeof VetRecordScalarFieldEnum)[keyof typeof VetRecordScalarFieldEnum];
export declare const CalendarEventScalarFieldEnum: {
    readonly id: "id";
    readonly pet_id: "pet_id";
    readonly user_id: "user_id";
    readonly title: "title";
    readonly event_date: "event_date";
    readonly type: "type";
    readonly icon_type: "icon_type";
    readonly created_at: "created_at";
};
export type CalendarEventScalarFieldEnum = (typeof CalendarEventScalarFieldEnum)[keyof typeof CalendarEventScalarFieldEnum];
export declare const FoodAlertScalarFieldEnum: {
    readonly id: "id";
    readonly pet_id: "pet_id";
    readonly message: "message";
    readonly level: "level";
    readonly is_resolved: "is_resolved";
    readonly created_at: "created_at";
};
export type FoodAlertScalarFieldEnum = (typeof FoodAlertScalarFieldEnum)[keyof typeof FoodAlertScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    userSettings?: Prisma.UserSettingsOmit;
    pet?: Prisma.PetOmit;
    healthRecord?: Prisma.HealthRecordOmit;
    medication?: Prisma.MedicationOmit;
    feedingSchedule?: Prisma.FeedingScheduleOmit;
    vet?: Prisma.VetOmit;
    vetRecord?: Prisma.VetRecordOmit;
    calendarEvent?: Prisma.CalendarEventOmit;
    foodAlert?: Prisma.FoodAlertOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map