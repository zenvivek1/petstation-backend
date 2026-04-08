import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map