
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model HealthRecord
 * 
 */
export type HealthRecord = $Result.DefaultSelection<Prisma.$HealthRecordPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model FeedingSchedule
 * 
 */
export type FeedingSchedule = $Result.DefaultSelection<Prisma.$FeedingSchedulePayload>
/**
 * Model Vet
 * 
 */
export type Vet = $Result.DefaultSelection<Prisma.$VetPayload>
/**
 * Model VetRecord
 * 
 */
export type VetRecord = $Result.DefaultSelection<Prisma.$VetRecordPayload>
/**
 * Model CalendarEvent
 * 
 */
export type CalendarEvent = $Result.DefaultSelection<Prisma.$CalendarEventPayload>
/**
 * Model FoodAlert
 * 
 */
export type FoodAlert = $Result.DefaultSelection<Prisma.$FoodAlertPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healthRecord`: Exposes CRUD operations for the **HealthRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthRecords
    * const healthRecords = await prisma.healthRecord.findMany()
    * ```
    */
  get healthRecord(): Prisma.HealthRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedingSchedule`: Exposes CRUD operations for the **FeedingSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedingSchedules
    * const feedingSchedules = await prisma.feedingSchedule.findMany()
    * ```
    */
  get feedingSchedule(): Prisma.FeedingScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vet`: Exposes CRUD operations for the **Vet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vets
    * const vets = await prisma.vet.findMany()
    * ```
    */
  get vet(): Prisma.VetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vetRecord`: Exposes CRUD operations for the **VetRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VetRecords
    * const vetRecords = await prisma.vetRecord.findMany()
    * ```
    */
  get vetRecord(): Prisma.VetRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarEvent`: Exposes CRUD operations for the **CalendarEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarEvents
    * const calendarEvents = await prisma.calendarEvent.findMany()
    * ```
    */
  get calendarEvent(): Prisma.CalendarEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodAlert`: Exposes CRUD operations for the **FoodAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodAlerts
    * const foodAlerts = await prisma.foodAlert.findMany()
    * ```
    */
  get foodAlert(): Prisma.FoodAlertDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserSettings: 'UserSettings',
    Pet: 'Pet',
    HealthRecord: 'HealthRecord',
    Medication: 'Medication',
    FeedingSchedule: 'FeedingSchedule',
    Vet: 'Vet',
    VetRecord: 'VetRecord',
    CalendarEvent: 'CalendarEvent',
    FoodAlert: 'FoodAlert'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "userSettings" | "pet" | "healthRecord" | "medication" | "feedingSchedule" | "vet" | "vetRecord" | "calendarEvent" | "foodAlert"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      HealthRecord: {
        payload: Prisma.$HealthRecordPayload<ExtArgs>
        fields: Prisma.HealthRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          findFirst: {
            args: Prisma.HealthRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          findMany: {
            args: Prisma.HealthRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>[]
          }
          create: {
            args: Prisma.HealthRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          createMany: {
            args: Prisma.HealthRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>[]
          }
          delete: {
            args: Prisma.HealthRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          update: {
            args: Prisma.HealthRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          deleteMany: {
            args: Prisma.HealthRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>[]
          }
          upsert: {
            args: Prisma.HealthRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthRecordPayload>
          }
          aggregate: {
            args: Prisma.HealthRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthRecord>
          }
          groupBy: {
            args: Prisma.HealthRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthRecordCountArgs<ExtArgs>
            result: $Utils.Optional<HealthRecordCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      FeedingSchedule: {
        payload: Prisma.$FeedingSchedulePayload<ExtArgs>
        fields: Prisma.FeedingScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedingScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedingScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>
          }
          findFirst: {
            args: Prisma.FeedingScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedingScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>
          }
          findMany: {
            args: Prisma.FeedingScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[]
          }
          create: {
            args: Prisma.FeedingScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>
          }
          createMany: {
            args: Prisma.FeedingScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedingScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[]
          }
          delete: {
            args: Prisma.FeedingScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>
          }
          update: {
            args: Prisma.FeedingScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>
          }
          deleteMany: {
            args: Prisma.FeedingScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedingScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedingScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>[]
          }
          upsert: {
            args: Prisma.FeedingScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingSchedulePayload>
          }
          aggregate: {
            args: Prisma.FeedingScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedingSchedule>
          }
          groupBy: {
            args: Prisma.FeedingScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedingScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedingScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<FeedingScheduleCountAggregateOutputType> | number
          }
        }
      }
      Vet: {
        payload: Prisma.$VetPayload<ExtArgs>
        fields: Prisma.VetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>
          }
          findFirst: {
            args: Prisma.VetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>
          }
          findMany: {
            args: Prisma.VetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>[]
          }
          create: {
            args: Prisma.VetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>
          }
          createMany: {
            args: Prisma.VetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>[]
          }
          delete: {
            args: Prisma.VetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>
          }
          update: {
            args: Prisma.VetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>
          }
          deleteMany: {
            args: Prisma.VetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>[]
          }
          upsert: {
            args: Prisma.VetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetPayload>
          }
          aggregate: {
            args: Prisma.VetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVet>
          }
          groupBy: {
            args: Prisma.VetGroupByArgs<ExtArgs>
            result: $Utils.Optional<VetGroupByOutputType>[]
          }
          count: {
            args: Prisma.VetCountArgs<ExtArgs>
            result: $Utils.Optional<VetCountAggregateOutputType> | number
          }
        }
      }
      VetRecord: {
        payload: Prisma.$VetRecordPayload<ExtArgs>
        fields: Prisma.VetRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VetRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VetRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>
          }
          findFirst: {
            args: Prisma.VetRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VetRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>
          }
          findMany: {
            args: Prisma.VetRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>[]
          }
          create: {
            args: Prisma.VetRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>
          }
          createMany: {
            args: Prisma.VetRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VetRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>[]
          }
          delete: {
            args: Prisma.VetRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>
          }
          update: {
            args: Prisma.VetRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>
          }
          deleteMany: {
            args: Prisma.VetRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VetRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VetRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>[]
          }
          upsert: {
            args: Prisma.VetRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetRecordPayload>
          }
          aggregate: {
            args: Prisma.VetRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVetRecord>
          }
          groupBy: {
            args: Prisma.VetRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<VetRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.VetRecordCountArgs<ExtArgs>
            result: $Utils.Optional<VetRecordCountAggregateOutputType> | number
          }
        }
      }
      CalendarEvent: {
        payload: Prisma.$CalendarEventPayload<ExtArgs>
        fields: Prisma.CalendarEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findFirst: {
            args: Prisma.CalendarEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findMany: {
            args: Prisma.CalendarEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          create: {
            args: Prisma.CalendarEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          createMany: {
            args: Prisma.CalendarEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          delete: {
            args: Prisma.CalendarEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          update: {
            args: Prisma.CalendarEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          deleteMany: {
            args: Prisma.CalendarEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          upsert: {
            args: Prisma.CalendarEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          aggregate: {
            args: Prisma.CalendarEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarEvent>
          }
          groupBy: {
            args: Prisma.CalendarEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarEventCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventCountAggregateOutputType> | number
          }
        }
      }
      FoodAlert: {
        payload: Prisma.$FoodAlertPayload<ExtArgs>
        fields: Prisma.FoodAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>
          }
          findFirst: {
            args: Prisma.FoodAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>
          }
          findMany: {
            args: Prisma.FoodAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>[]
          }
          create: {
            args: Prisma.FoodAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>
          }
          createMany: {
            args: Prisma.FoodAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>[]
          }
          delete: {
            args: Prisma.FoodAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>
          }
          update: {
            args: Prisma.FoodAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>
          }
          deleteMany: {
            args: Prisma.FoodAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>[]
          }
          upsert: {
            args: Prisma.FoodAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodAlertPayload>
          }
          aggregate: {
            args: Prisma.FoodAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodAlert>
          }
          groupBy: {
            args: Prisma.FoodAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodAlertCountArgs<ExtArgs>
            result: $Utils.Optional<FoodAlertCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userSettings?: UserSettingsOmit
    pet?: PetOmit
    healthRecord?: HealthRecordOmit
    medication?: MedicationOmit
    feedingSchedule?: FeedingScheduleOmit
    vet?: VetOmit
    vetRecord?: VetRecordOmit
    calendarEvent?: CalendarEventOmit
    foodAlert?: FoodAlertOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pets: number
    vets: number
    events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | UserCountOutputTypeCountPetsArgs
    vets?: boolean | UserCountOutputTypeCountVetsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    health_records: number
    medications: number
    feeding_schedules: number
    vet_records: number
    calendar_events: number
    food_alerts: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    health_records?: boolean | PetCountOutputTypeCountHealth_recordsArgs
    medications?: boolean | PetCountOutputTypeCountMedicationsArgs
    feeding_schedules?: boolean | PetCountOutputTypeCountFeeding_schedulesArgs
    vet_records?: boolean | PetCountOutputTypeCountVet_recordsArgs
    calendar_events?: boolean | PetCountOutputTypeCountCalendar_eventsArgs
    food_alerts?: boolean | PetCountOutputTypeCountFood_alertsArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountHealth_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthRecordWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountFeeding_schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedingScheduleWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountVet_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetRecordWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountCalendar_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountFood_alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodAlertWhereInput
  }


  /**
   * Count Type VetCountOutputType
   */

  export type VetCountOutputType = {
    records: number
  }

  export type VetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | VetCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * VetCountOutputType without action
   */
  export type VetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetCountOutputType
     */
    select?: VetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VetCountOutputType without action
   */
  export type VetCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    settings?: boolean | User$settingsArgs<ExtArgs>
    pets?: boolean | User$petsArgs<ExtArgs>
    vets?: boolean | User$vetsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | User$settingsArgs<ExtArgs>
    pets?: boolean | User$petsArgs<ExtArgs>
    vets?: boolean | User$vetsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
      pets: Prisma.$PetPayload<ExtArgs>[]
      vets: Prisma.$VetPayload<ExtArgs>[]
      events: Prisma.$CalendarEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    pets<T extends User$petsArgs<ExtArgs> = {}>(args?: Subset<T, User$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    vets<T extends User$vetsArgs<ExtArgs> = {}>(args?: Subset<T, User$vetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User.pets
   */
  export type User$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * User.vets
   */
  export type User$vetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    where?: VetWhereInput
    orderBy?: VetOrderByWithRelationInput | VetOrderByWithRelationInput[]
    cursor?: VetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VetScalarFieldEnum | VetScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    cursor?: CalendarEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    notify_vet_visits: boolean | null
    notify_feeding: boolean | null
    notify_weekly_report: boolean | null
    notify_medication: boolean | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    notify_vet_visits: boolean | null
    notify_feeding: boolean | null
    notify_weekly_report: boolean | null
    notify_medication: boolean | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    user_id: number
    notify_vet_visits: number
    notify_feeding: number
    notify_weekly_report: number
    notify_medication: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type UserSettingsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type UserSettingsMinAggregateInputType = {
    id?: true
    user_id?: true
    notify_vet_visits?: true
    notify_feeding?: true
    notify_weekly_report?: true
    notify_medication?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    notify_vet_visits?: true
    notify_feeding?: true
    notify_weekly_report?: true
    notify_medication?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    user_id?: true
    notify_vet_visits?: true
    notify_feeding?: true
    notify_weekly_report?: true
    notify_medication?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: number
    user_id: number
    notify_vet_visits: boolean
    notify_feeding: boolean
    notify_weekly_report: boolean
    notify_medication: boolean
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "notify_vet_visits" | "notify_feeding" | "notify_weekly_report" | "notify_medication", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      notify_vet_visits: boolean
      notify_feeding: boolean
      notify_weekly_report: boolean
      notify_medication: boolean
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSettings model
   */ 
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'Int'>
    readonly user_id: FieldRef<"UserSettings", 'Int'>
    readonly notify_vet_visits: FieldRef<"UserSettings", 'Boolean'>
    readonly notify_feeding: FieldRef<"UserSettings", 'Boolean'>
    readonly notify_weekly_report: FieldRef<"UserSettings", 'Boolean'>
    readonly notify_medication: FieldRef<"UserSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    weight_kg: number | null
    health_score: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    weight_kg: number | null
    health_score: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    species: string | null
    breed: string | null
    gender: string | null
    color: string | null
    microchip: string | null
    bio: string | null
    image_url: string | null
    weight_kg: number | null
    birthday: string | null
    status: string | null
    health_score: number | null
    emoji: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    species: string | null
    breed: string | null
    gender: string | null
    color: string | null
    microchip: string | null
    bio: string | null
    image_url: string | null
    weight_kg: number | null
    birthday: string | null
    status: string | null
    health_score: number | null
    emoji: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    species: number
    breed: number
    gender: number
    color: number
    microchip: number
    bio: number
    image_url: number
    weight_kg: number
    birthday: number
    status: number
    health_score: number
    emoji: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    user_id?: true
    weight_kg?: true
    health_score?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    user_id?: true
    weight_kg?: true
    health_score?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    species?: true
    breed?: true
    gender?: true
    color?: true
    microchip?: true
    bio?: true
    image_url?: true
    weight_kg?: true
    birthday?: true
    status?: true
    health_score?: true
    emoji?: true
    created_at?: true
    updated_at?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    species?: true
    breed?: true
    gender?: true
    color?: true
    microchip?: true
    bio?: true
    image_url?: true
    weight_kg?: true
    birthday?: true
    status?: true
    health_score?: true
    emoji?: true
    created_at?: true
    updated_at?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    species?: true
    breed?: true
    gender?: true
    color?: true
    microchip?: true
    bio?: true
    image_url?: true
    weight_kg?: true
    birthday?: true
    status?: true
    health_score?: true
    emoji?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    user_id: number
    name: string
    species: string
    breed: string | null
    gender: string | null
    color: string | null
    microchip: string | null
    bio: string | null
    image_url: string | null
    weight_kg: number | null
    birthday: string | null
    status: string
    health_score: number
    emoji: string
    created_at: Date
    updated_at: Date
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    color?: boolean
    microchip?: boolean
    bio?: boolean
    image_url?: boolean
    weight_kg?: boolean
    birthday?: boolean
    status?: boolean
    health_score?: boolean
    emoji?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    health_records?: boolean | Pet$health_recordsArgs<ExtArgs>
    medications?: boolean | Pet$medicationsArgs<ExtArgs>
    feeding_schedules?: boolean | Pet$feeding_schedulesArgs<ExtArgs>
    vet_records?: boolean | Pet$vet_recordsArgs<ExtArgs>
    calendar_events?: boolean | Pet$calendar_eventsArgs<ExtArgs>
    food_alerts?: boolean | Pet$food_alertsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    color?: boolean
    microchip?: boolean
    bio?: boolean
    image_url?: boolean
    weight_kg?: boolean
    birthday?: boolean
    status?: boolean
    health_score?: boolean
    emoji?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    color?: boolean
    microchip?: boolean
    bio?: boolean
    image_url?: boolean
    weight_kg?: boolean
    birthday?: boolean
    status?: boolean
    health_score?: boolean
    emoji?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    gender?: boolean
    color?: boolean
    microchip?: boolean
    bio?: boolean
    image_url?: boolean
    weight_kg?: boolean
    birthday?: boolean
    status?: boolean
    health_score?: boolean
    emoji?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "species" | "breed" | "gender" | "color" | "microchip" | "bio" | "image_url" | "weight_kg" | "birthday" | "status" | "health_score" | "emoji" | "created_at" | "updated_at", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    health_records?: boolean | Pet$health_recordsArgs<ExtArgs>
    medications?: boolean | Pet$medicationsArgs<ExtArgs>
    feeding_schedules?: boolean | Pet$feeding_schedulesArgs<ExtArgs>
    vet_records?: boolean | Pet$vet_recordsArgs<ExtArgs>
    calendar_events?: boolean | Pet$calendar_eventsArgs<ExtArgs>
    food_alerts?: boolean | Pet$food_alertsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      health_records: Prisma.$HealthRecordPayload<ExtArgs>[]
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      feeding_schedules: Prisma.$FeedingSchedulePayload<ExtArgs>[]
      vet_records: Prisma.$VetRecordPayload<ExtArgs>[]
      calendar_events: Prisma.$CalendarEventPayload<ExtArgs>[]
      food_alerts: Prisma.$FoodAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      species: string
      breed: string | null
      gender: string | null
      color: string | null
      microchip: string | null
      bio: string | null
      image_url: string | null
      weight_kg: number | null
      birthday: string | null
      status: string
      health_score: number
      emoji: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    health_records<T extends Pet$health_recordsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$health_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    medications<T extends Pet$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    feeding_schedules<T extends Pet$feeding_schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Pet$feeding_schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    vet_records<T extends Pet$vet_recordsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$vet_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    calendar_events<T extends Pet$calendar_eventsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$calendar_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    food_alerts<T extends Pet$food_alertsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$food_alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */ 
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'Int'>
    readonly user_id: FieldRef<"Pet", 'Int'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly species: FieldRef<"Pet", 'String'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly gender: FieldRef<"Pet", 'String'>
    readonly color: FieldRef<"Pet", 'String'>
    readonly microchip: FieldRef<"Pet", 'String'>
    readonly bio: FieldRef<"Pet", 'String'>
    readonly image_url: FieldRef<"Pet", 'String'>
    readonly weight_kg: FieldRef<"Pet", 'Float'>
    readonly birthday: FieldRef<"Pet", 'String'>
    readonly status: FieldRef<"Pet", 'String'>
    readonly health_score: FieldRef<"Pet", 'Int'>
    readonly emoji: FieldRef<"Pet", 'String'>
    readonly created_at: FieldRef<"Pet", 'DateTime'>
    readonly updated_at: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.health_records
   */
  export type Pet$health_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    where?: HealthRecordWhereInput
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    cursor?: HealthRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * Pet.medications
   */
  export type Pet$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Pet.feeding_schedules
   */
  export type Pet$feeding_schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    where?: FeedingScheduleWhereInput
    orderBy?: FeedingScheduleOrderByWithRelationInput | FeedingScheduleOrderByWithRelationInput[]
    cursor?: FeedingScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedingScheduleScalarFieldEnum | FeedingScheduleScalarFieldEnum[]
  }

  /**
   * Pet.vet_records
   */
  export type Pet$vet_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    where?: VetRecordWhereInput
    orderBy?: VetRecordOrderByWithRelationInput | VetRecordOrderByWithRelationInput[]
    cursor?: VetRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VetRecordScalarFieldEnum | VetRecordScalarFieldEnum[]
  }

  /**
   * Pet.calendar_events
   */
  export type Pet$calendar_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    cursor?: CalendarEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * Pet.food_alerts
   */
  export type Pet$food_alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    where?: FoodAlertWhereInput
    orderBy?: FoodAlertOrderByWithRelationInput | FoodAlertOrderByWithRelationInput[]
    cursor?: FoodAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodAlertScalarFieldEnum | FoodAlertScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model HealthRecord
   */

  export type AggregateHealthRecord = {
    _count: HealthRecordCountAggregateOutputType | null
    _avg: HealthRecordAvgAggregateOutputType | null
    _sum: HealthRecordSumAggregateOutputType | null
    _min: HealthRecordMinAggregateOutputType | null
    _max: HealthRecordMaxAggregateOutputType | null
  }

  export type HealthRecordAvgAggregateOutputType = {
    id: number | null
    pet_id: number | null
    score: number | null
    weight_kg: number | null
  }

  export type HealthRecordSumAggregateOutputType = {
    id: number | null
    pet_id: number | null
    score: number | null
    weight_kg: number | null
  }

  export type HealthRecordMinAggregateOutputType = {
    id: number | null
    pet_id: number | null
    score: number | null
    weight_kg: number | null
    last_checkup: string | null
    vaccinated: boolean | null
    conditions: string | null
    recorded_at: Date | null
  }

  export type HealthRecordMaxAggregateOutputType = {
    id: number | null
    pet_id: number | null
    score: number | null
    weight_kg: number | null
    last_checkup: string | null
    vaccinated: boolean | null
    conditions: string | null
    recorded_at: Date | null
  }

  export type HealthRecordCountAggregateOutputType = {
    id: number
    pet_id: number
    score: number
    weight_kg: number
    last_checkup: number
    vaccinated: number
    conditions: number
    recorded_at: number
    _all: number
  }


  export type HealthRecordAvgAggregateInputType = {
    id?: true
    pet_id?: true
    score?: true
    weight_kg?: true
  }

  export type HealthRecordSumAggregateInputType = {
    id?: true
    pet_id?: true
    score?: true
    weight_kg?: true
  }

  export type HealthRecordMinAggregateInputType = {
    id?: true
    pet_id?: true
    score?: true
    weight_kg?: true
    last_checkup?: true
    vaccinated?: true
    conditions?: true
    recorded_at?: true
  }

  export type HealthRecordMaxAggregateInputType = {
    id?: true
    pet_id?: true
    score?: true
    weight_kg?: true
    last_checkup?: true
    vaccinated?: true
    conditions?: true
    recorded_at?: true
  }

  export type HealthRecordCountAggregateInputType = {
    id?: true
    pet_id?: true
    score?: true
    weight_kg?: true
    last_checkup?: true
    vaccinated?: true
    conditions?: true
    recorded_at?: true
    _all?: true
  }

  export type HealthRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthRecord to aggregate.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthRecords
    **/
    _count?: true | HealthRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthRecordMaxAggregateInputType
  }

  export type GetHealthRecordAggregateType<T extends HealthRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthRecord[P]>
      : GetScalarType<T[P], AggregateHealthRecord[P]>
  }




  export type HealthRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthRecordWhereInput
    orderBy?: HealthRecordOrderByWithAggregationInput | HealthRecordOrderByWithAggregationInput[]
    by: HealthRecordScalarFieldEnum[] | HealthRecordScalarFieldEnum
    having?: HealthRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthRecordCountAggregateInputType | true
    _avg?: HealthRecordAvgAggregateInputType
    _sum?: HealthRecordSumAggregateInputType
    _min?: HealthRecordMinAggregateInputType
    _max?: HealthRecordMaxAggregateInputType
  }

  export type HealthRecordGroupByOutputType = {
    id: number
    pet_id: number
    score: number
    weight_kg: number | null
    last_checkup: string | null
    vaccinated: boolean
    conditions: string
    recorded_at: Date
    _count: HealthRecordCountAggregateOutputType | null
    _avg: HealthRecordAvgAggregateOutputType | null
    _sum: HealthRecordSumAggregateOutputType | null
    _min: HealthRecordMinAggregateOutputType | null
    _max: HealthRecordMaxAggregateOutputType | null
  }

  type GetHealthRecordGroupByPayload<T extends HealthRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthRecordGroupByOutputType[P]>
            : GetScalarType<T[P], HealthRecordGroupByOutputType[P]>
        }
      >
    >


  export type HealthRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    score?: boolean
    weight_kg?: boolean
    last_checkup?: boolean
    vaccinated?: boolean
    conditions?: boolean
    recorded_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthRecord"]>

  export type HealthRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    score?: boolean
    weight_kg?: boolean
    last_checkup?: boolean
    vaccinated?: boolean
    conditions?: boolean
    recorded_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthRecord"]>

  export type HealthRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    score?: boolean
    weight_kg?: boolean
    last_checkup?: boolean
    vaccinated?: boolean
    conditions?: boolean
    recorded_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthRecord"]>

  export type HealthRecordSelectScalar = {
    id?: boolean
    pet_id?: boolean
    score?: boolean
    weight_kg?: boolean
    last_checkup?: boolean
    vaccinated?: boolean
    conditions?: boolean
    recorded_at?: boolean
  }

  export type HealthRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet_id" | "score" | "weight_kg" | "last_checkup" | "vaccinated" | "conditions" | "recorded_at", ExtArgs["result"]["healthRecord"]>
  export type HealthRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type HealthRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type HealthRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $HealthRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthRecord"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pet_id: number
      score: number
      weight_kg: number | null
      last_checkup: string | null
      vaccinated: boolean
      conditions: string
      recorded_at: Date
    }, ExtArgs["result"]["healthRecord"]>
    composites: {}
  }

  type HealthRecordGetPayload<S extends boolean | null | undefined | HealthRecordDefaultArgs> = $Result.GetResult<Prisma.$HealthRecordPayload, S>

  type HealthRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthRecordCountAggregateInputType | true
    }

  export interface HealthRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthRecord'], meta: { name: 'HealthRecord' } }
    /**
     * Find zero or one HealthRecord that matches the filter.
     * @param {HealthRecordFindUniqueArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthRecordFindUniqueArgs>(args: SelectSubset<T, HealthRecordFindUniqueArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one HealthRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthRecordFindUniqueOrThrowArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first HealthRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordFindFirstArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthRecordFindFirstArgs>(args?: SelectSubset<T, HealthRecordFindFirstArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first HealthRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordFindFirstOrThrowArgs} args - Arguments to find a HealthRecord
     * @example
     * // Get one HealthRecord
     * const healthRecord = await prisma.healthRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more HealthRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthRecords
     * const healthRecords = await prisma.healthRecord.findMany()
     * 
     * // Get first 10 HealthRecords
     * const healthRecords = await prisma.healthRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthRecordWithIdOnly = await prisma.healthRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthRecordFindManyArgs>(args?: SelectSubset<T, HealthRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a HealthRecord.
     * @param {HealthRecordCreateArgs} args - Arguments to create a HealthRecord.
     * @example
     * // Create one HealthRecord
     * const HealthRecord = await prisma.healthRecord.create({
     *   data: {
     *     // ... data to create a HealthRecord
     *   }
     * })
     * 
     */
    create<T extends HealthRecordCreateArgs>(args: SelectSubset<T, HealthRecordCreateArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many HealthRecords.
     * @param {HealthRecordCreateManyArgs} args - Arguments to create many HealthRecords.
     * @example
     * // Create many HealthRecords
     * const healthRecord = await prisma.healthRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthRecordCreateManyArgs>(args?: SelectSubset<T, HealthRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthRecords and returns the data saved in the database.
     * @param {HealthRecordCreateManyAndReturnArgs} args - Arguments to create many HealthRecords.
     * @example
     * // Create many HealthRecords
     * const healthRecord = await prisma.healthRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthRecords and only return the `id`
     * const healthRecordWithIdOnly = await prisma.healthRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a HealthRecord.
     * @param {HealthRecordDeleteArgs} args - Arguments to delete one HealthRecord.
     * @example
     * // Delete one HealthRecord
     * const HealthRecord = await prisma.healthRecord.delete({
     *   where: {
     *     // ... filter to delete one HealthRecord
     *   }
     * })
     * 
     */
    delete<T extends HealthRecordDeleteArgs>(args: SelectSubset<T, HealthRecordDeleteArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one HealthRecord.
     * @param {HealthRecordUpdateArgs} args - Arguments to update one HealthRecord.
     * @example
     * // Update one HealthRecord
     * const healthRecord = await prisma.healthRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthRecordUpdateArgs>(args: SelectSubset<T, HealthRecordUpdateArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more HealthRecords.
     * @param {HealthRecordDeleteManyArgs} args - Arguments to filter HealthRecords to delete.
     * @example
     * // Delete a few HealthRecords
     * const { count } = await prisma.healthRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthRecordDeleteManyArgs>(args?: SelectSubset<T, HealthRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthRecords
     * const healthRecord = await prisma.healthRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthRecordUpdateManyArgs>(args: SelectSubset<T, HealthRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthRecords and returns the data updated in the database.
     * @param {HealthRecordUpdateManyAndReturnArgs} args - Arguments to update many HealthRecords.
     * @example
     * // Update many HealthRecords
     * const healthRecord = await prisma.healthRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthRecords and only return the `id`
     * const healthRecordWithIdOnly = await prisma.healthRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HealthRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one HealthRecord.
     * @param {HealthRecordUpsertArgs} args - Arguments to update or create a HealthRecord.
     * @example
     * // Update or create a HealthRecord
     * const healthRecord = await prisma.healthRecord.upsert({
     *   create: {
     *     // ... data to create a HealthRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthRecord we want to update
     *   }
     * })
     */
    upsert<T extends HealthRecordUpsertArgs>(args: SelectSubset<T, HealthRecordUpsertArgs<ExtArgs>>): Prisma__HealthRecordClient<$Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of HealthRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordCountArgs} args - Arguments to filter HealthRecords to count.
     * @example
     * // Count the number of HealthRecords
     * const count = await prisma.healthRecord.count({
     *   where: {
     *     // ... the filter for the HealthRecords we want to count
     *   }
     * })
    **/
    count<T extends HealthRecordCountArgs>(
      args?: Subset<T, HealthRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HealthRecordAggregateArgs>(args: Subset<T, HealthRecordAggregateArgs>): Prisma.PrismaPromise<GetHealthRecordAggregateType<T>>

    /**
     * Group by HealthRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HealthRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthRecordGroupByArgs['orderBy'] }
        : { orderBy?: HealthRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HealthRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthRecord model
   */
  readonly fields: HealthRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HealthRecord model
   */ 
  interface HealthRecordFieldRefs {
    readonly id: FieldRef<"HealthRecord", 'Int'>
    readonly pet_id: FieldRef<"HealthRecord", 'Int'>
    readonly score: FieldRef<"HealthRecord", 'Int'>
    readonly weight_kg: FieldRef<"HealthRecord", 'Float'>
    readonly last_checkup: FieldRef<"HealthRecord", 'String'>
    readonly vaccinated: FieldRef<"HealthRecord", 'Boolean'>
    readonly conditions: FieldRef<"HealthRecord", 'String'>
    readonly recorded_at: FieldRef<"HealthRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HealthRecord findUnique
   */
  export type HealthRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord findUniqueOrThrow
   */
  export type HealthRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord findFirst
   */
  export type HealthRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthRecords.
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthRecords.
     */
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * HealthRecord findFirstOrThrow
   */
  export type HealthRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecord to fetch.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthRecords.
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthRecords.
     */
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * HealthRecord findMany
   */
  export type HealthRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealthRecords to fetch.
     */
    where?: HealthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: HealthRecordOrderByWithRelationInput | HealthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthRecords.
     */
    cursor?: HealthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthRecords.
     */
    skip?: number
    distinct?: HealthRecordScalarFieldEnum | HealthRecordScalarFieldEnum[]
  }

  /**
   * HealthRecord create
   */
  export type HealthRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a HealthRecord.
     */
    data: XOR<HealthRecordCreateInput, HealthRecordUncheckedCreateInput>
  }

  /**
   * HealthRecord createMany
   */
  export type HealthRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthRecords.
     */
    data: HealthRecordCreateManyInput | HealthRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthRecord createManyAndReturn
   */
  export type HealthRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * The data used to create many HealthRecords.
     */
    data: HealthRecordCreateManyInput | HealthRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthRecord update
   */
  export type HealthRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a HealthRecord.
     */
    data: XOR<HealthRecordUpdateInput, HealthRecordUncheckedUpdateInput>
    /**
     * Choose, which HealthRecord to update.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord updateMany
   */
  export type HealthRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthRecords.
     */
    data: XOR<HealthRecordUpdateManyMutationInput, HealthRecordUncheckedUpdateManyInput>
    /**
     * Filter which HealthRecords to update
     */
    where?: HealthRecordWhereInput
    /**
     * Limit how many HealthRecords to update.
     */
    limit?: number
  }

  /**
   * HealthRecord updateManyAndReturn
   */
  export type HealthRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * The data used to update HealthRecords.
     */
    data: XOR<HealthRecordUpdateManyMutationInput, HealthRecordUncheckedUpdateManyInput>
    /**
     * Filter which HealthRecords to update
     */
    where?: HealthRecordWhereInput
    /**
     * Limit how many HealthRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthRecord upsert
   */
  export type HealthRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the HealthRecord to update in case it exists.
     */
    where: HealthRecordWhereUniqueInput
    /**
     * In case the HealthRecord found by the `where` argument doesn't exist, create a new HealthRecord with this data.
     */
    create: XOR<HealthRecordCreateInput, HealthRecordUncheckedCreateInput>
    /**
     * In case the HealthRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthRecordUpdateInput, HealthRecordUncheckedUpdateInput>
  }

  /**
   * HealthRecord delete
   */
  export type HealthRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
    /**
     * Filter which HealthRecord to delete.
     */
    where: HealthRecordWhereUniqueInput
  }

  /**
   * HealthRecord deleteMany
   */
  export type HealthRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthRecords to delete
     */
    where?: HealthRecordWhereInput
    /**
     * Limit how many HealthRecords to delete.
     */
    limit?: number
  }

  /**
   * HealthRecord without action
   */
  export type HealthRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: HealthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: HealthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthRecordInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    id: number | null
    pet_id: number | null
  }

  export type MedicationSumAggregateOutputType = {
    id: number | null
    pet_id: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: number | null
    pet_id: number | null
    name: string | null
    frequency: string | null
    next_dose_date: string | null
    created_at: Date | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: number | null
    pet_id: number | null
    name: string | null
    frequency: string | null
    next_dose_date: string | null
    created_at: Date | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    pet_id: number
    name: number
    frequency: number
    next_dose_date: number
    created_at: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    id?: true
    pet_id?: true
  }

  export type MedicationSumAggregateInputType = {
    id?: true
    pet_id?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    pet_id?: true
    name?: true
    frequency?: true
    next_dose_date?: true
    created_at?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    pet_id?: true
    name?: true
    frequency?: true
    next_dose_date?: true
    created_at?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    pet_id?: true
    name?: true
    frequency?: true
    next_dose_date?: true
    created_at?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: number
    pet_id: number
    name: string
    frequency: string
    next_dose_date: string | null
    created_at: Date
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    name?: boolean
    frequency?: boolean
    next_dose_date?: boolean
    created_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    name?: boolean
    frequency?: boolean
    next_dose_date?: boolean
    created_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    name?: boolean
    frequency?: boolean
    next_dose_date?: boolean
    created_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    pet_id?: boolean
    name?: boolean
    frequency?: boolean
    next_dose_date?: boolean
    created_at?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet_id" | "name" | "frequency" | "next_dose_date" | "created_at", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pet_id: number
      name: string
      frequency: string
      next_dose_date: string | null
      created_at: Date
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medication model
   */ 
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'Int'>
    readonly pet_id: FieldRef<"Medication", 'Int'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly frequency: FieldRef<"Medication", 'String'>
    readonly next_dose_date: FieldRef<"Medication", 'String'>
    readonly created_at: FieldRef<"Medication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model FeedingSchedule
   */

  export type AggregateFeedingSchedule = {
    _count: FeedingScheduleCountAggregateOutputType | null
    _avg: FeedingScheduleAvgAggregateOutputType | null
    _sum: FeedingScheduleSumAggregateOutputType | null
    _min: FeedingScheduleMinAggregateOutputType | null
    _max: FeedingScheduleMaxAggregateOutputType | null
  }

  export type FeedingScheduleAvgAggregateOutputType = {
    id: number | null
    pet_id: number | null
    amount_g: number | null
  }

  export type FeedingScheduleSumAggregateOutputType = {
    id: number | null
    pet_id: number | null
    amount_g: number | null
  }

  export type FeedingScheduleMinAggregateOutputType = {
    id: number | null
    pet_id: number | null
    meal_type: string | null
    time: string | null
    food_name: string | null
    amount_g: number | null
    schedule_date: string | null
    status: string | null
  }

  export type FeedingScheduleMaxAggregateOutputType = {
    id: number | null
    pet_id: number | null
    meal_type: string | null
    time: string | null
    food_name: string | null
    amount_g: number | null
    schedule_date: string | null
    status: string | null
  }

  export type FeedingScheduleCountAggregateOutputType = {
    id: number
    pet_id: number
    meal_type: number
    time: number
    food_name: number
    amount_g: number
    schedule_date: number
    status: number
    _all: number
  }


  export type FeedingScheduleAvgAggregateInputType = {
    id?: true
    pet_id?: true
    amount_g?: true
  }

  export type FeedingScheduleSumAggregateInputType = {
    id?: true
    pet_id?: true
    amount_g?: true
  }

  export type FeedingScheduleMinAggregateInputType = {
    id?: true
    pet_id?: true
    meal_type?: true
    time?: true
    food_name?: true
    amount_g?: true
    schedule_date?: true
    status?: true
  }

  export type FeedingScheduleMaxAggregateInputType = {
    id?: true
    pet_id?: true
    meal_type?: true
    time?: true
    food_name?: true
    amount_g?: true
    schedule_date?: true
    status?: true
  }

  export type FeedingScheduleCountAggregateInputType = {
    id?: true
    pet_id?: true
    meal_type?: true
    time?: true
    food_name?: true
    amount_g?: true
    schedule_date?: true
    status?: true
    _all?: true
  }

  export type FeedingScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedingSchedule to aggregate.
     */
    where?: FeedingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: FeedingScheduleOrderByWithRelationInput | FeedingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedingSchedules
    **/
    _count?: true | FeedingScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedingScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedingScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedingScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedingScheduleMaxAggregateInputType
  }

  export type GetFeedingScheduleAggregateType<T extends FeedingScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedingSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedingSchedule[P]>
      : GetScalarType<T[P], AggregateFeedingSchedule[P]>
  }




  export type FeedingScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedingScheduleWhereInput
    orderBy?: FeedingScheduleOrderByWithAggregationInput | FeedingScheduleOrderByWithAggregationInput[]
    by: FeedingScheduleScalarFieldEnum[] | FeedingScheduleScalarFieldEnum
    having?: FeedingScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedingScheduleCountAggregateInputType | true
    _avg?: FeedingScheduleAvgAggregateInputType
    _sum?: FeedingScheduleSumAggregateInputType
    _min?: FeedingScheduleMinAggregateInputType
    _max?: FeedingScheduleMaxAggregateInputType
  }

  export type FeedingScheduleGroupByOutputType = {
    id: number
    pet_id: number
    meal_type: string
    time: string
    food_name: string
    amount_g: number
    schedule_date: string
    status: string
    _count: FeedingScheduleCountAggregateOutputType | null
    _avg: FeedingScheduleAvgAggregateOutputType | null
    _sum: FeedingScheduleSumAggregateOutputType | null
    _min: FeedingScheduleMinAggregateOutputType | null
    _max: FeedingScheduleMaxAggregateOutputType | null
  }

  type GetFeedingScheduleGroupByPayload<T extends FeedingScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedingScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedingScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedingScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], FeedingScheduleGroupByOutputType[P]>
        }
      >
    >


  export type FeedingScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    meal_type?: boolean
    time?: boolean
    food_name?: boolean
    amount_g?: boolean
    schedule_date?: boolean
    status?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedingSchedule"]>

  export type FeedingScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    meal_type?: boolean
    time?: boolean
    food_name?: boolean
    amount_g?: boolean
    schedule_date?: boolean
    status?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedingSchedule"]>

  export type FeedingScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    meal_type?: boolean
    time?: boolean
    food_name?: boolean
    amount_g?: boolean
    schedule_date?: boolean
    status?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedingSchedule"]>

  export type FeedingScheduleSelectScalar = {
    id?: boolean
    pet_id?: boolean
    meal_type?: boolean
    time?: boolean
    food_name?: boolean
    amount_g?: boolean
    schedule_date?: boolean
    status?: boolean
  }

  export type FeedingScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet_id" | "meal_type" | "time" | "food_name" | "amount_g" | "schedule_date" | "status", ExtArgs["result"]["feedingSchedule"]>
  export type FeedingScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type FeedingScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type FeedingScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $FeedingSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedingSchedule"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pet_id: number
      meal_type: string
      time: string
      food_name: string
      amount_g: number
      schedule_date: string
      status: string
    }, ExtArgs["result"]["feedingSchedule"]>
    composites: {}
  }

  type FeedingScheduleGetPayload<S extends boolean | null | undefined | FeedingScheduleDefaultArgs> = $Result.GetResult<Prisma.$FeedingSchedulePayload, S>

  type FeedingScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedingScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedingScheduleCountAggregateInputType | true
    }

  export interface FeedingScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedingSchedule'], meta: { name: 'FeedingSchedule' } }
    /**
     * Find zero or one FeedingSchedule that matches the filter.
     * @param {FeedingScheduleFindUniqueArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedingScheduleFindUniqueArgs>(args: SelectSubset<T, FeedingScheduleFindUniqueArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one FeedingSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedingScheduleFindUniqueOrThrowArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedingScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedingScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first FeedingSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleFindFirstArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedingScheduleFindFirstArgs>(args?: SelectSubset<T, FeedingScheduleFindFirstArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first FeedingSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleFindFirstOrThrowArgs} args - Arguments to find a FeedingSchedule
     * @example
     * // Get one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedingScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedingScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more FeedingSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedingSchedules
     * const feedingSchedules = await prisma.feedingSchedule.findMany()
     * 
     * // Get first 10 FeedingSchedules
     * const feedingSchedules = await prisma.feedingSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedingScheduleWithIdOnly = await prisma.feedingSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedingScheduleFindManyArgs>(args?: SelectSubset<T, FeedingScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a FeedingSchedule.
     * @param {FeedingScheduleCreateArgs} args - Arguments to create a FeedingSchedule.
     * @example
     * // Create one FeedingSchedule
     * const FeedingSchedule = await prisma.feedingSchedule.create({
     *   data: {
     *     // ... data to create a FeedingSchedule
     *   }
     * })
     * 
     */
    create<T extends FeedingScheduleCreateArgs>(args: SelectSubset<T, FeedingScheduleCreateArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many FeedingSchedules.
     * @param {FeedingScheduleCreateManyArgs} args - Arguments to create many FeedingSchedules.
     * @example
     * // Create many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedingScheduleCreateManyArgs>(args?: SelectSubset<T, FeedingScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedingSchedules and returns the data saved in the database.
     * @param {FeedingScheduleCreateManyAndReturnArgs} args - Arguments to create many FeedingSchedules.
     * @example
     * // Create many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedingSchedules and only return the `id`
     * const feedingScheduleWithIdOnly = await prisma.feedingSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedingScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedingScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a FeedingSchedule.
     * @param {FeedingScheduleDeleteArgs} args - Arguments to delete one FeedingSchedule.
     * @example
     * // Delete one FeedingSchedule
     * const FeedingSchedule = await prisma.feedingSchedule.delete({
     *   where: {
     *     // ... filter to delete one FeedingSchedule
     *   }
     * })
     * 
     */
    delete<T extends FeedingScheduleDeleteArgs>(args: SelectSubset<T, FeedingScheduleDeleteArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one FeedingSchedule.
     * @param {FeedingScheduleUpdateArgs} args - Arguments to update one FeedingSchedule.
     * @example
     * // Update one FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedingScheduleUpdateArgs>(args: SelectSubset<T, FeedingScheduleUpdateArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more FeedingSchedules.
     * @param {FeedingScheduleDeleteManyArgs} args - Arguments to filter FeedingSchedules to delete.
     * @example
     * // Delete a few FeedingSchedules
     * const { count } = await prisma.feedingSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedingScheduleDeleteManyArgs>(args?: SelectSubset<T, FeedingScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedingSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedingScheduleUpdateManyArgs>(args: SelectSubset<T, FeedingScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedingSchedules and returns the data updated in the database.
     * @param {FeedingScheduleUpdateManyAndReturnArgs} args - Arguments to update many FeedingSchedules.
     * @example
     * // Update many FeedingSchedules
     * const feedingSchedule = await prisma.feedingSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedingSchedules and only return the `id`
     * const feedingScheduleWithIdOnly = await prisma.feedingSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedingScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedingScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one FeedingSchedule.
     * @param {FeedingScheduleUpsertArgs} args - Arguments to update or create a FeedingSchedule.
     * @example
     * // Update or create a FeedingSchedule
     * const feedingSchedule = await prisma.feedingSchedule.upsert({
     *   create: {
     *     // ... data to create a FeedingSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedingSchedule we want to update
     *   }
     * })
     */
    upsert<T extends FeedingScheduleUpsertArgs>(args: SelectSubset<T, FeedingScheduleUpsertArgs<ExtArgs>>): Prisma__FeedingScheduleClient<$Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of FeedingSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleCountArgs} args - Arguments to filter FeedingSchedules to count.
     * @example
     * // Count the number of FeedingSchedules
     * const count = await prisma.feedingSchedule.count({
     *   where: {
     *     // ... the filter for the FeedingSchedules we want to count
     *   }
     * })
    **/
    count<T extends FeedingScheduleCountArgs>(
      args?: Subset<T, FeedingScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedingScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedingSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedingScheduleAggregateArgs>(args: Subset<T, FeedingScheduleAggregateArgs>): Prisma.PrismaPromise<GetFeedingScheduleAggregateType<T>>

    /**
     * Group by FeedingSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedingScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedingScheduleGroupByArgs['orderBy'] }
        : { orderBy?: FeedingScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedingScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedingScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedingSchedule model
   */
  readonly fields: FeedingScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedingSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedingScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedingSchedule model
   */ 
  interface FeedingScheduleFieldRefs {
    readonly id: FieldRef<"FeedingSchedule", 'Int'>
    readonly pet_id: FieldRef<"FeedingSchedule", 'Int'>
    readonly meal_type: FieldRef<"FeedingSchedule", 'String'>
    readonly time: FieldRef<"FeedingSchedule", 'String'>
    readonly food_name: FieldRef<"FeedingSchedule", 'String'>
    readonly amount_g: FieldRef<"FeedingSchedule", 'Float'>
    readonly schedule_date: FieldRef<"FeedingSchedule", 'String'>
    readonly status: FieldRef<"FeedingSchedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeedingSchedule findUnique
   */
  export type FeedingScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where: FeedingScheduleWhereUniqueInput
  }

  /**
   * FeedingSchedule findUniqueOrThrow
   */
  export type FeedingScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where: FeedingScheduleWhereUniqueInput
  }

  /**
   * FeedingSchedule findFirst
   */
  export type FeedingScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where?: FeedingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: FeedingScheduleOrderByWithRelationInput | FeedingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedingSchedules.
     */
    cursor?: FeedingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedingSchedules.
     */
    distinct?: FeedingScheduleScalarFieldEnum | FeedingScheduleScalarFieldEnum[]
  }

  /**
   * FeedingSchedule findFirstOrThrow
   */
  export type FeedingScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which FeedingSchedule to fetch.
     */
    where?: FeedingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: FeedingScheduleOrderByWithRelationInput | FeedingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedingSchedules.
     */
    cursor?: FeedingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedingSchedules.
     */
    distinct?: FeedingScheduleScalarFieldEnum | FeedingScheduleScalarFieldEnum[]
  }

  /**
   * FeedingSchedule findMany
   */
  export type FeedingScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which FeedingSchedules to fetch.
     */
    where?: FeedingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedingSchedules to fetch.
     */
    orderBy?: FeedingScheduleOrderByWithRelationInput | FeedingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedingSchedules.
     */
    cursor?: FeedingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedingSchedules.
     */
    skip?: number
    distinct?: FeedingScheduleScalarFieldEnum | FeedingScheduleScalarFieldEnum[]
  }

  /**
   * FeedingSchedule create
   */
  export type FeedingScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedingSchedule.
     */
    data: XOR<FeedingScheduleCreateInput, FeedingScheduleUncheckedCreateInput>
  }

  /**
   * FeedingSchedule createMany
   */
  export type FeedingScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedingSchedules.
     */
    data: FeedingScheduleCreateManyInput | FeedingScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeedingSchedule createManyAndReturn
   */
  export type FeedingScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many FeedingSchedules.
     */
    data: FeedingScheduleCreateManyInput | FeedingScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedingSchedule update
   */
  export type FeedingScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedingSchedule.
     */
    data: XOR<FeedingScheduleUpdateInput, FeedingScheduleUncheckedUpdateInput>
    /**
     * Choose, which FeedingSchedule to update.
     */
    where: FeedingScheduleWhereUniqueInput
  }

  /**
   * FeedingSchedule updateMany
   */
  export type FeedingScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedingSchedules.
     */
    data: XOR<FeedingScheduleUpdateManyMutationInput, FeedingScheduleUncheckedUpdateManyInput>
    /**
     * Filter which FeedingSchedules to update
     */
    where?: FeedingScheduleWhereInput
    /**
     * Limit how many FeedingSchedules to update.
     */
    limit?: number
  }

  /**
   * FeedingSchedule updateManyAndReturn
   */
  export type FeedingScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * The data used to update FeedingSchedules.
     */
    data: XOR<FeedingScheduleUpdateManyMutationInput, FeedingScheduleUncheckedUpdateManyInput>
    /**
     * Filter which FeedingSchedules to update
     */
    where?: FeedingScheduleWhereInput
    /**
     * Limit how many FeedingSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedingSchedule upsert
   */
  export type FeedingScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedingSchedule to update in case it exists.
     */
    where: FeedingScheduleWhereUniqueInput
    /**
     * In case the FeedingSchedule found by the `where` argument doesn't exist, create a new FeedingSchedule with this data.
     */
    create: XOR<FeedingScheduleCreateInput, FeedingScheduleUncheckedCreateInput>
    /**
     * In case the FeedingSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedingScheduleUpdateInput, FeedingScheduleUncheckedUpdateInput>
  }

  /**
   * FeedingSchedule delete
   */
  export type FeedingScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
    /**
     * Filter which FeedingSchedule to delete.
     */
    where: FeedingScheduleWhereUniqueInput
  }

  /**
   * FeedingSchedule deleteMany
   */
  export type FeedingScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedingSchedules to delete
     */
    where?: FeedingScheduleWhereInput
    /**
     * Limit how many FeedingSchedules to delete.
     */
    limit?: number
  }

  /**
   * FeedingSchedule without action
   */
  export type FeedingScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: FeedingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: FeedingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Vet
   */

  export type AggregateVet = {
    _count: VetCountAggregateOutputType | null
    _avg: VetAvgAggregateOutputType | null
    _sum: VetSumAggregateOutputType | null
    _min: VetMinAggregateOutputType | null
    _max: VetMaxAggregateOutputType | null
  }

  export type VetAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VetSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VetMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    clinic: string | null
    phone: string | null
    address: string | null
    specialty: string | null
  }

  export type VetMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    clinic: string | null
    phone: string | null
    address: string | null
    specialty: string | null
  }

  export type VetCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    clinic: number
    phone: number
    address: number
    specialty: number
    _all: number
  }


  export type VetAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VetSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VetMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    clinic?: true
    phone?: true
    address?: true
    specialty?: true
  }

  export type VetMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    clinic?: true
    phone?: true
    address?: true
    specialty?: true
  }

  export type VetCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    clinic?: true
    phone?: true
    address?: true
    specialty?: true
    _all?: true
  }

  export type VetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vet to aggregate.
     */
    where?: VetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vets to fetch.
     */
    orderBy?: VetOrderByWithRelationInput | VetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vets
    **/
    _count?: true | VetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VetMaxAggregateInputType
  }

  export type GetVetAggregateType<T extends VetAggregateArgs> = {
        [P in keyof T & keyof AggregateVet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVet[P]>
      : GetScalarType<T[P], AggregateVet[P]>
  }




  export type VetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetWhereInput
    orderBy?: VetOrderByWithAggregationInput | VetOrderByWithAggregationInput[]
    by: VetScalarFieldEnum[] | VetScalarFieldEnum
    having?: VetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VetCountAggregateInputType | true
    _avg?: VetAvgAggregateInputType
    _sum?: VetSumAggregateInputType
    _min?: VetMinAggregateInputType
    _max?: VetMaxAggregateInputType
  }

  export type VetGroupByOutputType = {
    id: number
    user_id: number
    name: string
    clinic: string | null
    phone: string | null
    address: string | null
    specialty: string
    _count: VetCountAggregateOutputType | null
    _avg: VetAvgAggregateOutputType | null
    _sum: VetSumAggregateOutputType | null
    _min: VetMinAggregateOutputType | null
    _max: VetMaxAggregateOutputType | null
  }

  type GetVetGroupByPayload<T extends VetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VetGroupByOutputType[P]>
            : GetScalarType<T[P], VetGroupByOutputType[P]>
        }
      >
    >


  export type VetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    clinic?: boolean
    phone?: boolean
    address?: boolean
    specialty?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Vet$recordsArgs<ExtArgs>
    _count?: boolean | VetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vet"]>

  export type VetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    clinic?: boolean
    phone?: boolean
    address?: boolean
    specialty?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vet"]>

  export type VetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    clinic?: boolean
    phone?: boolean
    address?: boolean
    specialty?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vet"]>

  export type VetSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    clinic?: boolean
    phone?: boolean
    address?: boolean
    specialty?: boolean
  }

  export type VetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "clinic" | "phone" | "address" | "specialty", ExtArgs["result"]["vet"]>
  export type VetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Vet$recordsArgs<ExtArgs>
    _count?: boolean | VetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$VetRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      clinic: string | null
      phone: string | null
      address: string | null
      specialty: string
    }, ExtArgs["result"]["vet"]>
    composites: {}
  }

  type VetGetPayload<S extends boolean | null | undefined | VetDefaultArgs> = $Result.GetResult<Prisma.$VetPayload, S>

  type VetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VetCountAggregateInputType | true
    }

  export interface VetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vet'], meta: { name: 'Vet' } }
    /**
     * Find zero or one Vet that matches the filter.
     * @param {VetFindUniqueArgs} args - Arguments to find a Vet
     * @example
     * // Get one Vet
     * const vet = await prisma.vet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VetFindUniqueArgs>(args: SelectSubset<T, VetFindUniqueArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Vet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VetFindUniqueOrThrowArgs} args - Arguments to find a Vet
     * @example
     * // Get one Vet
     * const vet = await prisma.vet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VetFindUniqueOrThrowArgs>(args: SelectSubset<T, VetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Vet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetFindFirstArgs} args - Arguments to find a Vet
     * @example
     * // Get one Vet
     * const vet = await prisma.vet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VetFindFirstArgs>(args?: SelectSubset<T, VetFindFirstArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Vet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetFindFirstOrThrowArgs} args - Arguments to find a Vet
     * @example
     * // Get one Vet
     * const vet = await prisma.vet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VetFindFirstOrThrowArgs>(args?: SelectSubset<T, VetFindFirstOrThrowArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Vets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vets
     * const vets = await prisma.vet.findMany()
     * 
     * // Get first 10 Vets
     * const vets = await prisma.vet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vetWithIdOnly = await prisma.vet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VetFindManyArgs>(args?: SelectSubset<T, VetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Vet.
     * @param {VetCreateArgs} args - Arguments to create a Vet.
     * @example
     * // Create one Vet
     * const Vet = await prisma.vet.create({
     *   data: {
     *     // ... data to create a Vet
     *   }
     * })
     * 
     */
    create<T extends VetCreateArgs>(args: SelectSubset<T, VetCreateArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Vets.
     * @param {VetCreateManyArgs} args - Arguments to create many Vets.
     * @example
     * // Create many Vets
     * const vet = await prisma.vet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VetCreateManyArgs>(args?: SelectSubset<T, VetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vets and returns the data saved in the database.
     * @param {VetCreateManyAndReturnArgs} args - Arguments to create many Vets.
     * @example
     * // Create many Vets
     * const vet = await prisma.vet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vets and only return the `id`
     * const vetWithIdOnly = await prisma.vet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VetCreateManyAndReturnArgs>(args?: SelectSubset<T, VetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Vet.
     * @param {VetDeleteArgs} args - Arguments to delete one Vet.
     * @example
     * // Delete one Vet
     * const Vet = await prisma.vet.delete({
     *   where: {
     *     // ... filter to delete one Vet
     *   }
     * })
     * 
     */
    delete<T extends VetDeleteArgs>(args: SelectSubset<T, VetDeleteArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Vet.
     * @param {VetUpdateArgs} args - Arguments to update one Vet.
     * @example
     * // Update one Vet
     * const vet = await prisma.vet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VetUpdateArgs>(args: SelectSubset<T, VetUpdateArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Vets.
     * @param {VetDeleteManyArgs} args - Arguments to filter Vets to delete.
     * @example
     * // Delete a few Vets
     * const { count } = await prisma.vet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VetDeleteManyArgs>(args?: SelectSubset<T, VetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vets
     * const vet = await prisma.vet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VetUpdateManyArgs>(args: SelectSubset<T, VetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vets and returns the data updated in the database.
     * @param {VetUpdateManyAndReturnArgs} args - Arguments to update many Vets.
     * @example
     * // Update many Vets
     * const vet = await prisma.vet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vets and only return the `id`
     * const vetWithIdOnly = await prisma.vet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VetUpdateManyAndReturnArgs>(args: SelectSubset<T, VetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Vet.
     * @param {VetUpsertArgs} args - Arguments to update or create a Vet.
     * @example
     * // Update or create a Vet
     * const vet = await prisma.vet.upsert({
     *   create: {
     *     // ... data to create a Vet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vet we want to update
     *   }
     * })
     */
    upsert<T extends VetUpsertArgs>(args: SelectSubset<T, VetUpsertArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Vets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetCountArgs} args - Arguments to filter Vets to count.
     * @example
     * // Count the number of Vets
     * const count = await prisma.vet.count({
     *   where: {
     *     // ... the filter for the Vets we want to count
     *   }
     * })
    **/
    count<T extends VetCountArgs>(
      args?: Subset<T, VetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VetAggregateArgs>(args: Subset<T, VetAggregateArgs>): Prisma.PrismaPromise<GetVetAggregateType<T>>

    /**
     * Group by Vet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VetGroupByArgs['orderBy'] }
        : { orderBy?: VetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vet model
   */
  readonly fields: VetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    records<T extends Vet$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Vet$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vet model
   */ 
  interface VetFieldRefs {
    readonly id: FieldRef<"Vet", 'Int'>
    readonly user_id: FieldRef<"Vet", 'Int'>
    readonly name: FieldRef<"Vet", 'String'>
    readonly clinic: FieldRef<"Vet", 'String'>
    readonly phone: FieldRef<"Vet", 'String'>
    readonly address: FieldRef<"Vet", 'String'>
    readonly specialty: FieldRef<"Vet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vet findUnique
   */
  export type VetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * Filter, which Vet to fetch.
     */
    where: VetWhereUniqueInput
  }

  /**
   * Vet findUniqueOrThrow
   */
  export type VetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * Filter, which Vet to fetch.
     */
    where: VetWhereUniqueInput
  }

  /**
   * Vet findFirst
   */
  export type VetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * Filter, which Vet to fetch.
     */
    where?: VetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vets to fetch.
     */
    orderBy?: VetOrderByWithRelationInput | VetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vets.
     */
    cursor?: VetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vets.
     */
    distinct?: VetScalarFieldEnum | VetScalarFieldEnum[]
  }

  /**
   * Vet findFirstOrThrow
   */
  export type VetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * Filter, which Vet to fetch.
     */
    where?: VetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vets to fetch.
     */
    orderBy?: VetOrderByWithRelationInput | VetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vets.
     */
    cursor?: VetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vets.
     */
    distinct?: VetScalarFieldEnum | VetScalarFieldEnum[]
  }

  /**
   * Vet findMany
   */
  export type VetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * Filter, which Vets to fetch.
     */
    where?: VetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vets to fetch.
     */
    orderBy?: VetOrderByWithRelationInput | VetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vets.
     */
    cursor?: VetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vets.
     */
    skip?: number
    distinct?: VetScalarFieldEnum | VetScalarFieldEnum[]
  }

  /**
   * Vet create
   */
  export type VetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * The data needed to create a Vet.
     */
    data: XOR<VetCreateInput, VetUncheckedCreateInput>
  }

  /**
   * Vet createMany
   */
  export type VetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vets.
     */
    data: VetCreateManyInput | VetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vet createManyAndReturn
   */
  export type VetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * The data used to create many Vets.
     */
    data: VetCreateManyInput | VetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vet update
   */
  export type VetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * The data needed to update a Vet.
     */
    data: XOR<VetUpdateInput, VetUncheckedUpdateInput>
    /**
     * Choose, which Vet to update.
     */
    where: VetWhereUniqueInput
  }

  /**
   * Vet updateMany
   */
  export type VetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vets.
     */
    data: XOR<VetUpdateManyMutationInput, VetUncheckedUpdateManyInput>
    /**
     * Filter which Vets to update
     */
    where?: VetWhereInput
    /**
     * Limit how many Vets to update.
     */
    limit?: number
  }

  /**
   * Vet updateManyAndReturn
   */
  export type VetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * The data used to update Vets.
     */
    data: XOR<VetUpdateManyMutationInput, VetUncheckedUpdateManyInput>
    /**
     * Filter which Vets to update
     */
    where?: VetWhereInput
    /**
     * Limit how many Vets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vet upsert
   */
  export type VetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * The filter to search for the Vet to update in case it exists.
     */
    where: VetWhereUniqueInput
    /**
     * In case the Vet found by the `where` argument doesn't exist, create a new Vet with this data.
     */
    create: XOR<VetCreateInput, VetUncheckedCreateInput>
    /**
     * In case the Vet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VetUpdateInput, VetUncheckedUpdateInput>
  }

  /**
   * Vet delete
   */
  export type VetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    /**
     * Filter which Vet to delete.
     */
    where: VetWhereUniqueInput
  }

  /**
   * Vet deleteMany
   */
  export type VetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vets to delete
     */
    where?: VetWhereInput
    /**
     * Limit how many Vets to delete.
     */
    limit?: number
  }

  /**
   * Vet.records
   */
  export type Vet$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    where?: VetRecordWhereInput
    orderBy?: VetRecordOrderByWithRelationInput | VetRecordOrderByWithRelationInput[]
    cursor?: VetRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VetRecordScalarFieldEnum | VetRecordScalarFieldEnum[]
  }

  /**
   * Vet without action
   */
  export type VetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
  }


  /**
   * Model VetRecord
   */

  export type AggregateVetRecord = {
    _count: VetRecordCountAggregateOutputType | null
    _avg: VetRecordAvgAggregateOutputType | null
    _sum: VetRecordSumAggregateOutputType | null
    _min: VetRecordMinAggregateOutputType | null
    _max: VetRecordMaxAggregateOutputType | null
  }

  export type VetRecordAvgAggregateOutputType = {
    id: number | null
    pet_id: number | null
    vet_id: number | null
  }

  export type VetRecordSumAggregateOutputType = {
    id: number | null
    pet_id: number | null
    vet_id: number | null
  }

  export type VetRecordMinAggregateOutputType = {
    id: number | null
    pet_id: number | null
    vet_id: number | null
    vet_name: string | null
    date: string | null
    type: string | null
    notes: string | null
    status: string | null
  }

  export type VetRecordMaxAggregateOutputType = {
    id: number | null
    pet_id: number | null
    vet_id: number | null
    vet_name: string | null
    date: string | null
    type: string | null
    notes: string | null
    status: string | null
  }

  export type VetRecordCountAggregateOutputType = {
    id: number
    pet_id: number
    vet_id: number
    vet_name: number
    date: number
    type: number
    notes: number
    status: number
    _all: number
  }


  export type VetRecordAvgAggregateInputType = {
    id?: true
    pet_id?: true
    vet_id?: true
  }

  export type VetRecordSumAggregateInputType = {
    id?: true
    pet_id?: true
    vet_id?: true
  }

  export type VetRecordMinAggregateInputType = {
    id?: true
    pet_id?: true
    vet_id?: true
    vet_name?: true
    date?: true
    type?: true
    notes?: true
    status?: true
  }

  export type VetRecordMaxAggregateInputType = {
    id?: true
    pet_id?: true
    vet_id?: true
    vet_name?: true
    date?: true
    type?: true
    notes?: true
    status?: true
  }

  export type VetRecordCountAggregateInputType = {
    id?: true
    pet_id?: true
    vet_id?: true
    vet_name?: true
    date?: true
    type?: true
    notes?: true
    status?: true
    _all?: true
  }

  export type VetRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VetRecord to aggregate.
     */
    where?: VetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: VetRecordOrderByWithRelationInput | VetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VetRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VetRecords
    **/
    _count?: true | VetRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VetRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VetRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VetRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VetRecordMaxAggregateInputType
  }

  export type GetVetRecordAggregateType<T extends VetRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateVetRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVetRecord[P]>
      : GetScalarType<T[P], AggregateVetRecord[P]>
  }




  export type VetRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetRecordWhereInput
    orderBy?: VetRecordOrderByWithAggregationInput | VetRecordOrderByWithAggregationInput[]
    by: VetRecordScalarFieldEnum[] | VetRecordScalarFieldEnum
    having?: VetRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VetRecordCountAggregateInputType | true
    _avg?: VetRecordAvgAggregateInputType
    _sum?: VetRecordSumAggregateInputType
    _min?: VetRecordMinAggregateInputType
    _max?: VetRecordMaxAggregateInputType
  }

  export type VetRecordGroupByOutputType = {
    id: number
    pet_id: number
    vet_id: number | null
    vet_name: string | null
    date: string
    type: string
    notes: string | null
    status: string
    _count: VetRecordCountAggregateOutputType | null
    _avg: VetRecordAvgAggregateOutputType | null
    _sum: VetRecordSumAggregateOutputType | null
    _min: VetRecordMinAggregateOutputType | null
    _max: VetRecordMaxAggregateOutputType | null
  }

  type GetVetRecordGroupByPayload<T extends VetRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VetRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VetRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VetRecordGroupByOutputType[P]>
            : GetScalarType<T[P], VetRecordGroupByOutputType[P]>
        }
      >
    >


  export type VetRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    vet_id?: boolean
    vet_name?: boolean
    date?: boolean
    type?: boolean
    notes?: boolean
    status?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | VetRecord$vetArgs<ExtArgs>
  }, ExtArgs["result"]["vetRecord"]>

  export type VetRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    vet_id?: boolean
    vet_name?: boolean
    date?: boolean
    type?: boolean
    notes?: boolean
    status?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | VetRecord$vetArgs<ExtArgs>
  }, ExtArgs["result"]["vetRecord"]>

  export type VetRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    vet_id?: boolean
    vet_name?: boolean
    date?: boolean
    type?: boolean
    notes?: boolean
    status?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | VetRecord$vetArgs<ExtArgs>
  }, ExtArgs["result"]["vetRecord"]>

  export type VetRecordSelectScalar = {
    id?: boolean
    pet_id?: boolean
    vet_id?: boolean
    vet_name?: boolean
    date?: boolean
    type?: boolean
    notes?: boolean
    status?: boolean
  }

  export type VetRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet_id" | "vet_id" | "vet_name" | "date" | "type" | "notes" | "status", ExtArgs["result"]["vetRecord"]>
  export type VetRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | VetRecord$vetArgs<ExtArgs>
  }
  export type VetRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | VetRecord$vetArgs<ExtArgs>
  }
  export type VetRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | VetRecord$vetArgs<ExtArgs>
  }

  export type $VetRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VetRecord"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
      vet: Prisma.$VetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pet_id: number
      vet_id: number | null
      vet_name: string | null
      date: string
      type: string
      notes: string | null
      status: string
    }, ExtArgs["result"]["vetRecord"]>
    composites: {}
  }

  type VetRecordGetPayload<S extends boolean | null | undefined | VetRecordDefaultArgs> = $Result.GetResult<Prisma.$VetRecordPayload, S>

  type VetRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VetRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VetRecordCountAggregateInputType | true
    }

  export interface VetRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VetRecord'], meta: { name: 'VetRecord' } }
    /**
     * Find zero or one VetRecord that matches the filter.
     * @param {VetRecordFindUniqueArgs} args - Arguments to find a VetRecord
     * @example
     * // Get one VetRecord
     * const vetRecord = await prisma.vetRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VetRecordFindUniqueArgs>(args: SelectSubset<T, VetRecordFindUniqueArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VetRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VetRecordFindUniqueOrThrowArgs} args - Arguments to find a VetRecord
     * @example
     * // Get one VetRecord
     * const vetRecord = await prisma.vetRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VetRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, VetRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VetRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetRecordFindFirstArgs} args - Arguments to find a VetRecord
     * @example
     * // Get one VetRecord
     * const vetRecord = await prisma.vetRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VetRecordFindFirstArgs>(args?: SelectSubset<T, VetRecordFindFirstArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VetRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetRecordFindFirstOrThrowArgs} args - Arguments to find a VetRecord
     * @example
     * // Get one VetRecord
     * const vetRecord = await prisma.vetRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VetRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, VetRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VetRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VetRecords
     * const vetRecords = await prisma.vetRecord.findMany()
     * 
     * // Get first 10 VetRecords
     * const vetRecords = await prisma.vetRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vetRecordWithIdOnly = await prisma.vetRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VetRecordFindManyArgs>(args?: SelectSubset<T, VetRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VetRecord.
     * @param {VetRecordCreateArgs} args - Arguments to create a VetRecord.
     * @example
     * // Create one VetRecord
     * const VetRecord = await prisma.vetRecord.create({
     *   data: {
     *     // ... data to create a VetRecord
     *   }
     * })
     * 
     */
    create<T extends VetRecordCreateArgs>(args: SelectSubset<T, VetRecordCreateArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VetRecords.
     * @param {VetRecordCreateManyArgs} args - Arguments to create many VetRecords.
     * @example
     * // Create many VetRecords
     * const vetRecord = await prisma.vetRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VetRecordCreateManyArgs>(args?: SelectSubset<T, VetRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VetRecords and returns the data saved in the database.
     * @param {VetRecordCreateManyAndReturnArgs} args - Arguments to create many VetRecords.
     * @example
     * // Create many VetRecords
     * const vetRecord = await prisma.vetRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VetRecords and only return the `id`
     * const vetRecordWithIdOnly = await prisma.vetRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VetRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, VetRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a VetRecord.
     * @param {VetRecordDeleteArgs} args - Arguments to delete one VetRecord.
     * @example
     * // Delete one VetRecord
     * const VetRecord = await prisma.vetRecord.delete({
     *   where: {
     *     // ... filter to delete one VetRecord
     *   }
     * })
     * 
     */
    delete<T extends VetRecordDeleteArgs>(args: SelectSubset<T, VetRecordDeleteArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VetRecord.
     * @param {VetRecordUpdateArgs} args - Arguments to update one VetRecord.
     * @example
     * // Update one VetRecord
     * const vetRecord = await prisma.vetRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VetRecordUpdateArgs>(args: SelectSubset<T, VetRecordUpdateArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VetRecords.
     * @param {VetRecordDeleteManyArgs} args - Arguments to filter VetRecords to delete.
     * @example
     * // Delete a few VetRecords
     * const { count } = await prisma.vetRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VetRecordDeleteManyArgs>(args?: SelectSubset<T, VetRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VetRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VetRecords
     * const vetRecord = await prisma.vetRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VetRecordUpdateManyArgs>(args: SelectSubset<T, VetRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VetRecords and returns the data updated in the database.
     * @param {VetRecordUpdateManyAndReturnArgs} args - Arguments to update many VetRecords.
     * @example
     * // Update many VetRecords
     * const vetRecord = await prisma.vetRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VetRecords and only return the `id`
     * const vetRecordWithIdOnly = await prisma.vetRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VetRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, VetRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one VetRecord.
     * @param {VetRecordUpsertArgs} args - Arguments to update or create a VetRecord.
     * @example
     * // Update or create a VetRecord
     * const vetRecord = await prisma.vetRecord.upsert({
     *   create: {
     *     // ... data to create a VetRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VetRecord we want to update
     *   }
     * })
     */
    upsert<T extends VetRecordUpsertArgs>(args: SelectSubset<T, VetRecordUpsertArgs<ExtArgs>>): Prisma__VetRecordClient<$Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VetRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetRecordCountArgs} args - Arguments to filter VetRecords to count.
     * @example
     * // Count the number of VetRecords
     * const count = await prisma.vetRecord.count({
     *   where: {
     *     // ... the filter for the VetRecords we want to count
     *   }
     * })
    **/
    count<T extends VetRecordCountArgs>(
      args?: Subset<T, VetRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VetRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VetRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VetRecordAggregateArgs>(args: Subset<T, VetRecordAggregateArgs>): Prisma.PrismaPromise<GetVetRecordAggregateType<T>>

    /**
     * Group by VetRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VetRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VetRecordGroupByArgs['orderBy'] }
        : { orderBy?: VetRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VetRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VetRecord model
   */
  readonly fields: VetRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VetRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VetRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    vet<T extends VetRecord$vetArgs<ExtArgs> = {}>(args?: Subset<T, VetRecord$vetArgs<ExtArgs>>): Prisma__VetClient<$Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VetRecord model
   */ 
  interface VetRecordFieldRefs {
    readonly id: FieldRef<"VetRecord", 'Int'>
    readonly pet_id: FieldRef<"VetRecord", 'Int'>
    readonly vet_id: FieldRef<"VetRecord", 'Int'>
    readonly vet_name: FieldRef<"VetRecord", 'String'>
    readonly date: FieldRef<"VetRecord", 'String'>
    readonly type: FieldRef<"VetRecord", 'String'>
    readonly notes: FieldRef<"VetRecord", 'String'>
    readonly status: FieldRef<"VetRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VetRecord findUnique
   */
  export type VetRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * Filter, which VetRecord to fetch.
     */
    where: VetRecordWhereUniqueInput
  }

  /**
   * VetRecord findUniqueOrThrow
   */
  export type VetRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * Filter, which VetRecord to fetch.
     */
    where: VetRecordWhereUniqueInput
  }

  /**
   * VetRecord findFirst
   */
  export type VetRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * Filter, which VetRecord to fetch.
     */
    where?: VetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: VetRecordOrderByWithRelationInput | VetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VetRecords.
     */
    cursor?: VetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VetRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VetRecords.
     */
    distinct?: VetRecordScalarFieldEnum | VetRecordScalarFieldEnum[]
  }

  /**
   * VetRecord findFirstOrThrow
   */
  export type VetRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * Filter, which VetRecord to fetch.
     */
    where?: VetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: VetRecordOrderByWithRelationInput | VetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VetRecords.
     */
    cursor?: VetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VetRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VetRecords.
     */
    distinct?: VetRecordScalarFieldEnum | VetRecordScalarFieldEnum[]
  }

  /**
   * VetRecord findMany
   */
  export type VetRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * Filter, which VetRecords to fetch.
     */
    where?: VetRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: VetRecordOrderByWithRelationInput | VetRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VetRecords.
     */
    cursor?: VetRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VetRecords.
     */
    skip?: number
    distinct?: VetRecordScalarFieldEnum | VetRecordScalarFieldEnum[]
  }

  /**
   * VetRecord create
   */
  export type VetRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a VetRecord.
     */
    data: XOR<VetRecordCreateInput, VetRecordUncheckedCreateInput>
  }

  /**
   * VetRecord createMany
   */
  export type VetRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VetRecords.
     */
    data: VetRecordCreateManyInput | VetRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VetRecord createManyAndReturn
   */
  export type VetRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * The data used to create many VetRecords.
     */
    data: VetRecordCreateManyInput | VetRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VetRecord update
   */
  export type VetRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a VetRecord.
     */
    data: XOR<VetRecordUpdateInput, VetRecordUncheckedUpdateInput>
    /**
     * Choose, which VetRecord to update.
     */
    where: VetRecordWhereUniqueInput
  }

  /**
   * VetRecord updateMany
   */
  export type VetRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VetRecords.
     */
    data: XOR<VetRecordUpdateManyMutationInput, VetRecordUncheckedUpdateManyInput>
    /**
     * Filter which VetRecords to update
     */
    where?: VetRecordWhereInput
    /**
     * Limit how many VetRecords to update.
     */
    limit?: number
  }

  /**
   * VetRecord updateManyAndReturn
   */
  export type VetRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * The data used to update VetRecords.
     */
    data: XOR<VetRecordUpdateManyMutationInput, VetRecordUncheckedUpdateManyInput>
    /**
     * Filter which VetRecords to update
     */
    where?: VetRecordWhereInput
    /**
     * Limit how many VetRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VetRecord upsert
   */
  export type VetRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the VetRecord to update in case it exists.
     */
    where: VetRecordWhereUniqueInput
    /**
     * In case the VetRecord found by the `where` argument doesn't exist, create a new VetRecord with this data.
     */
    create: XOR<VetRecordCreateInput, VetRecordUncheckedCreateInput>
    /**
     * In case the VetRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VetRecordUpdateInput, VetRecordUncheckedUpdateInput>
  }

  /**
   * VetRecord delete
   */
  export type VetRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
    /**
     * Filter which VetRecord to delete.
     */
    where: VetRecordWhereUniqueInput
  }

  /**
   * VetRecord deleteMany
   */
  export type VetRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VetRecords to delete
     */
    where?: VetRecordWhereInput
    /**
     * Limit how many VetRecords to delete.
     */
    limit?: number
  }

  /**
   * VetRecord.vet
   */
  export type VetRecord$vetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: VetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vet
     */
    omit?: VetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetInclude<ExtArgs> | null
    where?: VetWhereInput
  }

  /**
   * VetRecord without action
   */
  export type VetRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: VetRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: VetRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetRecordInclude<ExtArgs> | null
  }


  /**
   * Model CalendarEvent
   */

  export type AggregateCalendarEvent = {
    _count: CalendarEventCountAggregateOutputType | null
    _avg: CalendarEventAvgAggregateOutputType | null
    _sum: CalendarEventSumAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  export type CalendarEventAvgAggregateOutputType = {
    id: number | null
    pet_id: number | null
    user_id: number | null
  }

  export type CalendarEventSumAggregateOutputType = {
    id: number | null
    pet_id: number | null
    user_id: number | null
  }

  export type CalendarEventMinAggregateOutputType = {
    id: number | null
    pet_id: number | null
    user_id: number | null
    title: string | null
    event_date: string | null
    type: string | null
    icon_type: string | null
    created_at: Date | null
  }

  export type CalendarEventMaxAggregateOutputType = {
    id: number | null
    pet_id: number | null
    user_id: number | null
    title: string | null
    event_date: string | null
    type: string | null
    icon_type: string | null
    created_at: Date | null
  }

  export type CalendarEventCountAggregateOutputType = {
    id: number
    pet_id: number
    user_id: number
    title: number
    event_date: number
    type: number
    icon_type: number
    created_at: number
    _all: number
  }


  export type CalendarEventAvgAggregateInputType = {
    id?: true
    pet_id?: true
    user_id?: true
  }

  export type CalendarEventSumAggregateInputType = {
    id?: true
    pet_id?: true
    user_id?: true
  }

  export type CalendarEventMinAggregateInputType = {
    id?: true
    pet_id?: true
    user_id?: true
    title?: true
    event_date?: true
    type?: true
    icon_type?: true
    created_at?: true
  }

  export type CalendarEventMaxAggregateInputType = {
    id?: true
    pet_id?: true
    user_id?: true
    title?: true
    event_date?: true
    type?: true
    icon_type?: true
    created_at?: true
  }

  export type CalendarEventCountAggregateInputType = {
    id?: true
    pet_id?: true
    user_id?: true
    title?: true
    event_date?: true
    type?: true
    icon_type?: true
    created_at?: true
    _all?: true
  }

  export type CalendarEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvent to aggregate.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarEvents
    **/
    _count?: true | CalendarEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarEventMaxAggregateInputType
  }

  export type GetCalendarEventAggregateType<T extends CalendarEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarEvent[P]>
      : GetScalarType<T[P], AggregateCalendarEvent[P]>
  }




  export type CalendarEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithAggregationInput | CalendarEventOrderByWithAggregationInput[]
    by: CalendarEventScalarFieldEnum[] | CalendarEventScalarFieldEnum
    having?: CalendarEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarEventCountAggregateInputType | true
    _avg?: CalendarEventAvgAggregateInputType
    _sum?: CalendarEventSumAggregateInputType
    _min?: CalendarEventMinAggregateInputType
    _max?: CalendarEventMaxAggregateInputType
  }

  export type CalendarEventGroupByOutputType = {
    id: number
    pet_id: number | null
    user_id: number
    title: string
    event_date: string
    type: string
    icon_type: string
    created_at: Date
    _count: CalendarEventCountAggregateOutputType | null
    _avg: CalendarEventAvgAggregateOutputType | null
    _sum: CalendarEventSumAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  type GetCalendarEventGroupByPayload<T extends CalendarEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
        }
      >
    >


  export type CalendarEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    user_id?: boolean
    title?: boolean
    event_date?: boolean
    type?: boolean
    icon_type?: boolean
    created_at?: boolean
    pet?: boolean | CalendarEvent$petArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    user_id?: boolean
    title?: boolean
    event_date?: boolean
    type?: boolean
    icon_type?: boolean
    created_at?: boolean
    pet?: boolean | CalendarEvent$petArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    user_id?: boolean
    title?: boolean
    event_date?: boolean
    type?: boolean
    icon_type?: boolean
    created_at?: boolean
    pet?: boolean | CalendarEvent$petArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectScalar = {
    id?: boolean
    pet_id?: boolean
    user_id?: boolean
    title?: boolean
    event_date?: boolean
    type?: boolean
    icon_type?: boolean
    created_at?: boolean
  }

  export type CalendarEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet_id" | "user_id" | "title" | "event_date" | "type" | "icon_type" | "created_at", ExtArgs["result"]["calendarEvent"]>
  export type CalendarEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | CalendarEvent$petArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | CalendarEvent$petArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | CalendarEvent$petArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CalendarEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarEvent"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pet_id: number | null
      user_id: number
      title: string
      event_date: string
      type: string
      icon_type: string
      created_at: Date
    }, ExtArgs["result"]["calendarEvent"]>
    composites: {}
  }

  type CalendarEventGetPayload<S extends boolean | null | undefined | CalendarEventDefaultArgs> = $Result.GetResult<Prisma.$CalendarEventPayload, S>

  type CalendarEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarEventCountAggregateInputType | true
    }

  export interface CalendarEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarEvent'], meta: { name: 'CalendarEvent' } }
    /**
     * Find zero or one CalendarEvent that matches the filter.
     * @param {CalendarEventFindUniqueArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarEventFindUniqueArgs>(args: SelectSubset<T, CalendarEventFindUniqueArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CalendarEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarEventFindUniqueOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CalendarEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarEventFindFirstArgs>(args?: SelectSubset<T, CalendarEventFindFirstArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CalendarEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CalendarEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany()
     * 
     * // Get first 10 CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarEventFindManyArgs>(args?: SelectSubset<T, CalendarEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CalendarEvent.
     * @param {CalendarEventCreateArgs} args - Arguments to create a CalendarEvent.
     * @example
     * // Create one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.create({
     *   data: {
     *     // ... data to create a CalendarEvent
     *   }
     * })
     * 
     */
    create<T extends CalendarEventCreateArgs>(args: SelectSubset<T, CalendarEventCreateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CalendarEvents.
     * @param {CalendarEventCreateManyArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarEventCreateManyArgs>(args?: SelectSubset<T, CalendarEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarEvents and returns the data saved in the database.
     * @param {CalendarEventCreateManyAndReturnArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CalendarEvent.
     * @param {CalendarEventDeleteArgs} args - Arguments to delete one CalendarEvent.
     * @example
     * // Delete one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.delete({
     *   where: {
     *     // ... filter to delete one CalendarEvent
     *   }
     * })
     * 
     */
    delete<T extends CalendarEventDeleteArgs>(args: SelectSubset<T, CalendarEventDeleteArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CalendarEvent.
     * @param {CalendarEventUpdateArgs} args - Arguments to update one CalendarEvent.
     * @example
     * // Update one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarEventUpdateArgs>(args: SelectSubset<T, CalendarEventUpdateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CalendarEvents.
     * @param {CalendarEventDeleteManyArgs} args - Arguments to filter CalendarEvents to delete.
     * @example
     * // Delete a few CalendarEvents
     * const { count } = await prisma.calendarEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarEventDeleteManyArgs>(args?: SelectSubset<T, CalendarEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarEventUpdateManyArgs>(args: SelectSubset<T, CalendarEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents and returns the data updated in the database.
     * @param {CalendarEventUpdateManyAndReturnArgs} args - Arguments to update many CalendarEvents.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalendarEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CalendarEvent.
     * @param {CalendarEventUpsertArgs} args - Arguments to update or create a CalendarEvent.
     * @example
     * // Update or create a CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.upsert({
     *   create: {
     *     // ... data to create a CalendarEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarEvent we want to update
     *   }
     * })
     */
    upsert<T extends CalendarEventUpsertArgs>(args: SelectSubset<T, CalendarEventUpsertArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventCountArgs} args - Arguments to filter CalendarEvents to count.
     * @example
     * // Count the number of CalendarEvents
     * const count = await prisma.calendarEvent.count({
     *   where: {
     *     // ... the filter for the CalendarEvents we want to count
     *   }
     * })
    **/
    count<T extends CalendarEventCountArgs>(
      args?: Subset<T, CalendarEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarEventAggregateArgs>(args: Subset<T, CalendarEventAggregateArgs>): Prisma.PrismaPromise<GetCalendarEventAggregateType<T>>

    /**
     * Group by CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarEventGroupByArgs['orderBy'] }
        : { orderBy?: CalendarEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarEvent model
   */
  readonly fields: CalendarEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends CalendarEvent$petArgs<ExtArgs> = {}>(args?: Subset<T, CalendarEvent$petArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CalendarEvent model
   */ 
  interface CalendarEventFieldRefs {
    readonly id: FieldRef<"CalendarEvent", 'Int'>
    readonly pet_id: FieldRef<"CalendarEvent", 'Int'>
    readonly user_id: FieldRef<"CalendarEvent", 'Int'>
    readonly title: FieldRef<"CalendarEvent", 'String'>
    readonly event_date: FieldRef<"CalendarEvent", 'String'>
    readonly type: FieldRef<"CalendarEvent", 'String'>
    readonly icon_type: FieldRef<"CalendarEvent", 'String'>
    readonly created_at: FieldRef<"CalendarEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarEvent findUnique
   */
  export type CalendarEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findUniqueOrThrow
   */
  export type CalendarEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findFirst
   */
  export type CalendarEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findFirstOrThrow
   */
  export type CalendarEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findMany
   */
  export type CalendarEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvents to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent create
   */
  export type CalendarEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The data needed to create a CalendarEvent.
     */
    data: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
  }

  /**
   * CalendarEvent createMany
   */
  export type CalendarEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarEvent createManyAndReturn
   */
  export type CalendarEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEvent update
   */
  export type CalendarEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The data needed to update a CalendarEvent.
     */
    data: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
    /**
     * Choose, which CalendarEvent to update.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent updateMany
   */
  export type CalendarEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
  }

  /**
   * CalendarEvent updateManyAndReturn
   */
  export type CalendarEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEvent upsert
   */
  export type CalendarEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The filter to search for the CalendarEvent to update in case it exists.
     */
    where: CalendarEventWhereUniqueInput
    /**
     * In case the CalendarEvent found by the `where` argument doesn't exist, create a new CalendarEvent with this data.
     */
    create: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
    /**
     * In case the CalendarEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
  }

  /**
   * CalendarEvent delete
   */
  export type CalendarEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter which CalendarEvent to delete.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent deleteMany
   */
  export type CalendarEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvents to delete
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to delete.
     */
    limit?: number
  }

  /**
   * CalendarEvent.pet
   */
  export type CalendarEvent$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
  }

  /**
   * CalendarEvent without action
   */
  export type CalendarEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
  }


  /**
   * Model FoodAlert
   */

  export type AggregateFoodAlert = {
    _count: FoodAlertCountAggregateOutputType | null
    _avg: FoodAlertAvgAggregateOutputType | null
    _sum: FoodAlertSumAggregateOutputType | null
    _min: FoodAlertMinAggregateOutputType | null
    _max: FoodAlertMaxAggregateOutputType | null
  }

  export type FoodAlertAvgAggregateOutputType = {
    id: number | null
    pet_id: number | null
  }

  export type FoodAlertSumAggregateOutputType = {
    id: number | null
    pet_id: number | null
  }

  export type FoodAlertMinAggregateOutputType = {
    id: number | null
    pet_id: number | null
    message: string | null
    level: string | null
    is_resolved: boolean | null
    created_at: Date | null
  }

  export type FoodAlertMaxAggregateOutputType = {
    id: number | null
    pet_id: number | null
    message: string | null
    level: string | null
    is_resolved: boolean | null
    created_at: Date | null
  }

  export type FoodAlertCountAggregateOutputType = {
    id: number
    pet_id: number
    message: number
    level: number
    is_resolved: number
    created_at: number
    _all: number
  }


  export type FoodAlertAvgAggregateInputType = {
    id?: true
    pet_id?: true
  }

  export type FoodAlertSumAggregateInputType = {
    id?: true
    pet_id?: true
  }

  export type FoodAlertMinAggregateInputType = {
    id?: true
    pet_id?: true
    message?: true
    level?: true
    is_resolved?: true
    created_at?: true
  }

  export type FoodAlertMaxAggregateInputType = {
    id?: true
    pet_id?: true
    message?: true
    level?: true
    is_resolved?: true
    created_at?: true
  }

  export type FoodAlertCountAggregateInputType = {
    id?: true
    pet_id?: true
    message?: true
    level?: true
    is_resolved?: true
    created_at?: true
    _all?: true
  }

  export type FoodAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodAlert to aggregate.
     */
    where?: FoodAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: FoodAlertOrderByWithRelationInput | FoodAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodAlerts
    **/
    _count?: true | FoodAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodAlertMaxAggregateInputType
  }

  export type GetFoodAlertAggregateType<T extends FoodAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodAlert[P]>
      : GetScalarType<T[P], AggregateFoodAlert[P]>
  }




  export type FoodAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodAlertWhereInput
    orderBy?: FoodAlertOrderByWithAggregationInput | FoodAlertOrderByWithAggregationInput[]
    by: FoodAlertScalarFieldEnum[] | FoodAlertScalarFieldEnum
    having?: FoodAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodAlertCountAggregateInputType | true
    _avg?: FoodAlertAvgAggregateInputType
    _sum?: FoodAlertSumAggregateInputType
    _min?: FoodAlertMinAggregateInputType
    _max?: FoodAlertMaxAggregateInputType
  }

  export type FoodAlertGroupByOutputType = {
    id: number
    pet_id: number
    message: string
    level: string
    is_resolved: boolean
    created_at: Date
    _count: FoodAlertCountAggregateOutputType | null
    _avg: FoodAlertAvgAggregateOutputType | null
    _sum: FoodAlertSumAggregateOutputType | null
    _min: FoodAlertMinAggregateOutputType | null
    _max: FoodAlertMaxAggregateOutputType | null
  }

  type GetFoodAlertGroupByPayload<T extends FoodAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodAlertGroupByOutputType[P]>
            : GetScalarType<T[P], FoodAlertGroupByOutputType[P]>
        }
      >
    >


  export type FoodAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    message?: boolean
    level?: boolean
    is_resolved?: boolean
    created_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodAlert"]>

  export type FoodAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    message?: boolean
    level?: boolean
    is_resolved?: boolean
    created_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodAlert"]>

  export type FoodAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    message?: boolean
    level?: boolean
    is_resolved?: boolean
    created_at?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodAlert"]>

  export type FoodAlertSelectScalar = {
    id?: boolean
    pet_id?: boolean
    message?: boolean
    level?: boolean
    is_resolved?: boolean
    created_at?: boolean
  }

  export type FoodAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet_id" | "message" | "level" | "is_resolved" | "created_at", ExtArgs["result"]["foodAlert"]>
  export type FoodAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type FoodAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type FoodAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $FoodAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodAlert"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pet_id: number
      message: string
      level: string
      is_resolved: boolean
      created_at: Date
    }, ExtArgs["result"]["foodAlert"]>
    composites: {}
  }

  type FoodAlertGetPayload<S extends boolean | null | undefined | FoodAlertDefaultArgs> = $Result.GetResult<Prisma.$FoodAlertPayload, S>

  type FoodAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodAlertCountAggregateInputType | true
    }

  export interface FoodAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodAlert'], meta: { name: 'FoodAlert' } }
    /**
     * Find zero or one FoodAlert that matches the filter.
     * @param {FoodAlertFindUniqueArgs} args - Arguments to find a FoodAlert
     * @example
     * // Get one FoodAlert
     * const foodAlert = await prisma.foodAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodAlertFindUniqueArgs>(args: SelectSubset<T, FoodAlertFindUniqueArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one FoodAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodAlertFindUniqueOrThrowArgs} args - Arguments to find a FoodAlert
     * @example
     * // Get one FoodAlert
     * const foodAlert = await prisma.foodAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first FoodAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAlertFindFirstArgs} args - Arguments to find a FoodAlert
     * @example
     * // Get one FoodAlert
     * const foodAlert = await prisma.foodAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodAlertFindFirstArgs>(args?: SelectSubset<T, FoodAlertFindFirstArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first FoodAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAlertFindFirstOrThrowArgs} args - Arguments to find a FoodAlert
     * @example
     * // Get one FoodAlert
     * const foodAlert = await prisma.foodAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more FoodAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodAlerts
     * const foodAlerts = await prisma.foodAlert.findMany()
     * 
     * // Get first 10 FoodAlerts
     * const foodAlerts = await prisma.foodAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodAlertWithIdOnly = await prisma.foodAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodAlertFindManyArgs>(args?: SelectSubset<T, FoodAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a FoodAlert.
     * @param {FoodAlertCreateArgs} args - Arguments to create a FoodAlert.
     * @example
     * // Create one FoodAlert
     * const FoodAlert = await prisma.foodAlert.create({
     *   data: {
     *     // ... data to create a FoodAlert
     *   }
     * })
     * 
     */
    create<T extends FoodAlertCreateArgs>(args: SelectSubset<T, FoodAlertCreateArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many FoodAlerts.
     * @param {FoodAlertCreateManyArgs} args - Arguments to create many FoodAlerts.
     * @example
     * // Create many FoodAlerts
     * const foodAlert = await prisma.foodAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodAlertCreateManyArgs>(args?: SelectSubset<T, FoodAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodAlerts and returns the data saved in the database.
     * @param {FoodAlertCreateManyAndReturnArgs} args - Arguments to create many FoodAlerts.
     * @example
     * // Create many FoodAlerts
     * const foodAlert = await prisma.foodAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodAlerts and only return the `id`
     * const foodAlertWithIdOnly = await prisma.foodAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a FoodAlert.
     * @param {FoodAlertDeleteArgs} args - Arguments to delete one FoodAlert.
     * @example
     * // Delete one FoodAlert
     * const FoodAlert = await prisma.foodAlert.delete({
     *   where: {
     *     // ... filter to delete one FoodAlert
     *   }
     * })
     * 
     */
    delete<T extends FoodAlertDeleteArgs>(args: SelectSubset<T, FoodAlertDeleteArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one FoodAlert.
     * @param {FoodAlertUpdateArgs} args - Arguments to update one FoodAlert.
     * @example
     * // Update one FoodAlert
     * const foodAlert = await prisma.foodAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodAlertUpdateArgs>(args: SelectSubset<T, FoodAlertUpdateArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more FoodAlerts.
     * @param {FoodAlertDeleteManyArgs} args - Arguments to filter FoodAlerts to delete.
     * @example
     * // Delete a few FoodAlerts
     * const { count } = await prisma.foodAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodAlertDeleteManyArgs>(args?: SelectSubset<T, FoodAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodAlerts
     * const foodAlert = await prisma.foodAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodAlertUpdateManyArgs>(args: SelectSubset<T, FoodAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodAlerts and returns the data updated in the database.
     * @param {FoodAlertUpdateManyAndReturnArgs} args - Arguments to update many FoodAlerts.
     * @example
     * // Update many FoodAlerts
     * const foodAlert = await prisma.foodAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodAlerts and only return the `id`
     * const foodAlertWithIdOnly = await prisma.foodAlert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one FoodAlert.
     * @param {FoodAlertUpsertArgs} args - Arguments to update or create a FoodAlert.
     * @example
     * // Update or create a FoodAlert
     * const foodAlert = await prisma.foodAlert.upsert({
     *   create: {
     *     // ... data to create a FoodAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodAlert we want to update
     *   }
     * })
     */
    upsert<T extends FoodAlertUpsertArgs>(args: SelectSubset<T, FoodAlertUpsertArgs<ExtArgs>>): Prisma__FoodAlertClient<$Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of FoodAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAlertCountArgs} args - Arguments to filter FoodAlerts to count.
     * @example
     * // Count the number of FoodAlerts
     * const count = await prisma.foodAlert.count({
     *   where: {
     *     // ... the filter for the FoodAlerts we want to count
     *   }
     * })
    **/
    count<T extends FoodAlertCountArgs>(
      args?: Subset<T, FoodAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAlertAggregateArgs>(args: Subset<T, FoodAlertAggregateArgs>): Prisma.PrismaPromise<GetFoodAlertAggregateType<T>>

    /**
     * Group by FoodAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodAlertGroupByArgs['orderBy'] }
        : { orderBy?: FoodAlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodAlert model
   */
  readonly fields: FoodAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodAlert model
   */ 
  interface FoodAlertFieldRefs {
    readonly id: FieldRef<"FoodAlert", 'Int'>
    readonly pet_id: FieldRef<"FoodAlert", 'Int'>
    readonly message: FieldRef<"FoodAlert", 'String'>
    readonly level: FieldRef<"FoodAlert", 'String'>
    readonly is_resolved: FieldRef<"FoodAlert", 'Boolean'>
    readonly created_at: FieldRef<"FoodAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodAlert findUnique
   */
  export type FoodAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * Filter, which FoodAlert to fetch.
     */
    where: FoodAlertWhereUniqueInput
  }

  /**
   * FoodAlert findUniqueOrThrow
   */
  export type FoodAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * Filter, which FoodAlert to fetch.
     */
    where: FoodAlertWhereUniqueInput
  }

  /**
   * FoodAlert findFirst
   */
  export type FoodAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * Filter, which FoodAlert to fetch.
     */
    where?: FoodAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: FoodAlertOrderByWithRelationInput | FoodAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodAlerts.
     */
    cursor?: FoodAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodAlerts.
     */
    distinct?: FoodAlertScalarFieldEnum | FoodAlertScalarFieldEnum[]
  }

  /**
   * FoodAlert findFirstOrThrow
   */
  export type FoodAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * Filter, which FoodAlert to fetch.
     */
    where?: FoodAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: FoodAlertOrderByWithRelationInput | FoodAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodAlerts.
     */
    cursor?: FoodAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodAlerts.
     */
    distinct?: FoodAlertScalarFieldEnum | FoodAlertScalarFieldEnum[]
  }

  /**
   * FoodAlert findMany
   */
  export type FoodAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * Filter, which FoodAlerts to fetch.
     */
    where?: FoodAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: FoodAlertOrderByWithRelationInput | FoodAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodAlerts.
     */
    cursor?: FoodAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodAlerts.
     */
    skip?: number
    distinct?: FoodAlertScalarFieldEnum | FoodAlertScalarFieldEnum[]
  }

  /**
   * FoodAlert create
   */
  export type FoodAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodAlert.
     */
    data: XOR<FoodAlertCreateInput, FoodAlertUncheckedCreateInput>
  }

  /**
   * FoodAlert createMany
   */
  export type FoodAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodAlerts.
     */
    data: FoodAlertCreateManyInput | FoodAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodAlert createManyAndReturn
   */
  export type FoodAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * The data used to create many FoodAlerts.
     */
    data: FoodAlertCreateManyInput | FoodAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodAlert update
   */
  export type FoodAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodAlert.
     */
    data: XOR<FoodAlertUpdateInput, FoodAlertUncheckedUpdateInput>
    /**
     * Choose, which FoodAlert to update.
     */
    where: FoodAlertWhereUniqueInput
  }

  /**
   * FoodAlert updateMany
   */
  export type FoodAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodAlerts.
     */
    data: XOR<FoodAlertUpdateManyMutationInput, FoodAlertUncheckedUpdateManyInput>
    /**
     * Filter which FoodAlerts to update
     */
    where?: FoodAlertWhereInput
    /**
     * Limit how many FoodAlerts to update.
     */
    limit?: number
  }

  /**
   * FoodAlert updateManyAndReturn
   */
  export type FoodAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * The data used to update FoodAlerts.
     */
    data: XOR<FoodAlertUpdateManyMutationInput, FoodAlertUncheckedUpdateManyInput>
    /**
     * Filter which FoodAlerts to update
     */
    where?: FoodAlertWhereInput
    /**
     * Limit how many FoodAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodAlert upsert
   */
  export type FoodAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodAlert to update in case it exists.
     */
    where: FoodAlertWhereUniqueInput
    /**
     * In case the FoodAlert found by the `where` argument doesn't exist, create a new FoodAlert with this data.
     */
    create: XOR<FoodAlertCreateInput, FoodAlertUncheckedCreateInput>
    /**
     * In case the FoodAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodAlertUpdateInput, FoodAlertUncheckedUpdateInput>
  }

  /**
   * FoodAlert delete
   */
  export type FoodAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
    /**
     * Filter which FoodAlert to delete.
     */
    where: FoodAlertWhereUniqueInput
  }

  /**
   * FoodAlert deleteMany
   */
  export type FoodAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodAlerts to delete
     */
    where?: FoodAlertWhereInput
    /**
     * Limit how many FoodAlerts to delete.
     */
    limit?: number
  }

  /**
   * FoodAlert without action
   */
  export type FoodAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: FoodAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: FoodAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodAlertInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    notify_vet_visits: 'notify_vet_visits',
    notify_feeding: 'notify_feeding',
    notify_weekly_report: 'notify_weekly_report',
    notify_medication: 'notify_medication'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    species: 'species',
    breed: 'breed',
    gender: 'gender',
    color: 'color',
    microchip: 'microchip',
    bio: 'bio',
    image_url: 'image_url',
    weight_kg: 'weight_kg',
    birthday: 'birthday',
    status: 'status',
    health_score: 'health_score',
    emoji: 'emoji',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const HealthRecordScalarFieldEnum: {
    id: 'id',
    pet_id: 'pet_id',
    score: 'score',
    weight_kg: 'weight_kg',
    last_checkup: 'last_checkup',
    vaccinated: 'vaccinated',
    conditions: 'conditions',
    recorded_at: 'recorded_at'
  };

  export type HealthRecordScalarFieldEnum = (typeof HealthRecordScalarFieldEnum)[keyof typeof HealthRecordScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    pet_id: 'pet_id',
    name: 'name',
    frequency: 'frequency',
    next_dose_date: 'next_dose_date',
    created_at: 'created_at'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const FeedingScheduleScalarFieldEnum: {
    id: 'id',
    pet_id: 'pet_id',
    meal_type: 'meal_type',
    time: 'time',
    food_name: 'food_name',
    amount_g: 'amount_g',
    schedule_date: 'schedule_date',
    status: 'status'
  };

  export type FeedingScheduleScalarFieldEnum = (typeof FeedingScheduleScalarFieldEnum)[keyof typeof FeedingScheduleScalarFieldEnum]


  export const VetScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    clinic: 'clinic',
    phone: 'phone',
    address: 'address',
    specialty: 'specialty'
  };

  export type VetScalarFieldEnum = (typeof VetScalarFieldEnum)[keyof typeof VetScalarFieldEnum]


  export const VetRecordScalarFieldEnum: {
    id: 'id',
    pet_id: 'pet_id',
    vet_id: 'vet_id',
    vet_name: 'vet_name',
    date: 'date',
    type: 'type',
    notes: 'notes',
    status: 'status'
  };

  export type VetRecordScalarFieldEnum = (typeof VetRecordScalarFieldEnum)[keyof typeof VetRecordScalarFieldEnum]


  export const CalendarEventScalarFieldEnum: {
    id: 'id',
    pet_id: 'pet_id',
    user_id: 'user_id',
    title: 'title',
    event_date: 'event_date',
    type: 'type',
    icon_type: 'icon_type',
    created_at: 'created_at'
  };

  export type CalendarEventScalarFieldEnum = (typeof CalendarEventScalarFieldEnum)[keyof typeof CalendarEventScalarFieldEnum]


  export const FoodAlertScalarFieldEnum: {
    id: 'id',
    pet_id: 'pet_id',
    message: 'message',
    level: 'level',
    is_resolved: 'is_resolved',
    created_at: 'created_at'
  };

  export type FoodAlertScalarFieldEnum = (typeof FoodAlertScalarFieldEnum)[keyof typeof FoodAlertScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    pets?: PetListRelationFilter
    vets?: VetListRelationFilter
    events?: CalendarEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    settings?: UserSettingsOrderByWithRelationInput
    pets?: PetOrderByRelationAggregateInput
    vets?: VetOrderByRelationAggregateInput
    events?: CalendarEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    pets?: PetListRelationFilter
    vets?: VetListRelationFilter
    events?: CalendarEventListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: IntFilter<"UserSettings"> | number
    user_id?: IntFilter<"UserSettings"> | number
    notify_vet_visits?: BoolFilter<"UserSettings"> | boolean
    notify_feeding?: BoolFilter<"UserSettings"> | boolean
    notify_weekly_report?: BoolFilter<"UserSettings"> | boolean
    notify_medication?: BoolFilter<"UserSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    notify_vet_visits?: SortOrder
    notify_feeding?: SortOrder
    notify_weekly_report?: SortOrder
    notify_medication?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    notify_vet_visits?: BoolFilter<"UserSettings"> | boolean
    notify_feeding?: BoolFilter<"UserSettings"> | boolean
    notify_weekly_report?: BoolFilter<"UserSettings"> | boolean
    notify_medication?: BoolFilter<"UserSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    notify_vet_visits?: SortOrder
    notify_feeding?: SortOrder
    notify_weekly_report?: SortOrder
    notify_medication?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSettings"> | number
    user_id?: IntWithAggregatesFilter<"UserSettings"> | number
    notify_vet_visits?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    notify_feeding?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    notify_weekly_report?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    notify_medication?: BoolWithAggregatesFilter<"UserSettings"> | boolean
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: IntFilter<"Pet"> | number
    user_id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    gender?: StringNullableFilter<"Pet"> | string | null
    color?: StringNullableFilter<"Pet"> | string | null
    microchip?: StringNullableFilter<"Pet"> | string | null
    bio?: StringNullableFilter<"Pet"> | string | null
    image_url?: StringNullableFilter<"Pet"> | string | null
    weight_kg?: FloatNullableFilter<"Pet"> | number | null
    birthday?: StringNullableFilter<"Pet"> | string | null
    status?: StringFilter<"Pet"> | string
    health_score?: IntFilter<"Pet"> | number
    emoji?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    updated_at?: DateTimeFilter<"Pet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    health_records?: HealthRecordListRelationFilter
    medications?: MedicationListRelationFilter
    feeding_schedules?: FeedingScheduleListRelationFilter
    vet_records?: VetRecordListRelationFilter
    calendar_events?: CalendarEventListRelationFilter
    food_alerts?: FoodAlertListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    microchip?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    weight_kg?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    status?: SortOrder
    health_score?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    health_records?: HealthRecordOrderByRelationAggregateInput
    medications?: MedicationOrderByRelationAggregateInput
    feeding_schedules?: FeedingScheduleOrderByRelationAggregateInput
    vet_records?: VetRecordOrderByRelationAggregateInput
    calendar_events?: CalendarEventOrderByRelationAggregateInput
    food_alerts?: FoodAlertOrderByRelationAggregateInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    user_id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    gender?: StringNullableFilter<"Pet"> | string | null
    color?: StringNullableFilter<"Pet"> | string | null
    microchip?: StringNullableFilter<"Pet"> | string | null
    bio?: StringNullableFilter<"Pet"> | string | null
    image_url?: StringNullableFilter<"Pet"> | string | null
    weight_kg?: FloatNullableFilter<"Pet"> | number | null
    birthday?: StringNullableFilter<"Pet"> | string | null
    status?: StringFilter<"Pet"> | string
    health_score?: IntFilter<"Pet"> | number
    emoji?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    updated_at?: DateTimeFilter<"Pet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    health_records?: HealthRecordListRelationFilter
    medications?: MedicationListRelationFilter
    feeding_schedules?: FeedingScheduleListRelationFilter
    vet_records?: VetRecordListRelationFilter
    calendar_events?: CalendarEventListRelationFilter
    food_alerts?: FoodAlertListRelationFilter
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    microchip?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    weight_kg?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    status?: SortOrder
    health_score?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pet"> | number
    user_id?: IntWithAggregatesFilter<"Pet"> | number
    name?: StringWithAggregatesFilter<"Pet"> | string
    species?: StringWithAggregatesFilter<"Pet"> | string
    breed?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    color?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    microchip?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    weight_kg?: FloatNullableWithAggregatesFilter<"Pet"> | number | null
    birthday?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    status?: StringWithAggregatesFilter<"Pet"> | string
    health_score?: IntWithAggregatesFilter<"Pet"> | number
    emoji?: StringWithAggregatesFilter<"Pet"> | string
    created_at?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type HealthRecordWhereInput = {
    AND?: HealthRecordWhereInput | HealthRecordWhereInput[]
    OR?: HealthRecordWhereInput[]
    NOT?: HealthRecordWhereInput | HealthRecordWhereInput[]
    id?: IntFilter<"HealthRecord"> | number
    pet_id?: IntFilter<"HealthRecord"> | number
    score?: IntFilter<"HealthRecord"> | number
    weight_kg?: FloatNullableFilter<"HealthRecord"> | number | null
    last_checkup?: StringNullableFilter<"HealthRecord"> | string | null
    vaccinated?: BoolFilter<"HealthRecord"> | boolean
    conditions?: StringFilter<"HealthRecord"> | string
    recorded_at?: DateTimeFilter<"HealthRecord"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type HealthRecordOrderByWithRelationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    score?: SortOrder
    weight_kg?: SortOrderInput | SortOrder
    last_checkup?: SortOrderInput | SortOrder
    vaccinated?: SortOrder
    conditions?: SortOrder
    recorded_at?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type HealthRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HealthRecordWhereInput | HealthRecordWhereInput[]
    OR?: HealthRecordWhereInput[]
    NOT?: HealthRecordWhereInput | HealthRecordWhereInput[]
    pet_id?: IntFilter<"HealthRecord"> | number
    score?: IntFilter<"HealthRecord"> | number
    weight_kg?: FloatNullableFilter<"HealthRecord"> | number | null
    last_checkup?: StringNullableFilter<"HealthRecord"> | string | null
    vaccinated?: BoolFilter<"HealthRecord"> | boolean
    conditions?: StringFilter<"HealthRecord"> | string
    recorded_at?: DateTimeFilter<"HealthRecord"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type HealthRecordOrderByWithAggregationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    score?: SortOrder
    weight_kg?: SortOrderInput | SortOrder
    last_checkup?: SortOrderInput | SortOrder
    vaccinated?: SortOrder
    conditions?: SortOrder
    recorded_at?: SortOrder
    _count?: HealthRecordCountOrderByAggregateInput
    _avg?: HealthRecordAvgOrderByAggregateInput
    _max?: HealthRecordMaxOrderByAggregateInput
    _min?: HealthRecordMinOrderByAggregateInput
    _sum?: HealthRecordSumOrderByAggregateInput
  }

  export type HealthRecordScalarWhereWithAggregatesInput = {
    AND?: HealthRecordScalarWhereWithAggregatesInput | HealthRecordScalarWhereWithAggregatesInput[]
    OR?: HealthRecordScalarWhereWithAggregatesInput[]
    NOT?: HealthRecordScalarWhereWithAggregatesInput | HealthRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HealthRecord"> | number
    pet_id?: IntWithAggregatesFilter<"HealthRecord"> | number
    score?: IntWithAggregatesFilter<"HealthRecord"> | number
    weight_kg?: FloatNullableWithAggregatesFilter<"HealthRecord"> | number | null
    last_checkup?: StringNullableWithAggregatesFilter<"HealthRecord"> | string | null
    vaccinated?: BoolWithAggregatesFilter<"HealthRecord"> | boolean
    conditions?: StringWithAggregatesFilter<"HealthRecord"> | string
    recorded_at?: DateTimeWithAggregatesFilter<"HealthRecord"> | Date | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: IntFilter<"Medication"> | number
    pet_id?: IntFilter<"Medication"> | number
    name?: StringFilter<"Medication"> | string
    frequency?: StringFilter<"Medication"> | string
    next_dose_date?: StringNullableFilter<"Medication"> | string | null
    created_at?: DateTimeFilter<"Medication"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    next_dose_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    pet_id?: IntFilter<"Medication"> | number
    name?: StringFilter<"Medication"> | string
    frequency?: StringFilter<"Medication"> | string
    next_dose_date?: StringNullableFilter<"Medication"> | string | null
    created_at?: DateTimeFilter<"Medication"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    next_dose_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medication"> | number
    pet_id?: IntWithAggregatesFilter<"Medication"> | number
    name?: StringWithAggregatesFilter<"Medication"> | string
    frequency?: StringWithAggregatesFilter<"Medication"> | string
    next_dose_date?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
  }

  export type FeedingScheduleWhereInput = {
    AND?: FeedingScheduleWhereInput | FeedingScheduleWhereInput[]
    OR?: FeedingScheduleWhereInput[]
    NOT?: FeedingScheduleWhereInput | FeedingScheduleWhereInput[]
    id?: IntFilter<"FeedingSchedule"> | number
    pet_id?: IntFilter<"FeedingSchedule"> | number
    meal_type?: StringFilter<"FeedingSchedule"> | string
    time?: StringFilter<"FeedingSchedule"> | string
    food_name?: StringFilter<"FeedingSchedule"> | string
    amount_g?: FloatFilter<"FeedingSchedule"> | number
    schedule_date?: StringFilter<"FeedingSchedule"> | string
    status?: StringFilter<"FeedingSchedule"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type FeedingScheduleOrderByWithRelationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    meal_type?: SortOrder
    time?: SortOrder
    food_name?: SortOrder
    amount_g?: SortOrder
    schedule_date?: SortOrder
    status?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type FeedingScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedingScheduleWhereInput | FeedingScheduleWhereInput[]
    OR?: FeedingScheduleWhereInput[]
    NOT?: FeedingScheduleWhereInput | FeedingScheduleWhereInput[]
    pet_id?: IntFilter<"FeedingSchedule"> | number
    meal_type?: StringFilter<"FeedingSchedule"> | string
    time?: StringFilter<"FeedingSchedule"> | string
    food_name?: StringFilter<"FeedingSchedule"> | string
    amount_g?: FloatFilter<"FeedingSchedule"> | number
    schedule_date?: StringFilter<"FeedingSchedule"> | string
    status?: StringFilter<"FeedingSchedule"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type FeedingScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    meal_type?: SortOrder
    time?: SortOrder
    food_name?: SortOrder
    amount_g?: SortOrder
    schedule_date?: SortOrder
    status?: SortOrder
    _count?: FeedingScheduleCountOrderByAggregateInput
    _avg?: FeedingScheduleAvgOrderByAggregateInput
    _max?: FeedingScheduleMaxOrderByAggregateInput
    _min?: FeedingScheduleMinOrderByAggregateInput
    _sum?: FeedingScheduleSumOrderByAggregateInput
  }

  export type FeedingScheduleScalarWhereWithAggregatesInput = {
    AND?: FeedingScheduleScalarWhereWithAggregatesInput | FeedingScheduleScalarWhereWithAggregatesInput[]
    OR?: FeedingScheduleScalarWhereWithAggregatesInput[]
    NOT?: FeedingScheduleScalarWhereWithAggregatesInput | FeedingScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeedingSchedule"> | number
    pet_id?: IntWithAggregatesFilter<"FeedingSchedule"> | number
    meal_type?: StringWithAggregatesFilter<"FeedingSchedule"> | string
    time?: StringWithAggregatesFilter<"FeedingSchedule"> | string
    food_name?: StringWithAggregatesFilter<"FeedingSchedule"> | string
    amount_g?: FloatWithAggregatesFilter<"FeedingSchedule"> | number
    schedule_date?: StringWithAggregatesFilter<"FeedingSchedule"> | string
    status?: StringWithAggregatesFilter<"FeedingSchedule"> | string
  }

  export type VetWhereInput = {
    AND?: VetWhereInput | VetWhereInput[]
    OR?: VetWhereInput[]
    NOT?: VetWhereInput | VetWhereInput[]
    id?: IntFilter<"Vet"> | number
    user_id?: IntFilter<"Vet"> | number
    name?: StringFilter<"Vet"> | string
    clinic?: StringNullableFilter<"Vet"> | string | null
    phone?: StringNullableFilter<"Vet"> | string | null
    address?: StringNullableFilter<"Vet"> | string | null
    specialty?: StringFilter<"Vet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: VetRecordListRelationFilter
  }

  export type VetOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    clinic?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    specialty?: SortOrder
    user?: UserOrderByWithRelationInput
    records?: VetRecordOrderByRelationAggregateInput
  }

  export type VetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VetWhereInput | VetWhereInput[]
    OR?: VetWhereInput[]
    NOT?: VetWhereInput | VetWhereInput[]
    user_id?: IntFilter<"Vet"> | number
    name?: StringFilter<"Vet"> | string
    clinic?: StringNullableFilter<"Vet"> | string | null
    phone?: StringNullableFilter<"Vet"> | string | null
    address?: StringNullableFilter<"Vet"> | string | null
    specialty?: StringFilter<"Vet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: VetRecordListRelationFilter
  }, "id">

  export type VetOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    clinic?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    specialty?: SortOrder
    _count?: VetCountOrderByAggregateInput
    _avg?: VetAvgOrderByAggregateInput
    _max?: VetMaxOrderByAggregateInput
    _min?: VetMinOrderByAggregateInput
    _sum?: VetSumOrderByAggregateInput
  }

  export type VetScalarWhereWithAggregatesInput = {
    AND?: VetScalarWhereWithAggregatesInput | VetScalarWhereWithAggregatesInput[]
    OR?: VetScalarWhereWithAggregatesInput[]
    NOT?: VetScalarWhereWithAggregatesInput | VetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vet"> | number
    user_id?: IntWithAggregatesFilter<"Vet"> | number
    name?: StringWithAggregatesFilter<"Vet"> | string
    clinic?: StringNullableWithAggregatesFilter<"Vet"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Vet"> | string | null
    address?: StringNullableWithAggregatesFilter<"Vet"> | string | null
    specialty?: StringWithAggregatesFilter<"Vet"> | string
  }

  export type VetRecordWhereInput = {
    AND?: VetRecordWhereInput | VetRecordWhereInput[]
    OR?: VetRecordWhereInput[]
    NOT?: VetRecordWhereInput | VetRecordWhereInput[]
    id?: IntFilter<"VetRecord"> | number
    pet_id?: IntFilter<"VetRecord"> | number
    vet_id?: IntNullableFilter<"VetRecord"> | number | null
    vet_name?: StringNullableFilter<"VetRecord"> | string | null
    date?: StringFilter<"VetRecord"> | string
    type?: StringFilter<"VetRecord"> | string
    notes?: StringNullableFilter<"VetRecord"> | string | null
    status?: StringFilter<"VetRecord"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    vet?: XOR<VetNullableScalarRelationFilter, VetWhereInput> | null
  }

  export type VetRecordOrderByWithRelationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    vet_id?: SortOrderInput | SortOrder
    vet_name?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    pet?: PetOrderByWithRelationInput
    vet?: VetOrderByWithRelationInput
  }

  export type VetRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VetRecordWhereInput | VetRecordWhereInput[]
    OR?: VetRecordWhereInput[]
    NOT?: VetRecordWhereInput | VetRecordWhereInput[]
    pet_id?: IntFilter<"VetRecord"> | number
    vet_id?: IntNullableFilter<"VetRecord"> | number | null
    vet_name?: StringNullableFilter<"VetRecord"> | string | null
    date?: StringFilter<"VetRecord"> | string
    type?: StringFilter<"VetRecord"> | string
    notes?: StringNullableFilter<"VetRecord"> | string | null
    status?: StringFilter<"VetRecord"> | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    vet?: XOR<VetNullableScalarRelationFilter, VetWhereInput> | null
  }, "id">

  export type VetRecordOrderByWithAggregationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    vet_id?: SortOrderInput | SortOrder
    vet_name?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: VetRecordCountOrderByAggregateInput
    _avg?: VetRecordAvgOrderByAggregateInput
    _max?: VetRecordMaxOrderByAggregateInput
    _min?: VetRecordMinOrderByAggregateInput
    _sum?: VetRecordSumOrderByAggregateInput
  }

  export type VetRecordScalarWhereWithAggregatesInput = {
    AND?: VetRecordScalarWhereWithAggregatesInput | VetRecordScalarWhereWithAggregatesInput[]
    OR?: VetRecordScalarWhereWithAggregatesInput[]
    NOT?: VetRecordScalarWhereWithAggregatesInput | VetRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VetRecord"> | number
    pet_id?: IntWithAggregatesFilter<"VetRecord"> | number
    vet_id?: IntNullableWithAggregatesFilter<"VetRecord"> | number | null
    vet_name?: StringNullableWithAggregatesFilter<"VetRecord"> | string | null
    date?: StringWithAggregatesFilter<"VetRecord"> | string
    type?: StringWithAggregatesFilter<"VetRecord"> | string
    notes?: StringNullableWithAggregatesFilter<"VetRecord"> | string | null
    status?: StringWithAggregatesFilter<"VetRecord"> | string
  }

  export type CalendarEventWhereInput = {
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    id?: IntFilter<"CalendarEvent"> | number
    pet_id?: IntNullableFilter<"CalendarEvent"> | number | null
    user_id?: IntFilter<"CalendarEvent"> | number
    title?: StringFilter<"CalendarEvent"> | string
    event_date?: StringFilter<"CalendarEvent"> | string
    type?: StringFilter<"CalendarEvent"> | string
    icon_type?: StringFilter<"CalendarEvent"> | string
    created_at?: DateTimeFilter<"CalendarEvent"> | Date | string
    pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CalendarEventOrderByWithRelationInput = {
    id?: SortOrder
    pet_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    title?: SortOrder
    event_date?: SortOrder
    type?: SortOrder
    icon_type?: SortOrder
    created_at?: SortOrder
    pet?: PetOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    pet_id?: IntNullableFilter<"CalendarEvent"> | number | null
    user_id?: IntFilter<"CalendarEvent"> | number
    title?: StringFilter<"CalendarEvent"> | string
    event_date?: StringFilter<"CalendarEvent"> | string
    type?: StringFilter<"CalendarEvent"> | string
    icon_type?: StringFilter<"CalendarEvent"> | string
    created_at?: DateTimeFilter<"CalendarEvent"> | Date | string
    pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CalendarEventOrderByWithAggregationInput = {
    id?: SortOrder
    pet_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    title?: SortOrder
    event_date?: SortOrder
    type?: SortOrder
    icon_type?: SortOrder
    created_at?: SortOrder
    _count?: CalendarEventCountOrderByAggregateInput
    _avg?: CalendarEventAvgOrderByAggregateInput
    _max?: CalendarEventMaxOrderByAggregateInput
    _min?: CalendarEventMinOrderByAggregateInput
    _sum?: CalendarEventSumOrderByAggregateInput
  }

  export type CalendarEventScalarWhereWithAggregatesInput = {
    AND?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    OR?: CalendarEventScalarWhereWithAggregatesInput[]
    NOT?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CalendarEvent"> | number
    pet_id?: IntNullableWithAggregatesFilter<"CalendarEvent"> | number | null
    user_id?: IntWithAggregatesFilter<"CalendarEvent"> | number
    title?: StringWithAggregatesFilter<"CalendarEvent"> | string
    event_date?: StringWithAggregatesFilter<"CalendarEvent"> | string
    type?: StringWithAggregatesFilter<"CalendarEvent"> | string
    icon_type?: StringWithAggregatesFilter<"CalendarEvent"> | string
    created_at?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
  }

  export type FoodAlertWhereInput = {
    AND?: FoodAlertWhereInput | FoodAlertWhereInput[]
    OR?: FoodAlertWhereInput[]
    NOT?: FoodAlertWhereInput | FoodAlertWhereInput[]
    id?: IntFilter<"FoodAlert"> | number
    pet_id?: IntFilter<"FoodAlert"> | number
    message?: StringFilter<"FoodAlert"> | string
    level?: StringFilter<"FoodAlert"> | string
    is_resolved?: BoolFilter<"FoodAlert"> | boolean
    created_at?: DateTimeFilter<"FoodAlert"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type FoodAlertOrderByWithRelationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    is_resolved?: SortOrder
    created_at?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type FoodAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodAlertWhereInput | FoodAlertWhereInput[]
    OR?: FoodAlertWhereInput[]
    NOT?: FoodAlertWhereInput | FoodAlertWhereInput[]
    pet_id?: IntFilter<"FoodAlert"> | number
    message?: StringFilter<"FoodAlert"> | string
    level?: StringFilter<"FoodAlert"> | string
    is_resolved?: BoolFilter<"FoodAlert"> | boolean
    created_at?: DateTimeFilter<"FoodAlert"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type FoodAlertOrderByWithAggregationInput = {
    id?: SortOrder
    pet_id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    is_resolved?: SortOrder
    created_at?: SortOrder
    _count?: FoodAlertCountOrderByAggregateInput
    _avg?: FoodAlertAvgOrderByAggregateInput
    _max?: FoodAlertMaxOrderByAggregateInput
    _min?: FoodAlertMinOrderByAggregateInput
    _sum?: FoodAlertSumOrderByAggregateInput
  }

  export type FoodAlertScalarWhereWithAggregatesInput = {
    AND?: FoodAlertScalarWhereWithAggregatesInput | FoodAlertScalarWhereWithAggregatesInput[]
    OR?: FoodAlertScalarWhereWithAggregatesInput[]
    NOT?: FoodAlertScalarWhereWithAggregatesInput | FoodAlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodAlert"> | number
    pet_id?: IntWithAggregatesFilter<"FoodAlert"> | number
    message?: StringWithAggregatesFilter<"FoodAlert"> | string
    level?: StringWithAggregatesFilter<"FoodAlert"> | string
    is_resolved?: BoolWithAggregatesFilter<"FoodAlert"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"FoodAlert"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    vets?: VetCreateNestedManyWithoutUserInput
    events?: CalendarEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    vets?: VetUncheckedCreateNestedManyWithoutUserInput
    events?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    vets?: VetUpdateManyWithoutUserNestedInput
    events?: CalendarEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    vets?: VetUncheckedUpdateManyWithoutUserNestedInput
    events?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: number
    user_id: number
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
  }

  export type UserSettingsUpdateInput = {
    notify_vet_visits?: BoolFieldUpdateOperationsInput | boolean
    notify_feeding?: BoolFieldUpdateOperationsInput | boolean
    notify_weekly_report?: BoolFieldUpdateOperationsInput | boolean
    notify_medication?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    notify_vet_visits?: BoolFieldUpdateOperationsInput | boolean
    notify_feeding?: BoolFieldUpdateOperationsInput | boolean
    notify_weekly_report?: BoolFieldUpdateOperationsInput | boolean
    notify_medication?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsCreateManyInput = {
    id?: number
    user_id: number
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
  }

  export type UserSettingsUpdateManyMutationInput = {
    notify_vet_visits?: BoolFieldUpdateOperationsInput | boolean
    notify_feeding?: BoolFieldUpdateOperationsInput | boolean
    notify_weekly_report?: BoolFieldUpdateOperationsInput | boolean
    notify_medication?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    notify_vet_visits?: BoolFieldUpdateOperationsInput | boolean
    notify_feeding?: BoolFieldUpdateOperationsInput | boolean
    notify_weekly_report?: BoolFieldUpdateOperationsInput | boolean
    notify_medication?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PetCreateInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
    health_records?: HealthRecordCreateNestedManyWithoutPetInput
    medications?: MedicationCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleCreateNestedManyWithoutPetInput
    vet_records?: VetRecordCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordUncheckedCreateNestedManyWithoutPetInput
    medications?: MedicationUncheckedCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleUncheckedCreateNestedManyWithoutPetInput
    vet_records?: VetRecordUncheckedCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventUncheckedCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    health_records?: HealthRecordUpdateManyWithoutPetNestedInput
    medications?: MedicationUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUncheckedUpdateManyWithoutPetNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUncheckedUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUncheckedUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordCreateInput = {
    score: number
    weight_kg?: number | null
    last_checkup?: string | null
    vaccinated?: boolean
    conditions?: string
    recorded_at?: Date | string
    pet: PetCreateNestedOneWithoutHealth_recordsInput
  }

  export type HealthRecordUncheckedCreateInput = {
    id?: number
    pet_id: number
    score: number
    weight_kg?: number | null
    last_checkup?: string | null
    vaccinated?: boolean
    conditions?: string
    recorded_at?: Date | string
  }

  export type HealthRecordUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    last_checkup?: NullableStringFieldUpdateOperationsInput | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    conditions?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutHealth_recordsNestedInput
  }

  export type HealthRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    last_checkup?: NullableStringFieldUpdateOperationsInput | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    conditions?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordCreateManyInput = {
    id?: number
    pet_id: number
    score: number
    weight_kg?: number | null
    last_checkup?: string | null
    vaccinated?: boolean
    conditions?: string
    recorded_at?: Date | string
  }

  export type HealthRecordUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    last_checkup?: NullableStringFieldUpdateOperationsInput | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    conditions?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    last_checkup?: NullableStringFieldUpdateOperationsInput | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    conditions?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateInput = {
    name: string
    frequency: string
    next_dose_date?: string | null
    created_at?: Date | string
    pet: PetCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: number
    pet_id: number
    name: string
    frequency: string
    next_dose_date?: string | null
    created_at?: Date | string
  }

  export type MedicationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    next_dose_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    next_dose_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateManyInput = {
    id?: number
    pet_id: number
    name: string
    frequency: string
    next_dose_date?: string | null
    created_at?: Date | string
  }

  export type MedicationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    next_dose_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    next_dose_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingScheduleCreateInput = {
    meal_type: string
    time: string
    food_name: string
    amount_g: number
    schedule_date?: string
    status?: string
    pet: PetCreateNestedOneWithoutFeeding_schedulesInput
  }

  export type FeedingScheduleUncheckedCreateInput = {
    id?: number
    pet_id: number
    meal_type: string
    time: string
    food_name: string
    amount_g: number
    schedule_date?: string
    status?: string
  }

  export type FeedingScheduleUpdateInput = {
    meal_type?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    food_name?: StringFieldUpdateOperationsInput | string
    amount_g?: FloatFieldUpdateOperationsInput | number
    schedule_date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pet?: PetUpdateOneRequiredWithoutFeeding_schedulesNestedInput
  }

  export type FeedingScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    meal_type?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    food_name?: StringFieldUpdateOperationsInput | string
    amount_g?: FloatFieldUpdateOperationsInput | number
    schedule_date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeedingScheduleCreateManyInput = {
    id?: number
    pet_id: number
    meal_type: string
    time: string
    food_name: string
    amount_g: number
    schedule_date?: string
    status?: string
  }

  export type FeedingScheduleUpdateManyMutationInput = {
    meal_type?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    food_name?: StringFieldUpdateOperationsInput | string
    amount_g?: FloatFieldUpdateOperationsInput | number
    schedule_date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeedingScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    meal_type?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    food_name?: StringFieldUpdateOperationsInput | string
    amount_g?: FloatFieldUpdateOperationsInput | number
    schedule_date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VetCreateInput = {
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
    user: UserCreateNestedOneWithoutVetsInput
    records?: VetRecordCreateNestedManyWithoutVetInput
  }

  export type VetUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
    records?: VetRecordUncheckedCreateNestedManyWithoutVetInput
  }

  export type VetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVetsNestedInput
    records?: VetRecordUpdateManyWithoutVetNestedInput
  }

  export type VetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    records?: VetRecordUncheckedUpdateManyWithoutVetNestedInput
  }

  export type VetCreateManyInput = {
    id?: number
    user_id: number
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
  }

  export type VetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type VetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type VetRecordCreateInput = {
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
    pet: PetCreateNestedOneWithoutVet_recordsInput
    vet?: VetCreateNestedOneWithoutRecordsInput
  }

  export type VetRecordUncheckedCreateInput = {
    id?: number
    pet_id: number
    vet_id?: number | null
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
  }

  export type VetRecordUpdateInput = {
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    pet?: PetUpdateOneRequiredWithoutVet_recordsNestedInput
    vet?: VetUpdateOneWithoutRecordsNestedInput
  }

  export type VetRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    vet_id?: NullableIntFieldUpdateOperationsInput | number | null
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VetRecordCreateManyInput = {
    id?: number
    pet_id: number
    vet_id?: number | null
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
  }

  export type VetRecordUpdateManyMutationInput = {
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VetRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    vet_id?: NullableIntFieldUpdateOperationsInput | number | null
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarEventCreateInput = {
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
    pet?: PetCreateNestedOneWithoutCalendar_eventsInput
    user: UserCreateNestedOneWithoutEventsInput
  }

  export type CalendarEventUncheckedCreateInput = {
    id?: number
    pet_id?: number | null
    user_id: number
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
  }

  export type CalendarEventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneWithoutCalendar_eventsNestedInput
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateManyInput = {
    id?: number
    pet_id?: number | null
    user_id: number
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
  }

  export type CalendarEventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodAlertCreateInput = {
    message: string
    level?: string
    is_resolved?: boolean
    created_at?: Date | string
    pet: PetCreateNestedOneWithoutFood_alertsInput
  }

  export type FoodAlertUncheckedCreateInput = {
    id?: number
    pet_id: number
    message: string
    level?: string
    is_resolved?: boolean
    created_at?: Date | string
  }

  export type FoodAlertUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutFood_alertsNestedInput
  }

  export type FoodAlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodAlertCreateManyInput = {
    id?: number
    pet_id: number
    message: string
    level?: string
    is_resolved?: boolean
    created_at?: Date | string
  }

  export type FoodAlertUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodAlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type VetListRelationFilter = {
    every?: VetWhereInput
    some?: VetWhereInput
    none?: VetWhereInput
  }

  export type CalendarEventListRelationFilter = {
    every?: CalendarEventWhereInput
    some?: CalendarEventWhereInput
    none?: CalendarEventWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    notify_vet_visits?: SortOrder
    notify_feeding?: SortOrder
    notify_weekly_report?: SortOrder
    notify_medication?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    notify_vet_visits?: SortOrder
    notify_feeding?: SortOrder
    notify_weekly_report?: SortOrder
    notify_medication?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    notify_vet_visits?: SortOrder
    notify_feeding?: SortOrder
    notify_weekly_report?: SortOrder
    notify_medication?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HealthRecordListRelationFilter = {
    every?: HealthRecordWhereInput
    some?: HealthRecordWhereInput
    none?: HealthRecordWhereInput
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type FeedingScheduleListRelationFilter = {
    every?: FeedingScheduleWhereInput
    some?: FeedingScheduleWhereInput
    none?: FeedingScheduleWhereInput
  }

  export type VetRecordListRelationFilter = {
    every?: VetRecordWhereInput
    some?: VetRecordWhereInput
    none?: VetRecordWhereInput
  }

  export type FoodAlertListRelationFilter = {
    every?: FoodAlertWhereInput
    some?: FoodAlertWhereInput
    none?: FoodAlertWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HealthRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedingScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VetRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    microchip?: SortOrder
    bio?: SortOrder
    image_url?: SortOrder
    weight_kg?: SortOrder
    birthday?: SortOrder
    status?: SortOrder
    health_score?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight_kg?: SortOrder
    health_score?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    microchip?: SortOrder
    bio?: SortOrder
    image_url?: SortOrder
    weight_kg?: SortOrder
    birthday?: SortOrder
    status?: SortOrder
    health_score?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    microchip?: SortOrder
    bio?: SortOrder
    image_url?: SortOrder
    weight_kg?: SortOrder
    birthday?: SortOrder
    status?: SortOrder
    health_score?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight_kg?: SortOrder
    health_score?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type HealthRecordCountOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    score?: SortOrder
    weight_kg?: SortOrder
    last_checkup?: SortOrder
    vaccinated?: SortOrder
    conditions?: SortOrder
    recorded_at?: SortOrder
  }

  export type HealthRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    score?: SortOrder
    weight_kg?: SortOrder
  }

  export type HealthRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    score?: SortOrder
    weight_kg?: SortOrder
    last_checkup?: SortOrder
    vaccinated?: SortOrder
    conditions?: SortOrder
    recorded_at?: SortOrder
  }

  export type HealthRecordMinOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    score?: SortOrder
    weight_kg?: SortOrder
    last_checkup?: SortOrder
    vaccinated?: SortOrder
    conditions?: SortOrder
    recorded_at?: SortOrder
  }

  export type HealthRecordSumOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    score?: SortOrder
    weight_kg?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    next_dose_date?: SortOrder
    created_at?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    next_dose_date?: SortOrder
    created_at?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    name?: SortOrder
    frequency?: SortOrder
    next_dose_date?: SortOrder
    created_at?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FeedingScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    meal_type?: SortOrder
    time?: SortOrder
    food_name?: SortOrder
    amount_g?: SortOrder
    schedule_date?: SortOrder
    status?: SortOrder
  }

  export type FeedingScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    amount_g?: SortOrder
  }

  export type FeedingScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    meal_type?: SortOrder
    time?: SortOrder
    food_name?: SortOrder
    amount_g?: SortOrder
    schedule_date?: SortOrder
    status?: SortOrder
  }

  export type FeedingScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    meal_type?: SortOrder
    time?: SortOrder
    food_name?: SortOrder
    amount_g?: SortOrder
    schedule_date?: SortOrder
    status?: SortOrder
  }

  export type FeedingScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    amount_g?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VetCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    clinic?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    specialty?: SortOrder
  }

  export type VetAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type VetMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    clinic?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    specialty?: SortOrder
  }

  export type VetMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    clinic?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    specialty?: SortOrder
  }

  export type VetSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VetNullableScalarRelationFilter = {
    is?: VetWhereInput | null
    isNot?: VetWhereInput | null
  }

  export type VetRecordCountOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    vet_id?: SortOrder
    vet_name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    status?: SortOrder
  }

  export type VetRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    vet_id?: SortOrder
  }

  export type VetRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    vet_id?: SortOrder
    vet_name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    status?: SortOrder
  }

  export type VetRecordMinOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    vet_id?: SortOrder
    vet_name?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    status?: SortOrder
  }

  export type VetRecordSumOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    vet_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PetNullableScalarRelationFilter = {
    is?: PetWhereInput | null
    isNot?: PetWhereInput | null
  }

  export type CalendarEventCountOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    event_date?: SortOrder
    type?: SortOrder
    icon_type?: SortOrder
    created_at?: SortOrder
  }

  export type CalendarEventAvgOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    user_id?: SortOrder
  }

  export type CalendarEventMaxOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    event_date?: SortOrder
    type?: SortOrder
    icon_type?: SortOrder
    created_at?: SortOrder
  }

  export type CalendarEventMinOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    event_date?: SortOrder
    type?: SortOrder
    icon_type?: SortOrder
    created_at?: SortOrder
  }

  export type CalendarEventSumOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    user_id?: SortOrder
  }

  export type FoodAlertCountOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    is_resolved?: SortOrder
    created_at?: SortOrder
  }

  export type FoodAlertAvgOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
  }

  export type FoodAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    is_resolved?: SortOrder
    created_at?: SortOrder
  }

  export type FoodAlertMinOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    is_resolved?: SortOrder
    created_at?: SortOrder
  }

  export type FoodAlertSumOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type PetCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type VetCreateNestedManyWithoutUserInput = {
    create?: XOR<VetCreateWithoutUserInput, VetUncheckedCreateWithoutUserInput> | VetCreateWithoutUserInput[] | VetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VetCreateOrConnectWithoutUserInput | VetCreateOrConnectWithoutUserInput[]
    createMany?: VetCreateManyUserInputEnvelope
    connect?: VetWhereUniqueInput | VetWhereUniqueInput[]
  }

  export type CalendarEventCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type PetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type VetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VetCreateWithoutUserInput, VetUncheckedCreateWithoutUserInput> | VetCreateWithoutUserInput[] | VetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VetCreateOrConnectWithoutUserInput | VetCreateOrConnectWithoutUserInput[]
    createMany?: VetCreateManyUserInputEnvelope
    connect?: VetWhereUniqueInput | VetWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type VetUpdateManyWithoutUserNestedInput = {
    create?: XOR<VetCreateWithoutUserInput, VetUncheckedCreateWithoutUserInput> | VetCreateWithoutUserInput[] | VetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VetCreateOrConnectWithoutUserInput | VetCreateOrConnectWithoutUserInput[]
    upsert?: VetUpsertWithWhereUniqueWithoutUserInput | VetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VetCreateManyUserInputEnvelope
    set?: VetWhereUniqueInput | VetWhereUniqueInput[]
    disconnect?: VetWhereUniqueInput | VetWhereUniqueInput[]
    delete?: VetWhereUniqueInput | VetWhereUniqueInput[]
    connect?: VetWhereUniqueInput | VetWhereUniqueInput[]
    update?: VetUpdateWithWhereUniqueWithoutUserInput | VetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VetUpdateManyWithWhereWithoutUserInput | VetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VetScalarWhereInput | VetScalarWhereInput[]
  }

  export type CalendarEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutUserInput | CalendarEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutUserInput | CalendarEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutUserInput | CalendarEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type VetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VetCreateWithoutUserInput, VetUncheckedCreateWithoutUserInput> | VetCreateWithoutUserInput[] | VetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VetCreateOrConnectWithoutUserInput | VetCreateOrConnectWithoutUserInput[]
    upsert?: VetUpsertWithWhereUniqueWithoutUserInput | VetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VetCreateManyUserInputEnvelope
    set?: VetWhereUniqueInput | VetWhereUniqueInput[]
    disconnect?: VetWhereUniqueInput | VetWhereUniqueInput[]
    delete?: VetWhereUniqueInput | VetWhereUniqueInput[]
    connect?: VetWhereUniqueInput | VetWhereUniqueInput[]
    update?: VetUpdateWithWhereUniqueWithoutUserInput | VetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VetUpdateManyWithWhereWithoutUserInput | VetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VetScalarWhereInput | VetScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutUserInput | CalendarEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutUserInput | CalendarEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutUserInput | CalendarEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutPetsInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    connect?: UserWhereUniqueInput
  }

  export type HealthRecordCreateNestedManyWithoutPetInput = {
    create?: XOR<HealthRecordCreateWithoutPetInput, HealthRecordUncheckedCreateWithoutPetInput> | HealthRecordCreateWithoutPetInput[] | HealthRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPetInput | HealthRecordCreateOrConnectWithoutPetInput[]
    createMany?: HealthRecordCreateManyPetInputEnvelope
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
  }

  export type MedicationCreateNestedManyWithoutPetInput = {
    create?: XOR<MedicationCreateWithoutPetInput, MedicationUncheckedCreateWithoutPetInput> | MedicationCreateWithoutPetInput[] | MedicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPetInput | MedicationCreateOrConnectWithoutPetInput[]
    createMany?: MedicationCreateManyPetInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type FeedingScheduleCreateNestedManyWithoutPetInput = {
    create?: XOR<FeedingScheduleCreateWithoutPetInput, FeedingScheduleUncheckedCreateWithoutPetInput> | FeedingScheduleCreateWithoutPetInput[] | FeedingScheduleUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FeedingScheduleCreateOrConnectWithoutPetInput | FeedingScheduleCreateOrConnectWithoutPetInput[]
    createMany?: FeedingScheduleCreateManyPetInputEnvelope
    connect?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
  }

  export type VetRecordCreateNestedManyWithoutPetInput = {
    create?: XOR<VetRecordCreateWithoutPetInput, VetRecordUncheckedCreateWithoutPetInput> | VetRecordCreateWithoutPetInput[] | VetRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutPetInput | VetRecordCreateOrConnectWithoutPetInput[]
    createMany?: VetRecordCreateManyPetInputEnvelope
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
  }

  export type CalendarEventCreateNestedManyWithoutPetInput = {
    create?: XOR<CalendarEventCreateWithoutPetInput, CalendarEventUncheckedCreateWithoutPetInput> | CalendarEventCreateWithoutPetInput[] | CalendarEventUncheckedCreateWithoutPetInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPetInput | CalendarEventCreateOrConnectWithoutPetInput[]
    createMany?: CalendarEventCreateManyPetInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type FoodAlertCreateNestedManyWithoutPetInput = {
    create?: XOR<FoodAlertCreateWithoutPetInput, FoodAlertUncheckedCreateWithoutPetInput> | FoodAlertCreateWithoutPetInput[] | FoodAlertUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FoodAlertCreateOrConnectWithoutPetInput | FoodAlertCreateOrConnectWithoutPetInput[]
    createMany?: FoodAlertCreateManyPetInputEnvelope
    connect?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
  }

  export type HealthRecordUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<HealthRecordCreateWithoutPetInput, HealthRecordUncheckedCreateWithoutPetInput> | HealthRecordCreateWithoutPetInput[] | HealthRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPetInput | HealthRecordCreateOrConnectWithoutPetInput[]
    createMany?: HealthRecordCreateManyPetInputEnvelope
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<MedicationCreateWithoutPetInput, MedicationUncheckedCreateWithoutPetInput> | MedicationCreateWithoutPetInput[] | MedicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPetInput | MedicationCreateOrConnectWithoutPetInput[]
    createMany?: MedicationCreateManyPetInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type FeedingScheduleUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<FeedingScheduleCreateWithoutPetInput, FeedingScheduleUncheckedCreateWithoutPetInput> | FeedingScheduleCreateWithoutPetInput[] | FeedingScheduleUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FeedingScheduleCreateOrConnectWithoutPetInput | FeedingScheduleCreateOrConnectWithoutPetInput[]
    createMany?: FeedingScheduleCreateManyPetInputEnvelope
    connect?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
  }

  export type VetRecordUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<VetRecordCreateWithoutPetInput, VetRecordUncheckedCreateWithoutPetInput> | VetRecordCreateWithoutPetInput[] | VetRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutPetInput | VetRecordCreateOrConnectWithoutPetInput[]
    createMany?: VetRecordCreateManyPetInputEnvelope
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<CalendarEventCreateWithoutPetInput, CalendarEventUncheckedCreateWithoutPetInput> | CalendarEventCreateWithoutPetInput[] | CalendarEventUncheckedCreateWithoutPetInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPetInput | CalendarEventCreateOrConnectWithoutPetInput[]
    createMany?: CalendarEventCreateManyPetInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type FoodAlertUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<FoodAlertCreateWithoutPetInput, FoodAlertUncheckedCreateWithoutPetInput> | FoodAlertCreateWithoutPetInput[] | FoodAlertUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FoodAlertCreateOrConnectWithoutPetInput | FoodAlertCreateOrConnectWithoutPetInput[]
    createMany?: FoodAlertCreateManyPetInputEnvelope
    connect?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    upsert?: UserUpsertWithoutPetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetsInput, UserUpdateWithoutPetsInput>, UserUncheckedUpdateWithoutPetsInput>
  }

  export type HealthRecordUpdateManyWithoutPetNestedInput = {
    create?: XOR<HealthRecordCreateWithoutPetInput, HealthRecordUncheckedCreateWithoutPetInput> | HealthRecordCreateWithoutPetInput[] | HealthRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPetInput | HealthRecordCreateOrConnectWithoutPetInput[]
    upsert?: HealthRecordUpsertWithWhereUniqueWithoutPetInput | HealthRecordUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: HealthRecordCreateManyPetInputEnvelope
    set?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    disconnect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    delete?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    update?: HealthRecordUpdateWithWhereUniqueWithoutPetInput | HealthRecordUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: HealthRecordUpdateManyWithWhereWithoutPetInput | HealthRecordUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
  }

  export type MedicationUpdateManyWithoutPetNestedInput = {
    create?: XOR<MedicationCreateWithoutPetInput, MedicationUncheckedCreateWithoutPetInput> | MedicationCreateWithoutPetInput[] | MedicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPetInput | MedicationCreateOrConnectWithoutPetInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutPetInput | MedicationUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: MedicationCreateManyPetInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutPetInput | MedicationUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutPetInput | MedicationUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type FeedingScheduleUpdateManyWithoutPetNestedInput = {
    create?: XOR<FeedingScheduleCreateWithoutPetInput, FeedingScheduleUncheckedCreateWithoutPetInput> | FeedingScheduleCreateWithoutPetInput[] | FeedingScheduleUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FeedingScheduleCreateOrConnectWithoutPetInput | FeedingScheduleCreateOrConnectWithoutPetInput[]
    upsert?: FeedingScheduleUpsertWithWhereUniqueWithoutPetInput | FeedingScheduleUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: FeedingScheduleCreateManyPetInputEnvelope
    set?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    disconnect?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    delete?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    connect?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    update?: FeedingScheduleUpdateWithWhereUniqueWithoutPetInput | FeedingScheduleUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: FeedingScheduleUpdateManyWithWhereWithoutPetInput | FeedingScheduleUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: FeedingScheduleScalarWhereInput | FeedingScheduleScalarWhereInput[]
  }

  export type VetRecordUpdateManyWithoutPetNestedInput = {
    create?: XOR<VetRecordCreateWithoutPetInput, VetRecordUncheckedCreateWithoutPetInput> | VetRecordCreateWithoutPetInput[] | VetRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutPetInput | VetRecordCreateOrConnectWithoutPetInput[]
    upsert?: VetRecordUpsertWithWhereUniqueWithoutPetInput | VetRecordUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: VetRecordCreateManyPetInputEnvelope
    set?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    disconnect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    delete?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    update?: VetRecordUpdateWithWhereUniqueWithoutPetInput | VetRecordUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: VetRecordUpdateManyWithWhereWithoutPetInput | VetRecordUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: VetRecordScalarWhereInput | VetRecordScalarWhereInput[]
  }

  export type CalendarEventUpdateManyWithoutPetNestedInput = {
    create?: XOR<CalendarEventCreateWithoutPetInput, CalendarEventUncheckedCreateWithoutPetInput> | CalendarEventCreateWithoutPetInput[] | CalendarEventUncheckedCreateWithoutPetInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPetInput | CalendarEventCreateOrConnectWithoutPetInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutPetInput | CalendarEventUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: CalendarEventCreateManyPetInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutPetInput | CalendarEventUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutPetInput | CalendarEventUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type FoodAlertUpdateManyWithoutPetNestedInput = {
    create?: XOR<FoodAlertCreateWithoutPetInput, FoodAlertUncheckedCreateWithoutPetInput> | FoodAlertCreateWithoutPetInput[] | FoodAlertUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FoodAlertCreateOrConnectWithoutPetInput | FoodAlertCreateOrConnectWithoutPetInput[]
    upsert?: FoodAlertUpsertWithWhereUniqueWithoutPetInput | FoodAlertUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: FoodAlertCreateManyPetInputEnvelope
    set?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    disconnect?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    delete?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    connect?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    update?: FoodAlertUpdateWithWhereUniqueWithoutPetInput | FoodAlertUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: FoodAlertUpdateManyWithWhereWithoutPetInput | FoodAlertUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: FoodAlertScalarWhereInput | FoodAlertScalarWhereInput[]
  }

  export type HealthRecordUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<HealthRecordCreateWithoutPetInput, HealthRecordUncheckedCreateWithoutPetInput> | HealthRecordCreateWithoutPetInput[] | HealthRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: HealthRecordCreateOrConnectWithoutPetInput | HealthRecordCreateOrConnectWithoutPetInput[]
    upsert?: HealthRecordUpsertWithWhereUniqueWithoutPetInput | HealthRecordUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: HealthRecordCreateManyPetInputEnvelope
    set?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    disconnect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    delete?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    connect?: HealthRecordWhereUniqueInput | HealthRecordWhereUniqueInput[]
    update?: HealthRecordUpdateWithWhereUniqueWithoutPetInput | HealthRecordUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: HealthRecordUpdateManyWithWhereWithoutPetInput | HealthRecordUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<MedicationCreateWithoutPetInput, MedicationUncheckedCreateWithoutPetInput> | MedicationCreateWithoutPetInput[] | MedicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPetInput | MedicationCreateOrConnectWithoutPetInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutPetInput | MedicationUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: MedicationCreateManyPetInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutPetInput | MedicationUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutPetInput | MedicationUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<FeedingScheduleCreateWithoutPetInput, FeedingScheduleUncheckedCreateWithoutPetInput> | FeedingScheduleCreateWithoutPetInput[] | FeedingScheduleUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FeedingScheduleCreateOrConnectWithoutPetInput | FeedingScheduleCreateOrConnectWithoutPetInput[]
    upsert?: FeedingScheduleUpsertWithWhereUniqueWithoutPetInput | FeedingScheduleUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: FeedingScheduleCreateManyPetInputEnvelope
    set?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    disconnect?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    delete?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    connect?: FeedingScheduleWhereUniqueInput | FeedingScheduleWhereUniqueInput[]
    update?: FeedingScheduleUpdateWithWhereUniqueWithoutPetInput | FeedingScheduleUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: FeedingScheduleUpdateManyWithWhereWithoutPetInput | FeedingScheduleUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: FeedingScheduleScalarWhereInput | FeedingScheduleScalarWhereInput[]
  }

  export type VetRecordUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<VetRecordCreateWithoutPetInput, VetRecordUncheckedCreateWithoutPetInput> | VetRecordCreateWithoutPetInput[] | VetRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutPetInput | VetRecordCreateOrConnectWithoutPetInput[]
    upsert?: VetRecordUpsertWithWhereUniqueWithoutPetInput | VetRecordUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: VetRecordCreateManyPetInputEnvelope
    set?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    disconnect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    delete?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    update?: VetRecordUpdateWithWhereUniqueWithoutPetInput | VetRecordUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: VetRecordUpdateManyWithWhereWithoutPetInput | VetRecordUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: VetRecordScalarWhereInput | VetRecordScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<CalendarEventCreateWithoutPetInput, CalendarEventUncheckedCreateWithoutPetInput> | CalendarEventCreateWithoutPetInput[] | CalendarEventUncheckedCreateWithoutPetInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPetInput | CalendarEventCreateOrConnectWithoutPetInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutPetInput | CalendarEventUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: CalendarEventCreateManyPetInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutPetInput | CalendarEventUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutPetInput | CalendarEventUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type FoodAlertUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<FoodAlertCreateWithoutPetInput, FoodAlertUncheckedCreateWithoutPetInput> | FoodAlertCreateWithoutPetInput[] | FoodAlertUncheckedCreateWithoutPetInput[]
    connectOrCreate?: FoodAlertCreateOrConnectWithoutPetInput | FoodAlertCreateOrConnectWithoutPetInput[]
    upsert?: FoodAlertUpsertWithWhereUniqueWithoutPetInput | FoodAlertUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: FoodAlertCreateManyPetInputEnvelope
    set?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    disconnect?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    delete?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    connect?: FoodAlertWhereUniqueInput | FoodAlertWhereUniqueInput[]
    update?: FoodAlertUpdateWithWhereUniqueWithoutPetInput | FoodAlertUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: FoodAlertUpdateManyWithWhereWithoutPetInput | FoodAlertUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: FoodAlertScalarWhereInput | FoodAlertScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutHealth_recordsInput = {
    create?: XOR<PetCreateWithoutHealth_recordsInput, PetUncheckedCreateWithoutHealth_recordsInput>
    connectOrCreate?: PetCreateOrConnectWithoutHealth_recordsInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutHealth_recordsNestedInput = {
    create?: XOR<PetCreateWithoutHealth_recordsInput, PetUncheckedCreateWithoutHealth_recordsInput>
    connectOrCreate?: PetCreateOrConnectWithoutHealth_recordsInput
    upsert?: PetUpsertWithoutHealth_recordsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutHealth_recordsInput, PetUpdateWithoutHealth_recordsInput>, PetUncheckedUpdateWithoutHealth_recordsInput>
  }

  export type PetCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<PetCreateWithoutMedicationsInput, PetUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PetCreateOrConnectWithoutMedicationsInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<PetCreateWithoutMedicationsInput, PetUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PetCreateOrConnectWithoutMedicationsInput
    upsert?: PetUpsertWithoutMedicationsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutMedicationsInput, PetUpdateWithoutMedicationsInput>, PetUncheckedUpdateWithoutMedicationsInput>
  }

  export type PetCreateNestedOneWithoutFeeding_schedulesInput = {
    create?: XOR<PetCreateWithoutFeeding_schedulesInput, PetUncheckedCreateWithoutFeeding_schedulesInput>
    connectOrCreate?: PetCreateOrConnectWithoutFeeding_schedulesInput
    connect?: PetWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetUpdateOneRequiredWithoutFeeding_schedulesNestedInput = {
    create?: XOR<PetCreateWithoutFeeding_schedulesInput, PetUncheckedCreateWithoutFeeding_schedulesInput>
    connectOrCreate?: PetCreateOrConnectWithoutFeeding_schedulesInput
    upsert?: PetUpsertWithoutFeeding_schedulesInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutFeeding_schedulesInput, PetUpdateWithoutFeeding_schedulesInput>, PetUncheckedUpdateWithoutFeeding_schedulesInput>
  }

  export type UserCreateNestedOneWithoutVetsInput = {
    create?: XOR<UserCreateWithoutVetsInput, UserUncheckedCreateWithoutVetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVetsInput
    connect?: UserWhereUniqueInput
  }

  export type VetRecordCreateNestedManyWithoutVetInput = {
    create?: XOR<VetRecordCreateWithoutVetInput, VetRecordUncheckedCreateWithoutVetInput> | VetRecordCreateWithoutVetInput[] | VetRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutVetInput | VetRecordCreateOrConnectWithoutVetInput[]
    createMany?: VetRecordCreateManyVetInputEnvelope
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
  }

  export type VetRecordUncheckedCreateNestedManyWithoutVetInput = {
    create?: XOR<VetRecordCreateWithoutVetInput, VetRecordUncheckedCreateWithoutVetInput> | VetRecordCreateWithoutVetInput[] | VetRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutVetInput | VetRecordCreateOrConnectWithoutVetInput[]
    createMany?: VetRecordCreateManyVetInputEnvelope
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVetsNestedInput = {
    create?: XOR<UserCreateWithoutVetsInput, UserUncheckedCreateWithoutVetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVetsInput
    upsert?: UserUpsertWithoutVetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVetsInput, UserUpdateWithoutVetsInput>, UserUncheckedUpdateWithoutVetsInput>
  }

  export type VetRecordUpdateManyWithoutVetNestedInput = {
    create?: XOR<VetRecordCreateWithoutVetInput, VetRecordUncheckedCreateWithoutVetInput> | VetRecordCreateWithoutVetInput[] | VetRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutVetInput | VetRecordCreateOrConnectWithoutVetInput[]
    upsert?: VetRecordUpsertWithWhereUniqueWithoutVetInput | VetRecordUpsertWithWhereUniqueWithoutVetInput[]
    createMany?: VetRecordCreateManyVetInputEnvelope
    set?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    disconnect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    delete?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    update?: VetRecordUpdateWithWhereUniqueWithoutVetInput | VetRecordUpdateWithWhereUniqueWithoutVetInput[]
    updateMany?: VetRecordUpdateManyWithWhereWithoutVetInput | VetRecordUpdateManyWithWhereWithoutVetInput[]
    deleteMany?: VetRecordScalarWhereInput | VetRecordScalarWhereInput[]
  }

  export type VetRecordUncheckedUpdateManyWithoutVetNestedInput = {
    create?: XOR<VetRecordCreateWithoutVetInput, VetRecordUncheckedCreateWithoutVetInput> | VetRecordCreateWithoutVetInput[] | VetRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: VetRecordCreateOrConnectWithoutVetInput | VetRecordCreateOrConnectWithoutVetInput[]
    upsert?: VetRecordUpsertWithWhereUniqueWithoutVetInput | VetRecordUpsertWithWhereUniqueWithoutVetInput[]
    createMany?: VetRecordCreateManyVetInputEnvelope
    set?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    disconnect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    delete?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    connect?: VetRecordWhereUniqueInput | VetRecordWhereUniqueInput[]
    update?: VetRecordUpdateWithWhereUniqueWithoutVetInput | VetRecordUpdateWithWhereUniqueWithoutVetInput[]
    updateMany?: VetRecordUpdateManyWithWhereWithoutVetInput | VetRecordUpdateManyWithWhereWithoutVetInput[]
    deleteMany?: VetRecordScalarWhereInput | VetRecordScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutVet_recordsInput = {
    create?: XOR<PetCreateWithoutVet_recordsInput, PetUncheckedCreateWithoutVet_recordsInput>
    connectOrCreate?: PetCreateOrConnectWithoutVet_recordsInput
    connect?: PetWhereUniqueInput
  }

  export type VetCreateNestedOneWithoutRecordsInput = {
    create?: XOR<VetCreateWithoutRecordsInput, VetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: VetCreateOrConnectWithoutRecordsInput
    connect?: VetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutVet_recordsNestedInput = {
    create?: XOR<PetCreateWithoutVet_recordsInput, PetUncheckedCreateWithoutVet_recordsInput>
    connectOrCreate?: PetCreateOrConnectWithoutVet_recordsInput
    upsert?: PetUpsertWithoutVet_recordsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutVet_recordsInput, PetUpdateWithoutVet_recordsInput>, PetUncheckedUpdateWithoutVet_recordsInput>
  }

  export type VetUpdateOneWithoutRecordsNestedInput = {
    create?: XOR<VetCreateWithoutRecordsInput, VetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: VetCreateOrConnectWithoutRecordsInput
    upsert?: VetUpsertWithoutRecordsInput
    disconnect?: VetWhereInput | boolean
    delete?: VetWhereInput | boolean
    connect?: VetWhereUniqueInput
    update?: XOR<XOR<VetUpdateToOneWithWhereWithoutRecordsInput, VetUpdateWithoutRecordsInput>, VetUncheckedUpdateWithoutRecordsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetCreateNestedOneWithoutCalendar_eventsInput = {
    create?: XOR<PetCreateWithoutCalendar_eventsInput, PetUncheckedCreateWithoutCalendar_eventsInput>
    connectOrCreate?: PetCreateOrConnectWithoutCalendar_eventsInput
    connect?: PetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type PetUpdateOneWithoutCalendar_eventsNestedInput = {
    create?: XOR<PetCreateWithoutCalendar_eventsInput, PetUncheckedCreateWithoutCalendar_eventsInput>
    connectOrCreate?: PetCreateOrConnectWithoutCalendar_eventsInput
    upsert?: PetUpsertWithoutCalendar_eventsInput
    disconnect?: PetWhereInput | boolean
    delete?: PetWhereInput | boolean
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutCalendar_eventsInput, PetUpdateWithoutCalendar_eventsInput>, PetUncheckedUpdateWithoutCalendar_eventsInput>
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type PetCreateNestedOneWithoutFood_alertsInput = {
    create?: XOR<PetCreateWithoutFood_alertsInput, PetUncheckedCreateWithoutFood_alertsInput>
    connectOrCreate?: PetCreateOrConnectWithoutFood_alertsInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutFood_alertsNestedInput = {
    create?: XOR<PetCreateWithoutFood_alertsInput, PetUncheckedCreateWithoutFood_alertsInput>
    connectOrCreate?: PetCreateOrConnectWithoutFood_alertsInput
    upsert?: PetUpsertWithoutFood_alertsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutFood_alertsInput, PetUpdateWithoutFood_alertsInput>, PetUncheckedUpdateWithoutFood_alertsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserSettingsCreateWithoutUserInput = {
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: number
    notify_vet_visits?: boolean
    notify_feeding?: boolean
    notify_weekly_report?: boolean
    notify_medication?: boolean
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type PetCreateWithoutUserInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordCreateNestedManyWithoutPetInput
    medications?: MedicationCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleCreateNestedManyWithoutPetInput
    vet_records?: VetRecordCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordUncheckedCreateNestedManyWithoutPetInput
    medications?: MedicationUncheckedCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleUncheckedCreateNestedManyWithoutPetInput
    vet_records?: VetRecordUncheckedCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventUncheckedCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutUserInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetCreateManyUserInputEnvelope = {
    data: PetCreateManyUserInput | PetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VetCreateWithoutUserInput = {
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
    records?: VetRecordCreateNestedManyWithoutVetInput
  }

  export type VetUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
    records?: VetRecordUncheckedCreateNestedManyWithoutVetInput
  }

  export type VetCreateOrConnectWithoutUserInput = {
    where: VetWhereUniqueInput
    create: XOR<VetCreateWithoutUserInput, VetUncheckedCreateWithoutUserInput>
  }

  export type VetCreateManyUserInputEnvelope = {
    data: VetCreateManyUserInput | VetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CalendarEventCreateWithoutUserInput = {
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
    pet?: PetCreateNestedOneWithoutCalendar_eventsInput
  }

  export type CalendarEventUncheckedCreateWithoutUserInput = {
    id?: number
    pet_id?: number | null
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
  }

  export type CalendarEventCreateOrConnectWithoutUserInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput>
  }

  export type CalendarEventCreateManyUserInputEnvelope = {
    data: CalendarEventCreateManyUserInput | CalendarEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    notify_vet_visits?: BoolFieldUpdateOperationsInput | boolean
    notify_feeding?: BoolFieldUpdateOperationsInput | boolean
    notify_weekly_report?: BoolFieldUpdateOperationsInput | boolean
    notify_medication?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    notify_vet_visits?: BoolFieldUpdateOperationsInput | boolean
    notify_feeding?: BoolFieldUpdateOperationsInput | boolean
    notify_weekly_report?: BoolFieldUpdateOperationsInput | boolean
    notify_medication?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PetUpsertWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetUpdateWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
  }

  export type PetUpdateManyWithWhereWithoutUserInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutUserInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: IntFilter<"Pet"> | number
    user_id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    gender?: StringNullableFilter<"Pet"> | string | null
    color?: StringNullableFilter<"Pet"> | string | null
    microchip?: StringNullableFilter<"Pet"> | string | null
    bio?: StringNullableFilter<"Pet"> | string | null
    image_url?: StringNullableFilter<"Pet"> | string | null
    weight_kg?: FloatNullableFilter<"Pet"> | number | null
    birthday?: StringNullableFilter<"Pet"> | string | null
    status?: StringFilter<"Pet"> | string
    health_score?: IntFilter<"Pet"> | number
    emoji?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    updated_at?: DateTimeFilter<"Pet"> | Date | string
  }

  export type VetUpsertWithWhereUniqueWithoutUserInput = {
    where: VetWhereUniqueInput
    update: XOR<VetUpdateWithoutUserInput, VetUncheckedUpdateWithoutUserInput>
    create: XOR<VetCreateWithoutUserInput, VetUncheckedCreateWithoutUserInput>
  }

  export type VetUpdateWithWhereUniqueWithoutUserInput = {
    where: VetWhereUniqueInput
    data: XOR<VetUpdateWithoutUserInput, VetUncheckedUpdateWithoutUserInput>
  }

  export type VetUpdateManyWithWhereWithoutUserInput = {
    where: VetScalarWhereInput
    data: XOR<VetUpdateManyMutationInput, VetUncheckedUpdateManyWithoutUserInput>
  }

  export type VetScalarWhereInput = {
    AND?: VetScalarWhereInput | VetScalarWhereInput[]
    OR?: VetScalarWhereInput[]
    NOT?: VetScalarWhereInput | VetScalarWhereInput[]
    id?: IntFilter<"Vet"> | number
    user_id?: IntFilter<"Vet"> | number
    name?: StringFilter<"Vet"> | string
    clinic?: StringNullableFilter<"Vet"> | string | null
    phone?: StringNullableFilter<"Vet"> | string | null
    address?: StringNullableFilter<"Vet"> | string | null
    specialty?: StringFilter<"Vet"> | string
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutUserInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutUserInput, CalendarEventUncheckedUpdateWithoutUserInput>
    create: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutUserInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutUserInput, CalendarEventUncheckedUpdateWithoutUserInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutUserInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutUserInput>
  }

  export type CalendarEventScalarWhereInput = {
    AND?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
    OR?: CalendarEventScalarWhereInput[]
    NOT?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
    id?: IntFilter<"CalendarEvent"> | number
    pet_id?: IntNullableFilter<"CalendarEvent"> | number | null
    user_id?: IntFilter<"CalendarEvent"> | number
    title?: StringFilter<"CalendarEvent"> | string
    event_date?: StringFilter<"CalendarEvent"> | string
    type?: StringFilter<"CalendarEvent"> | string
    icon_type?: StringFilter<"CalendarEvent"> | string
    created_at?: DateTimeFilter<"CalendarEvent"> | Date | string
  }

  export type UserCreateWithoutSettingsInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    pets?: PetCreateNestedManyWithoutUserInput
    vets?: VetCreateNestedManyWithoutUserInput
    events?: CalendarEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    vets?: VetUncheckedCreateNestedManyWithoutUserInput
    events?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutUserNestedInput
    vets?: VetUpdateManyWithoutUserNestedInput
    events?: CalendarEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    vets?: VetUncheckedUpdateManyWithoutUserNestedInput
    events?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPetsInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    vets?: VetCreateNestedManyWithoutUserInput
    events?: CalendarEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPetsInput = {
    id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    vets?: VetUncheckedCreateNestedManyWithoutUserInput
    events?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
  }

  export type HealthRecordCreateWithoutPetInput = {
    score: number
    weight_kg?: number | null
    last_checkup?: string | null
    vaccinated?: boolean
    conditions?: string
    recorded_at?: Date | string
  }

  export type HealthRecordUncheckedCreateWithoutPetInput = {
    id?: number
    score: number
    weight_kg?: number | null
    last_checkup?: string | null
    vaccinated?: boolean
    conditions?: string
    recorded_at?: Date | string
  }

  export type HealthRecordCreateOrConnectWithoutPetInput = {
    where: HealthRecordWhereUniqueInput
    create: XOR<HealthRecordCreateWithoutPetInput, HealthRecordUncheckedCreateWithoutPetInput>
  }

  export type HealthRecordCreateManyPetInputEnvelope = {
    data: HealthRecordCreateManyPetInput | HealthRecordCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type MedicationCreateWithoutPetInput = {
    name: string
    frequency: string
    next_dose_date?: string | null
    created_at?: Date | string
  }

  export type MedicationUncheckedCreateWithoutPetInput = {
    id?: number
    name: string
    frequency: string
    next_dose_date?: string | null
    created_at?: Date | string
  }

  export type MedicationCreateOrConnectWithoutPetInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutPetInput, MedicationUncheckedCreateWithoutPetInput>
  }

  export type MedicationCreateManyPetInputEnvelope = {
    data: MedicationCreateManyPetInput | MedicationCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type FeedingScheduleCreateWithoutPetInput = {
    meal_type: string
    time: string
    food_name: string
    amount_g: number
    schedule_date?: string
    status?: string
  }

  export type FeedingScheduleUncheckedCreateWithoutPetInput = {
    id?: number
    meal_type: string
    time: string
    food_name: string
    amount_g: number
    schedule_date?: string
    status?: string
  }

  export type FeedingScheduleCreateOrConnectWithoutPetInput = {
    where: FeedingScheduleWhereUniqueInput
    create: XOR<FeedingScheduleCreateWithoutPetInput, FeedingScheduleUncheckedCreateWithoutPetInput>
  }

  export type FeedingScheduleCreateManyPetInputEnvelope = {
    data: FeedingScheduleCreateManyPetInput | FeedingScheduleCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type VetRecordCreateWithoutPetInput = {
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
    vet?: VetCreateNestedOneWithoutRecordsInput
  }

  export type VetRecordUncheckedCreateWithoutPetInput = {
    id?: number
    vet_id?: number | null
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
  }

  export type VetRecordCreateOrConnectWithoutPetInput = {
    where: VetRecordWhereUniqueInput
    create: XOR<VetRecordCreateWithoutPetInput, VetRecordUncheckedCreateWithoutPetInput>
  }

  export type VetRecordCreateManyPetInputEnvelope = {
    data: VetRecordCreateManyPetInput | VetRecordCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type CalendarEventCreateWithoutPetInput = {
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
  }

  export type CalendarEventUncheckedCreateWithoutPetInput = {
    id?: number
    user_id: number
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
  }

  export type CalendarEventCreateOrConnectWithoutPetInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutPetInput, CalendarEventUncheckedCreateWithoutPetInput>
  }

  export type CalendarEventCreateManyPetInputEnvelope = {
    data: CalendarEventCreateManyPetInput | CalendarEventCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type FoodAlertCreateWithoutPetInput = {
    message: string
    level?: string
    is_resolved?: boolean
    created_at?: Date | string
  }

  export type FoodAlertUncheckedCreateWithoutPetInput = {
    id?: number
    message: string
    level?: string
    is_resolved?: boolean
    created_at?: Date | string
  }

  export type FoodAlertCreateOrConnectWithoutPetInput = {
    where: FoodAlertWhereUniqueInput
    create: XOR<FoodAlertCreateWithoutPetInput, FoodAlertUncheckedCreateWithoutPetInput>
  }

  export type FoodAlertCreateManyPetInputEnvelope = {
    data: FoodAlertCreateManyPetInput | FoodAlertCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPetsInput = {
    update: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
  }

  export type UserUpdateWithoutPetsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    vets?: VetUpdateManyWithoutUserNestedInput
    events?: CalendarEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    vets?: VetUncheckedUpdateManyWithoutUserNestedInput
    events?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HealthRecordUpsertWithWhereUniqueWithoutPetInput = {
    where: HealthRecordWhereUniqueInput
    update: XOR<HealthRecordUpdateWithoutPetInput, HealthRecordUncheckedUpdateWithoutPetInput>
    create: XOR<HealthRecordCreateWithoutPetInput, HealthRecordUncheckedCreateWithoutPetInput>
  }

  export type HealthRecordUpdateWithWhereUniqueWithoutPetInput = {
    where: HealthRecordWhereUniqueInput
    data: XOR<HealthRecordUpdateWithoutPetInput, HealthRecordUncheckedUpdateWithoutPetInput>
  }

  export type HealthRecordUpdateManyWithWhereWithoutPetInput = {
    where: HealthRecordScalarWhereInput
    data: XOR<HealthRecordUpdateManyMutationInput, HealthRecordUncheckedUpdateManyWithoutPetInput>
  }

  export type HealthRecordScalarWhereInput = {
    AND?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
    OR?: HealthRecordScalarWhereInput[]
    NOT?: HealthRecordScalarWhereInput | HealthRecordScalarWhereInput[]
    id?: IntFilter<"HealthRecord"> | number
    pet_id?: IntFilter<"HealthRecord"> | number
    score?: IntFilter<"HealthRecord"> | number
    weight_kg?: FloatNullableFilter<"HealthRecord"> | number | null
    last_checkup?: StringNullableFilter<"HealthRecord"> | string | null
    vaccinated?: BoolFilter<"HealthRecord"> | boolean
    conditions?: StringFilter<"HealthRecord"> | string
    recorded_at?: DateTimeFilter<"HealthRecord"> | Date | string
  }

  export type MedicationUpsertWithWhereUniqueWithoutPetInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutPetInput, MedicationUncheckedUpdateWithoutPetInput>
    create: XOR<MedicationCreateWithoutPetInput, MedicationUncheckedCreateWithoutPetInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutPetInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutPetInput, MedicationUncheckedUpdateWithoutPetInput>
  }

  export type MedicationUpdateManyWithWhereWithoutPetInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutPetInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: IntFilter<"Medication"> | number
    pet_id?: IntFilter<"Medication"> | number
    name?: StringFilter<"Medication"> | string
    frequency?: StringFilter<"Medication"> | string
    next_dose_date?: StringNullableFilter<"Medication"> | string | null
    created_at?: DateTimeFilter<"Medication"> | Date | string
  }

  export type FeedingScheduleUpsertWithWhereUniqueWithoutPetInput = {
    where: FeedingScheduleWhereUniqueInput
    update: XOR<FeedingScheduleUpdateWithoutPetInput, FeedingScheduleUncheckedUpdateWithoutPetInput>
    create: XOR<FeedingScheduleCreateWithoutPetInput, FeedingScheduleUncheckedCreateWithoutPetInput>
  }

  export type FeedingScheduleUpdateWithWhereUniqueWithoutPetInput = {
    where: FeedingScheduleWhereUniqueInput
    data: XOR<FeedingScheduleUpdateWithoutPetInput, FeedingScheduleUncheckedUpdateWithoutPetInput>
  }

  export type FeedingScheduleUpdateManyWithWhereWithoutPetInput = {
    where: FeedingScheduleScalarWhereInput
    data: XOR<FeedingScheduleUpdateManyMutationInput, FeedingScheduleUncheckedUpdateManyWithoutPetInput>
  }

  export type FeedingScheduleScalarWhereInput = {
    AND?: FeedingScheduleScalarWhereInput | FeedingScheduleScalarWhereInput[]
    OR?: FeedingScheduleScalarWhereInput[]
    NOT?: FeedingScheduleScalarWhereInput | FeedingScheduleScalarWhereInput[]
    id?: IntFilter<"FeedingSchedule"> | number
    pet_id?: IntFilter<"FeedingSchedule"> | number
    meal_type?: StringFilter<"FeedingSchedule"> | string
    time?: StringFilter<"FeedingSchedule"> | string
    food_name?: StringFilter<"FeedingSchedule"> | string
    amount_g?: FloatFilter<"FeedingSchedule"> | number
    schedule_date?: StringFilter<"FeedingSchedule"> | string
    status?: StringFilter<"FeedingSchedule"> | string
  }

  export type VetRecordUpsertWithWhereUniqueWithoutPetInput = {
    where: VetRecordWhereUniqueInput
    update: XOR<VetRecordUpdateWithoutPetInput, VetRecordUncheckedUpdateWithoutPetInput>
    create: XOR<VetRecordCreateWithoutPetInput, VetRecordUncheckedCreateWithoutPetInput>
  }

  export type VetRecordUpdateWithWhereUniqueWithoutPetInput = {
    where: VetRecordWhereUniqueInput
    data: XOR<VetRecordUpdateWithoutPetInput, VetRecordUncheckedUpdateWithoutPetInput>
  }

  export type VetRecordUpdateManyWithWhereWithoutPetInput = {
    where: VetRecordScalarWhereInput
    data: XOR<VetRecordUpdateManyMutationInput, VetRecordUncheckedUpdateManyWithoutPetInput>
  }

  export type VetRecordScalarWhereInput = {
    AND?: VetRecordScalarWhereInput | VetRecordScalarWhereInput[]
    OR?: VetRecordScalarWhereInput[]
    NOT?: VetRecordScalarWhereInput | VetRecordScalarWhereInput[]
    id?: IntFilter<"VetRecord"> | number
    pet_id?: IntFilter<"VetRecord"> | number
    vet_id?: IntNullableFilter<"VetRecord"> | number | null
    vet_name?: StringNullableFilter<"VetRecord"> | string | null
    date?: StringFilter<"VetRecord"> | string
    type?: StringFilter<"VetRecord"> | string
    notes?: StringNullableFilter<"VetRecord"> | string | null
    status?: StringFilter<"VetRecord"> | string
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutPetInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutPetInput, CalendarEventUncheckedUpdateWithoutPetInput>
    create: XOR<CalendarEventCreateWithoutPetInput, CalendarEventUncheckedCreateWithoutPetInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutPetInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutPetInput, CalendarEventUncheckedUpdateWithoutPetInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutPetInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutPetInput>
  }

  export type FoodAlertUpsertWithWhereUniqueWithoutPetInput = {
    where: FoodAlertWhereUniqueInput
    update: XOR<FoodAlertUpdateWithoutPetInput, FoodAlertUncheckedUpdateWithoutPetInput>
    create: XOR<FoodAlertCreateWithoutPetInput, FoodAlertUncheckedCreateWithoutPetInput>
  }

  export type FoodAlertUpdateWithWhereUniqueWithoutPetInput = {
    where: FoodAlertWhereUniqueInput
    data: XOR<FoodAlertUpdateWithoutPetInput, FoodAlertUncheckedUpdateWithoutPetInput>
  }

  export type FoodAlertUpdateManyWithWhereWithoutPetInput = {
    where: FoodAlertScalarWhereInput
    data: XOR<FoodAlertUpdateManyMutationInput, FoodAlertUncheckedUpdateManyWithoutPetInput>
  }

  export type FoodAlertScalarWhereInput = {
    AND?: FoodAlertScalarWhereInput | FoodAlertScalarWhereInput[]
    OR?: FoodAlertScalarWhereInput[]
    NOT?: FoodAlertScalarWhereInput | FoodAlertScalarWhereInput[]
    id?: IntFilter<"FoodAlert"> | number
    pet_id?: IntFilter<"FoodAlert"> | number
    message?: StringFilter<"FoodAlert"> | string
    level?: StringFilter<"FoodAlert"> | string
    is_resolved?: BoolFilter<"FoodAlert"> | boolean
    created_at?: DateTimeFilter<"FoodAlert"> | Date | string
  }

  export type PetCreateWithoutHealth_recordsInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
    medications?: MedicationCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleCreateNestedManyWithoutPetInput
    vet_records?: VetRecordCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutHealth_recordsInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleUncheckedCreateNestedManyWithoutPetInput
    vet_records?: VetRecordUncheckedCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventUncheckedCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutHealth_recordsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutHealth_recordsInput, PetUncheckedCreateWithoutHealth_recordsInput>
  }

  export type PetUpsertWithoutHealth_recordsInput = {
    update: XOR<PetUpdateWithoutHealth_recordsInput, PetUncheckedUpdateWithoutHealth_recordsInput>
    create: XOR<PetCreateWithoutHealth_recordsInput, PetUncheckedCreateWithoutHealth_recordsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutHealth_recordsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutHealth_recordsInput, PetUncheckedUpdateWithoutHealth_recordsInput>
  }

  export type PetUpdateWithoutHealth_recordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    medications?: MedicationUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutHealth_recordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUncheckedUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUncheckedUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateWithoutMedicationsInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
    health_records?: HealthRecordCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleCreateNestedManyWithoutPetInput
    vet_records?: VetRecordCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutMedicationsInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordUncheckedCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleUncheckedCreateNestedManyWithoutPetInput
    vet_records?: VetRecordUncheckedCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventUncheckedCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutMedicationsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutMedicationsInput, PetUncheckedCreateWithoutMedicationsInput>
  }

  export type PetUpsertWithoutMedicationsInput = {
    update: XOR<PetUpdateWithoutMedicationsInput, PetUncheckedUpdateWithoutMedicationsInput>
    create: XOR<PetCreateWithoutMedicationsInput, PetUncheckedCreateWithoutMedicationsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutMedicationsInput, PetUncheckedUpdateWithoutMedicationsInput>
  }

  export type PetUpdateWithoutMedicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    health_records?: HealthRecordUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutMedicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUncheckedUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUncheckedUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUncheckedUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateWithoutFeeding_schedulesInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
    health_records?: HealthRecordCreateNestedManyWithoutPetInput
    medications?: MedicationCreateNestedManyWithoutPetInput
    vet_records?: VetRecordCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutFeeding_schedulesInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordUncheckedCreateNestedManyWithoutPetInput
    medications?: MedicationUncheckedCreateNestedManyWithoutPetInput
    vet_records?: VetRecordUncheckedCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventUncheckedCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutFeeding_schedulesInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutFeeding_schedulesInput, PetUncheckedCreateWithoutFeeding_schedulesInput>
  }

  export type PetUpsertWithoutFeeding_schedulesInput = {
    update: XOR<PetUpdateWithoutFeeding_schedulesInput, PetUncheckedUpdateWithoutFeeding_schedulesInput>
    create: XOR<PetCreateWithoutFeeding_schedulesInput, PetUncheckedCreateWithoutFeeding_schedulesInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutFeeding_schedulesInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutFeeding_schedulesInput, PetUncheckedUpdateWithoutFeeding_schedulesInput>
  }

  export type PetUpdateWithoutFeeding_schedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    health_records?: HealthRecordUpdateManyWithoutPetNestedInput
    medications?: MedicationUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutFeeding_schedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUncheckedUpdateManyWithoutPetNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUncheckedUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUncheckedUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUncheckedUpdateManyWithoutPetNestedInput
  }

  export type UserCreateWithoutVetsInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    events?: CalendarEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVetsInput = {
    id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    events?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVetsInput, UserUncheckedCreateWithoutVetsInput>
  }

  export type VetRecordCreateWithoutVetInput = {
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
    pet: PetCreateNestedOneWithoutVet_recordsInput
  }

  export type VetRecordUncheckedCreateWithoutVetInput = {
    id?: number
    pet_id: number
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
  }

  export type VetRecordCreateOrConnectWithoutVetInput = {
    where: VetRecordWhereUniqueInput
    create: XOR<VetRecordCreateWithoutVetInput, VetRecordUncheckedCreateWithoutVetInput>
  }

  export type VetRecordCreateManyVetInputEnvelope = {
    data: VetRecordCreateManyVetInput | VetRecordCreateManyVetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVetsInput = {
    update: XOR<UserUpdateWithoutVetsInput, UserUncheckedUpdateWithoutVetsInput>
    create: XOR<UserCreateWithoutVetsInput, UserUncheckedCreateWithoutVetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVetsInput, UserUncheckedUpdateWithoutVetsInput>
  }

  export type UserUpdateWithoutVetsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    events?: CalendarEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    events?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VetRecordUpsertWithWhereUniqueWithoutVetInput = {
    where: VetRecordWhereUniqueInput
    update: XOR<VetRecordUpdateWithoutVetInput, VetRecordUncheckedUpdateWithoutVetInput>
    create: XOR<VetRecordCreateWithoutVetInput, VetRecordUncheckedCreateWithoutVetInput>
  }

  export type VetRecordUpdateWithWhereUniqueWithoutVetInput = {
    where: VetRecordWhereUniqueInput
    data: XOR<VetRecordUpdateWithoutVetInput, VetRecordUncheckedUpdateWithoutVetInput>
  }

  export type VetRecordUpdateManyWithWhereWithoutVetInput = {
    where: VetRecordScalarWhereInput
    data: XOR<VetRecordUpdateManyMutationInput, VetRecordUncheckedUpdateManyWithoutVetInput>
  }

  export type PetCreateWithoutVet_recordsInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
    health_records?: HealthRecordCreateNestedManyWithoutPetInput
    medications?: MedicationCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutVet_recordsInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordUncheckedCreateNestedManyWithoutPetInput
    medications?: MedicationUncheckedCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleUncheckedCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventUncheckedCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutVet_recordsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutVet_recordsInput, PetUncheckedCreateWithoutVet_recordsInput>
  }

  export type VetCreateWithoutRecordsInput = {
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
    user: UserCreateNestedOneWithoutVetsInput
  }

  export type VetUncheckedCreateWithoutRecordsInput = {
    id?: number
    user_id: number
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
  }

  export type VetCreateOrConnectWithoutRecordsInput = {
    where: VetWhereUniqueInput
    create: XOR<VetCreateWithoutRecordsInput, VetUncheckedCreateWithoutRecordsInput>
  }

  export type PetUpsertWithoutVet_recordsInput = {
    update: XOR<PetUpdateWithoutVet_recordsInput, PetUncheckedUpdateWithoutVet_recordsInput>
    create: XOR<PetCreateWithoutVet_recordsInput, PetUncheckedCreateWithoutVet_recordsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutVet_recordsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutVet_recordsInput, PetUncheckedUpdateWithoutVet_recordsInput>
  }

  export type PetUpdateWithoutVet_recordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    health_records?: HealthRecordUpdateManyWithoutPetNestedInput
    medications?: MedicationUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutVet_recordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUncheckedUpdateManyWithoutPetNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUncheckedUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUncheckedUpdateManyWithoutPetNestedInput
  }

  export type VetUpsertWithoutRecordsInput = {
    update: XOR<VetUpdateWithoutRecordsInput, VetUncheckedUpdateWithoutRecordsInput>
    create: XOR<VetCreateWithoutRecordsInput, VetUncheckedCreateWithoutRecordsInput>
    where?: VetWhereInput
  }

  export type VetUpdateToOneWithWhereWithoutRecordsInput = {
    where?: VetWhereInput
    data: XOR<VetUpdateWithoutRecordsInput, VetUncheckedUpdateWithoutRecordsInput>
  }

  export type VetUpdateWithoutRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVetsNestedInput
  }

  export type VetUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type PetCreateWithoutCalendar_eventsInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
    health_records?: HealthRecordCreateNestedManyWithoutPetInput
    medications?: MedicationCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleCreateNestedManyWithoutPetInput
    vet_records?: VetRecordCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutCalendar_eventsInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordUncheckedCreateNestedManyWithoutPetInput
    medications?: MedicationUncheckedCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleUncheckedCreateNestedManyWithoutPetInput
    vet_records?: VetRecordUncheckedCreateNestedManyWithoutPetInput
    food_alerts?: FoodAlertUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutCalendar_eventsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutCalendar_eventsInput, PetUncheckedCreateWithoutCalendar_eventsInput>
  }

  export type UserCreateWithoutEventsInput = {
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    vets?: VetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: number
    email: string
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    vets?: VetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type PetUpsertWithoutCalendar_eventsInput = {
    update: XOR<PetUpdateWithoutCalendar_eventsInput, PetUncheckedUpdateWithoutCalendar_eventsInput>
    create: XOR<PetCreateWithoutCalendar_eventsInput, PetUncheckedCreateWithoutCalendar_eventsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutCalendar_eventsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutCalendar_eventsInput, PetUncheckedUpdateWithoutCalendar_eventsInput>
  }

  export type PetUpdateWithoutCalendar_eventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    health_records?: HealthRecordUpdateManyWithoutPetNestedInput
    medications?: MedicationUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutCalendar_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUncheckedUpdateManyWithoutPetNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUncheckedUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUncheckedUpdateManyWithoutPetNestedInput
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    vets?: VetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    vets?: VetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PetCreateWithoutFood_alertsInput = {
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
    health_records?: HealthRecordCreateNestedManyWithoutPetInput
    medications?: MedicationCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleCreateNestedManyWithoutPetInput
    vet_records?: VetRecordCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutFood_alertsInput = {
    id?: number
    user_id: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
    health_records?: HealthRecordUncheckedCreateNestedManyWithoutPetInput
    medications?: MedicationUncheckedCreateNestedManyWithoutPetInput
    feeding_schedules?: FeedingScheduleUncheckedCreateNestedManyWithoutPetInput
    vet_records?: VetRecordUncheckedCreateNestedManyWithoutPetInput
    calendar_events?: CalendarEventUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutFood_alertsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutFood_alertsInput, PetUncheckedCreateWithoutFood_alertsInput>
  }

  export type PetUpsertWithoutFood_alertsInput = {
    update: XOR<PetUpdateWithoutFood_alertsInput, PetUncheckedUpdateWithoutFood_alertsInput>
    create: XOR<PetCreateWithoutFood_alertsInput, PetUncheckedCreateWithoutFood_alertsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutFood_alertsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutFood_alertsInput, PetUncheckedUpdateWithoutFood_alertsInput>
  }

  export type PetUpdateWithoutFood_alertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
    health_records?: HealthRecordUpdateManyWithoutPetNestedInput
    medications?: MedicationUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutFood_alertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUncheckedUpdateManyWithoutPetNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUncheckedUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyUserInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    gender?: string | null
    color?: string | null
    microchip?: string | null
    bio?: string | null
    image_url?: string | null
    weight_kg?: number | null
    birthday?: string | null
    status?: string
    health_score?: number
    emoji?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VetCreateManyUserInput = {
    id?: number
    name: string
    clinic?: string | null
    phone?: string | null
    address?: string | null
    specialty?: string
  }

  export type CalendarEventCreateManyUserInput = {
    id?: number
    pet_id?: number | null
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
  }

  export type PetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUpdateManyWithoutPetNestedInput
    medications?: MedicationUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    health_records?: HealthRecordUncheckedUpdateManyWithoutPetNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutPetNestedInput
    feeding_schedules?: FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput
    vet_records?: VetRecordUncheckedUpdateManyWithoutPetNestedInput
    calendar_events?: CalendarEventUncheckedUpdateManyWithoutPetNestedInput
    food_alerts?: FoodAlertUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    health_score?: IntFieldUpdateOperationsInput | number
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    records?: VetRecordUpdateManyWithoutVetNestedInput
  }

  export type VetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    records?: VetRecordUncheckedUpdateManyWithoutVetNestedInput
  }

  export type VetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarEventUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneWithoutCalendar_eventsNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordCreateManyPetInput = {
    id?: number
    score: number
    weight_kg?: number | null
    last_checkup?: string | null
    vaccinated?: boolean
    conditions?: string
    recorded_at?: Date | string
  }

  export type MedicationCreateManyPetInput = {
    id?: number
    name: string
    frequency: string
    next_dose_date?: string | null
    created_at?: Date | string
  }

  export type FeedingScheduleCreateManyPetInput = {
    id?: number
    meal_type: string
    time: string
    food_name: string
    amount_g: number
    schedule_date?: string
    status?: string
  }

  export type VetRecordCreateManyPetInput = {
    id?: number
    vet_id?: number | null
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
  }

  export type CalendarEventCreateManyPetInput = {
    id?: number
    user_id: number
    title: string
    event_date: string
    type: string
    icon_type?: string
    created_at?: Date | string
  }

  export type FoodAlertCreateManyPetInput = {
    id?: number
    message: string
    level?: string
    is_resolved?: boolean
    created_at?: Date | string
  }

  export type HealthRecordUpdateWithoutPetInput = {
    score?: IntFieldUpdateOperationsInput | number
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    last_checkup?: NullableStringFieldUpdateOperationsInput | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    conditions?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    last_checkup?: NullableStringFieldUpdateOperationsInput | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    conditions?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthRecordUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    weight_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    last_checkup?: NullableStringFieldUpdateOperationsInput | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    conditions?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUpdateWithoutPetInput = {
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    next_dose_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    next_dose_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    next_dose_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingScheduleUpdateWithoutPetInput = {
    meal_type?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    food_name?: StringFieldUpdateOperationsInput | string
    amount_g?: FloatFieldUpdateOperationsInput | number
    schedule_date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeedingScheduleUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_type?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    food_name?: StringFieldUpdateOperationsInput | string
    amount_g?: FloatFieldUpdateOperationsInput | number
    schedule_date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeedingScheduleUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_type?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    food_name?: StringFieldUpdateOperationsInput | string
    amount_g?: FloatFieldUpdateOperationsInput | number
    schedule_date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VetRecordUpdateWithoutPetInput = {
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    vet?: VetUpdateOneWithoutRecordsNestedInput
  }

  export type VetRecordUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    vet_id?: NullableIntFieldUpdateOperationsInput | number | null
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VetRecordUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    vet_id?: NullableIntFieldUpdateOperationsInput | number | null
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarEventUpdateWithoutPetInput = {
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    icon_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodAlertUpdateWithoutPetInput = {
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodAlertUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodAlertUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VetRecordCreateManyVetInput = {
    id?: number
    pet_id: number
    vet_name?: string | null
    date: string
    type: string
    notes?: string | null
    status?: string
  }

  export type VetRecordUpdateWithoutVetInput = {
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    pet?: PetUpdateOneRequiredWithoutVet_recordsNestedInput
  }

  export type VetRecordUncheckedUpdateWithoutVetInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VetRecordUncheckedUpdateManyWithoutVetInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: IntFieldUpdateOperationsInput | number
    vet_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}