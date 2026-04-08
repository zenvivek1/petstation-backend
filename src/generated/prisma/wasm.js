
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserSettingsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  notify_vet_visits: 'notify_vet_visits',
  notify_feeding: 'notify_feeding',
  notify_weekly_report: 'notify_weekly_report',
  notify_medication: 'notify_medication'
};

exports.Prisma.PetScalarFieldEnum = {
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

exports.Prisma.HealthRecordScalarFieldEnum = {
  id: 'id',
  pet_id: 'pet_id',
  score: 'score',
  weight_kg: 'weight_kg',
  last_checkup: 'last_checkup',
  vaccinated: 'vaccinated',
  conditions: 'conditions',
  recorded_at: 'recorded_at'
};

exports.Prisma.MedicationScalarFieldEnum = {
  id: 'id',
  pet_id: 'pet_id',
  name: 'name',
  frequency: 'frequency',
  next_dose_date: 'next_dose_date',
  created_at: 'created_at'
};

exports.Prisma.FeedingScheduleScalarFieldEnum = {
  id: 'id',
  pet_id: 'pet_id',
  meal_type: 'meal_type',
  time: 'time',
  food_name: 'food_name',
  amount_g: 'amount_g',
  schedule_date: 'schedule_date',
  status: 'status'
};

exports.Prisma.VetScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  clinic: 'clinic',
  phone: 'phone',
  address: 'address',
  specialty: 'specialty'
};

exports.Prisma.VetRecordScalarFieldEnum = {
  id: 'id',
  pet_id: 'pet_id',
  vet_id: 'vet_id',
  vet_name: 'vet_name',
  date: 'date',
  type: 'type',
  notes: 'notes',
  status: 'status'
};

exports.Prisma.CalendarEventScalarFieldEnum = {
  id: 'id',
  pet_id: 'pet_id',
  user_id: 'user_id',
  title: 'title',
  event_date: 'event_date',
  type: 'type',
  icon_type: 'icon_type',
  created_at: 'created_at'
};

exports.Prisma.FoodAlertScalarFieldEnum = {
  id: 'id',
  pet_id: 'pet_id',
  message: 'message',
  level: 'level',
  is_resolved: 'is_resolved',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
