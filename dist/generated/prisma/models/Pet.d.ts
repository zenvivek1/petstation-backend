import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Pet
 *
 */
export type PetModel = runtime.Types.Result.DefaultSelection<Prisma.$PetPayload>;
export type AggregatePet = {
    _count: PetCountAggregateOutputType | null;
    _avg: PetAvgAggregateOutputType | null;
    _sum: PetSumAggregateOutputType | null;
    _min: PetMinAggregateOutputType | null;
    _max: PetMaxAggregateOutputType | null;
};
export type PetAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    weight_kg: number | null;
    health_score: number | null;
};
export type PetSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    weight_kg: number | null;
    health_score: number | null;
};
export type PetMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    name: string | null;
    species: string | null;
    breed: string | null;
    gender: string | null;
    color: string | null;
    microchip: string | null;
    bio: string | null;
    image_url: string | null;
    weight_kg: number | null;
    birthday: string | null;
    status: string | null;
    health_score: number | null;
    emoji: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PetMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    name: string | null;
    species: string | null;
    breed: string | null;
    gender: string | null;
    color: string | null;
    microchip: string | null;
    bio: string | null;
    image_url: string | null;
    weight_kg: number | null;
    birthday: string | null;
    status: string | null;
    health_score: number | null;
    emoji: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PetCountAggregateOutputType = {
    id: number;
    user_id: number;
    name: number;
    species: number;
    breed: number;
    gender: number;
    color: number;
    microchip: number;
    bio: number;
    image_url: number;
    weight_kg: number;
    birthday: number;
    status: number;
    health_score: number;
    emoji: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PetAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    weight_kg?: true;
    health_score?: true;
};
export type PetSumAggregateInputType = {
    id?: true;
    user_id?: true;
    weight_kg?: true;
    health_score?: true;
};
export type PetMinAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    species?: true;
    breed?: true;
    gender?: true;
    color?: true;
    microchip?: true;
    bio?: true;
    image_url?: true;
    weight_kg?: true;
    birthday?: true;
    status?: true;
    health_score?: true;
    emoji?: true;
    created_at?: true;
    updated_at?: true;
};
export type PetMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    species?: true;
    breed?: true;
    gender?: true;
    color?: true;
    microchip?: true;
    bio?: true;
    image_url?: true;
    weight_kg?: true;
    birthday?: true;
    status?: true;
    health_score?: true;
    emoji?: true;
    created_at?: true;
    updated_at?: true;
};
export type PetCountAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    species?: true;
    breed?: true;
    gender?: true;
    color?: true;
    microchip?: true;
    bio?: true;
    image_url?: true;
    weight_kg?: true;
    birthday?: true;
    status?: true;
    health_score?: true;
    emoji?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: Prisma.PetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pets to fetch.
     */
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType;
};
export type GetPetAggregateType<T extends PetAggregateArgs> = {
    [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePet[P]> : Prisma.GetScalarType<T[P], AggregatePet[P]>;
};
export type PetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithAggregationInput | Prisma.PetOrderByWithAggregationInput[];
    by: Prisma.PetScalarFieldEnum[] | Prisma.PetScalarFieldEnum;
    having?: Prisma.PetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PetCountAggregateInputType | true;
    _avg?: PetAvgAggregateInputType;
    _sum?: PetSumAggregateInputType;
    _min?: PetMinAggregateInputType;
    _max?: PetMaxAggregateInputType;
};
export type PetGroupByOutputType = {
    id: number;
    user_id: number;
    name: string;
    species: string;
    breed: string | null;
    gender: string | null;
    color: string | null;
    microchip: string | null;
    bio: string | null;
    image_url: string | null;
    weight_kg: number | null;
    birthday: string | null;
    status: string;
    health_score: number;
    emoji: string;
    created_at: Date;
    updated_at: Date;
    _count: PetCountAggregateOutputType | null;
    _avg: PetAvgAggregateOutputType | null;
    _sum: PetSumAggregateOutputType | null;
    _min: PetMinAggregateOutputType | null;
    _max: PetMaxAggregateOutputType | null;
};
export type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PetGroupByOutputType[P]>;
}>>;
export type PetWhereInput = {
    AND?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    OR?: Prisma.PetWhereInput[];
    NOT?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    id?: Prisma.IntFilter<"Pet"> | number;
    user_id?: Prisma.IntFilter<"Pet"> | number;
    name?: Prisma.StringFilter<"Pet"> | string;
    species?: Prisma.StringFilter<"Pet"> | string;
    breed?: Prisma.StringNullableFilter<"Pet"> | string | null;
    gender?: Prisma.StringNullableFilter<"Pet"> | string | null;
    color?: Prisma.StringNullableFilter<"Pet"> | string | null;
    microchip?: Prisma.StringNullableFilter<"Pet"> | string | null;
    bio?: Prisma.StringNullableFilter<"Pet"> | string | null;
    image_url?: Prisma.StringNullableFilter<"Pet"> | string | null;
    weight_kg?: Prisma.FloatNullableFilter<"Pet"> | number | null;
    birthday?: Prisma.StringNullableFilter<"Pet"> | string | null;
    status?: Prisma.StringFilter<"Pet"> | string;
    health_score?: Prisma.IntFilter<"Pet"> | number;
    emoji?: Prisma.StringFilter<"Pet"> | string;
    created_at?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    health_records?: Prisma.HealthRecordListRelationFilter;
    medications?: Prisma.MedicationListRelationFilter;
    feeding_schedules?: Prisma.FeedingScheduleListRelationFilter;
    vet_records?: Prisma.VetRecordListRelationFilter;
    calendar_events?: Prisma.CalendarEventListRelationFilter;
    food_alerts?: Prisma.FoodAlertListRelationFilter;
};
export type PetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    microchip?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    weight_kg?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthday?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    health_score?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    health_records?: Prisma.HealthRecordOrderByRelationAggregateInput;
    medications?: Prisma.MedicationOrderByRelationAggregateInput;
    feeding_schedules?: Prisma.FeedingScheduleOrderByRelationAggregateInput;
    vet_records?: Prisma.VetRecordOrderByRelationAggregateInput;
    calendar_events?: Prisma.CalendarEventOrderByRelationAggregateInput;
    food_alerts?: Prisma.FoodAlertOrderByRelationAggregateInput;
};
export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    OR?: Prisma.PetWhereInput[];
    NOT?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    user_id?: Prisma.IntFilter<"Pet"> | number;
    name?: Prisma.StringFilter<"Pet"> | string;
    species?: Prisma.StringFilter<"Pet"> | string;
    breed?: Prisma.StringNullableFilter<"Pet"> | string | null;
    gender?: Prisma.StringNullableFilter<"Pet"> | string | null;
    color?: Prisma.StringNullableFilter<"Pet"> | string | null;
    microchip?: Prisma.StringNullableFilter<"Pet"> | string | null;
    bio?: Prisma.StringNullableFilter<"Pet"> | string | null;
    image_url?: Prisma.StringNullableFilter<"Pet"> | string | null;
    weight_kg?: Prisma.FloatNullableFilter<"Pet"> | number | null;
    birthday?: Prisma.StringNullableFilter<"Pet"> | string | null;
    status?: Prisma.StringFilter<"Pet"> | string;
    health_score?: Prisma.IntFilter<"Pet"> | number;
    emoji?: Prisma.StringFilter<"Pet"> | string;
    created_at?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    health_records?: Prisma.HealthRecordListRelationFilter;
    medications?: Prisma.MedicationListRelationFilter;
    feeding_schedules?: Prisma.FeedingScheduleListRelationFilter;
    vet_records?: Prisma.VetRecordListRelationFilter;
    calendar_events?: Prisma.CalendarEventListRelationFilter;
    food_alerts?: Prisma.FoodAlertListRelationFilter;
}, "id">;
export type PetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    microchip?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    weight_kg?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthday?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    health_score?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.PetCountOrderByAggregateInput;
    _avg?: Prisma.PetAvgOrderByAggregateInput;
    _max?: Prisma.PetMaxOrderByAggregateInput;
    _min?: Prisma.PetMinOrderByAggregateInput;
    _sum?: Prisma.PetSumOrderByAggregateInput;
};
export type PetScalarWhereWithAggregatesInput = {
    AND?: Prisma.PetScalarWhereWithAggregatesInput | Prisma.PetScalarWhereWithAggregatesInput[];
    OR?: Prisma.PetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PetScalarWhereWithAggregatesInput | Prisma.PetScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pet"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"Pet"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    species?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    breed?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    gender?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    microchip?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    image_url?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    weight_kg?: Prisma.FloatNullableWithAggregatesFilter<"Pet"> | number | null;
    birthday?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    health_score?: Prisma.IntWithAggregatesFilter<"Pet"> | number;
    emoji?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Pet"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Pet"> | Date | string;
};
export type PetCreateInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPetsInput;
    health_records?: Prisma.HealthRecordCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventUncheckedCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertUncheckedCreateNestedManyWithoutPetInput;
};
export type PetUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPetsNestedInput;
    health_records?: Prisma.HealthRecordUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUncheckedUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUncheckedUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateManyInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type PetUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetListRelationFilter = {
    every?: Prisma.PetWhereInput;
    some?: Prisma.PetWhereInput;
    none?: Prisma.PetWhereInput;
};
export type PetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    microchip?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    health_score?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PetAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    health_score?: Prisma.SortOrder;
};
export type PetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    microchip?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    health_score?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    microchip?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    health_score?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type PetSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    health_score?: Prisma.SortOrder;
};
export type PetScalarRelationFilter = {
    is?: Prisma.PetWhereInput;
    isNot?: Prisma.PetWhereInput;
};
export type PetNullableScalarRelationFilter = {
    is?: Prisma.PetWhereInput | null;
    isNot?: Prisma.PetWhereInput | null;
};
export type PetCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutUserInput, Prisma.PetUncheckedCreateWithoutUserInput> | Prisma.PetCreateWithoutUserInput[] | Prisma.PetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutUserInput | Prisma.PetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PetCreateManyUserInputEnvelope;
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
};
export type PetUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutUserInput, Prisma.PetUncheckedCreateWithoutUserInput> | Prisma.PetCreateWithoutUserInput[] | Prisma.PetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutUserInput | Prisma.PetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PetCreateManyUserInputEnvelope;
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
};
export type PetUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutUserInput, Prisma.PetUncheckedCreateWithoutUserInput> | Prisma.PetCreateWithoutUserInput[] | Prisma.PetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutUserInput | Prisma.PetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PetUpsertWithWhereUniqueWithoutUserInput | Prisma.PetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PetCreateManyUserInputEnvelope;
    set?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    disconnect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    delete?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    update?: Prisma.PetUpdateWithWhereUniqueWithoutUserInput | Prisma.PetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PetUpdateManyWithWhereWithoutUserInput | Prisma.PetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
};
export type PetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutUserInput, Prisma.PetUncheckedCreateWithoutUserInput> | Prisma.PetCreateWithoutUserInput[] | Prisma.PetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutUserInput | Prisma.PetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PetUpsertWithWhereUniqueWithoutUserInput | Prisma.PetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PetCreateManyUserInputEnvelope;
    set?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    disconnect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    delete?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    update?: Prisma.PetUpdateWithWhereUniqueWithoutUserInput | Prisma.PetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PetUpdateManyWithWhereWithoutUserInput | Prisma.PetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PetCreateNestedOneWithoutHealth_recordsInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutHealth_recordsInput, Prisma.PetUncheckedCreateWithoutHealth_recordsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutHealth_recordsInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutHealth_recordsNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutHealth_recordsInput, Prisma.PetUncheckedCreateWithoutHealth_recordsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutHealth_recordsInput;
    upsert?: Prisma.PetUpsertWithoutHealth_recordsInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutHealth_recordsInput, Prisma.PetUpdateWithoutHealth_recordsInput>, Prisma.PetUncheckedUpdateWithoutHealth_recordsInput>;
};
export type PetCreateNestedOneWithoutMedicationsInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutMedicationsInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutMedicationsInput;
    upsert?: Prisma.PetUpsertWithoutMedicationsInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutMedicationsInput, Prisma.PetUpdateWithoutMedicationsInput>, Prisma.PetUncheckedUpdateWithoutMedicationsInput>;
};
export type PetCreateNestedOneWithoutFeeding_schedulesInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutFeeding_schedulesInput, Prisma.PetUncheckedCreateWithoutFeeding_schedulesInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutFeeding_schedulesInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutFeeding_schedulesNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutFeeding_schedulesInput, Prisma.PetUncheckedCreateWithoutFeeding_schedulesInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutFeeding_schedulesInput;
    upsert?: Prisma.PetUpsertWithoutFeeding_schedulesInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutFeeding_schedulesInput, Prisma.PetUpdateWithoutFeeding_schedulesInput>, Prisma.PetUncheckedUpdateWithoutFeeding_schedulesInput>;
};
export type PetCreateNestedOneWithoutVet_recordsInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutVet_recordsInput, Prisma.PetUncheckedCreateWithoutVet_recordsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutVet_recordsInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutVet_recordsNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutVet_recordsInput, Prisma.PetUncheckedCreateWithoutVet_recordsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutVet_recordsInput;
    upsert?: Prisma.PetUpsertWithoutVet_recordsInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutVet_recordsInput, Prisma.PetUpdateWithoutVet_recordsInput>, Prisma.PetUncheckedUpdateWithoutVet_recordsInput>;
};
export type PetCreateNestedOneWithoutCalendar_eventsInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutCalendar_eventsInput, Prisma.PetUncheckedCreateWithoutCalendar_eventsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutCalendar_eventsInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneWithoutCalendar_eventsNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutCalendar_eventsInput, Prisma.PetUncheckedCreateWithoutCalendar_eventsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutCalendar_eventsInput;
    upsert?: Prisma.PetUpsertWithoutCalendar_eventsInput;
    disconnect?: Prisma.PetWhereInput | boolean;
    delete?: Prisma.PetWhereInput | boolean;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutCalendar_eventsInput, Prisma.PetUpdateWithoutCalendar_eventsInput>, Prisma.PetUncheckedUpdateWithoutCalendar_eventsInput>;
};
export type PetCreateNestedOneWithoutFood_alertsInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutFood_alertsInput, Prisma.PetUncheckedCreateWithoutFood_alertsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutFood_alertsInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutFood_alertsNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutFood_alertsInput, Prisma.PetUncheckedCreateWithoutFood_alertsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutFood_alertsInput;
    upsert?: Prisma.PetUpsertWithoutFood_alertsInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutFood_alertsInput, Prisma.PetUpdateWithoutFood_alertsInput>, Prisma.PetUncheckedUpdateWithoutFood_alertsInput>;
};
export type PetCreateWithoutUserInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventUncheckedCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutUserInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutUserInput, Prisma.PetUncheckedCreateWithoutUserInput>;
};
export type PetCreateManyUserInputEnvelope = {
    data: Prisma.PetCreateManyUserInput | Prisma.PetCreateManyUserInput[];
};
export type PetUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PetWhereUniqueInput;
    update: Prisma.XOR<Prisma.PetUpdateWithoutUserInput, Prisma.PetUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutUserInput, Prisma.PetUncheckedCreateWithoutUserInput>;
};
export type PetUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PetWhereUniqueInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutUserInput, Prisma.PetUncheckedUpdateWithoutUserInput>;
};
export type PetUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PetScalarWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateManyMutationInput, Prisma.PetUncheckedUpdateManyWithoutUserInput>;
};
export type PetScalarWhereInput = {
    AND?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
    OR?: Prisma.PetScalarWhereInput[];
    NOT?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
    id?: Prisma.IntFilter<"Pet"> | number;
    user_id?: Prisma.IntFilter<"Pet"> | number;
    name?: Prisma.StringFilter<"Pet"> | string;
    species?: Prisma.StringFilter<"Pet"> | string;
    breed?: Prisma.StringNullableFilter<"Pet"> | string | null;
    gender?: Prisma.StringNullableFilter<"Pet"> | string | null;
    color?: Prisma.StringNullableFilter<"Pet"> | string | null;
    microchip?: Prisma.StringNullableFilter<"Pet"> | string | null;
    bio?: Prisma.StringNullableFilter<"Pet"> | string | null;
    image_url?: Prisma.StringNullableFilter<"Pet"> | string | null;
    weight_kg?: Prisma.FloatNullableFilter<"Pet"> | number | null;
    birthday?: Prisma.StringNullableFilter<"Pet"> | string | null;
    status?: Prisma.StringFilter<"Pet"> | string;
    health_score?: Prisma.IntFilter<"Pet"> | number;
    emoji?: Prisma.StringFilter<"Pet"> | string;
    created_at?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Pet"> | Date | string;
};
export type PetCreateWithoutHealth_recordsInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPetsInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutHealth_recordsInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventUncheckedCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutHealth_recordsInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutHealth_recordsInput, Prisma.PetUncheckedCreateWithoutHealth_recordsInput>;
};
export type PetUpsertWithoutHealth_recordsInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutHealth_recordsInput, Prisma.PetUncheckedUpdateWithoutHealth_recordsInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutHealth_recordsInput, Prisma.PetUncheckedCreateWithoutHealth_recordsInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutHealth_recordsInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutHealth_recordsInput, Prisma.PetUncheckedUpdateWithoutHealth_recordsInput>;
};
export type PetUpdateWithoutHealth_recordsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPetsNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutHealth_recordsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUncheckedUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUncheckedUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateWithoutMedicationsInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPetsInput;
    health_records?: Prisma.HealthRecordCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutMedicationsInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordUncheckedCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventUncheckedCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutMedicationsInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
};
export type PetUpsertWithoutMedicationsInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutMedicationsInput, Prisma.PetUncheckedUpdateWithoutMedicationsInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutMedicationsInput, Prisma.PetUncheckedUpdateWithoutMedicationsInput>;
};
export type PetUpdateWithoutMedicationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPetsNestedInput;
    health_records?: Prisma.HealthRecordUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutMedicationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUncheckedUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUncheckedUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUncheckedUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateWithoutFeeding_schedulesInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPetsInput;
    health_records?: Prisma.HealthRecordCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutFeeding_schedulesInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventUncheckedCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutFeeding_schedulesInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutFeeding_schedulesInput, Prisma.PetUncheckedCreateWithoutFeeding_schedulesInput>;
};
export type PetUpsertWithoutFeeding_schedulesInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutFeeding_schedulesInput, Prisma.PetUncheckedUpdateWithoutFeeding_schedulesInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutFeeding_schedulesInput, Prisma.PetUncheckedCreateWithoutFeeding_schedulesInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutFeeding_schedulesInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutFeeding_schedulesInput, Prisma.PetUncheckedUpdateWithoutFeeding_schedulesInput>;
};
export type PetUpdateWithoutFeeding_schedulesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPetsNestedInput;
    health_records?: Prisma.HealthRecordUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutFeeding_schedulesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUncheckedUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUncheckedUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateWithoutVet_recordsInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPetsInput;
    health_records?: Prisma.HealthRecordCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutVet_recordsInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventUncheckedCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutVet_recordsInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutVet_recordsInput, Prisma.PetUncheckedCreateWithoutVet_recordsInput>;
};
export type PetUpsertWithoutVet_recordsInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutVet_recordsInput, Prisma.PetUncheckedUpdateWithoutVet_recordsInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutVet_recordsInput, Prisma.PetUncheckedCreateWithoutVet_recordsInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutVet_recordsInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutVet_recordsInput, Prisma.PetUncheckedUpdateWithoutVet_recordsInput>;
};
export type PetUpdateWithoutVet_recordsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPetsNestedInput;
    health_records?: Prisma.HealthRecordUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutVet_recordsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUncheckedUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateWithoutCalendar_eventsInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPetsInput;
    health_records?: Prisma.HealthRecordCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutCalendar_eventsInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutPetInput;
    food_alerts?: Prisma.FoodAlertUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutCalendar_eventsInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutCalendar_eventsInput, Prisma.PetUncheckedCreateWithoutCalendar_eventsInput>;
};
export type PetUpsertWithoutCalendar_eventsInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutCalendar_eventsInput, Prisma.PetUncheckedUpdateWithoutCalendar_eventsInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutCalendar_eventsInput, Prisma.PetUncheckedCreateWithoutCalendar_eventsInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutCalendar_eventsInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutCalendar_eventsInput, Prisma.PetUncheckedUpdateWithoutCalendar_eventsInput>;
};
export type PetUpdateWithoutCalendar_eventsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPetsNestedInput;
    health_records?: Prisma.HealthRecordUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutCalendar_eventsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUncheckedUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateWithoutFood_alertsInput = {
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPetsInput;
    health_records?: Prisma.HealthRecordCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutFood_alertsInput = {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    health_records?: Prisma.HealthRecordUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedCreateNestedManyWithoutPetInput;
    vet_records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutPetInput;
    calendar_events?: Prisma.CalendarEventUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutFood_alertsInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutFood_alertsInput, Prisma.PetUncheckedCreateWithoutFood_alertsInput>;
};
export type PetUpsertWithoutFood_alertsInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutFood_alertsInput, Prisma.PetUncheckedUpdateWithoutFood_alertsInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutFood_alertsInput, Prisma.PetUncheckedCreateWithoutFood_alertsInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutFood_alertsInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutFood_alertsInput, Prisma.PetUncheckedUpdateWithoutFood_alertsInput>;
};
export type PetUpdateWithoutFood_alertsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPetsNestedInput;
    health_records?: Prisma.HealthRecordUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutFood_alertsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUncheckedUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateManyUserInput = {
    id?: number;
    name: string;
    species: string;
    breed?: string | null;
    gender?: string | null;
    color?: string | null;
    microchip?: string | null;
    bio?: string | null;
    image_url?: string | null;
    weight_kg?: number | null;
    birthday?: string | null;
    status?: string;
    health_score?: number;
    emoji?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type PetUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    health_records?: Prisma.HealthRecordUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
    feeding_schedules?: Prisma.FeedingScheduleUncheckedUpdateManyWithoutPetNestedInput;
    vet_records?: Prisma.VetRecordUncheckedUpdateManyWithoutPetNestedInput;
    calendar_events?: Prisma.CalendarEventUncheckedUpdateManyWithoutPetNestedInput;
    food_alerts?: Prisma.FoodAlertUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    microchip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthday?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    health_score?: Prisma.IntFieldUpdateOperationsInput | number;
    emoji?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PetCountOutputType
 */
export type PetCountOutputType = {
    health_records: number;
    medications: number;
    feeding_schedules: number;
    vet_records: number;
    calendar_events: number;
    food_alerts: number;
};
export type PetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    health_records?: boolean | PetCountOutputTypeCountHealth_recordsArgs;
    medications?: boolean | PetCountOutputTypeCountMedicationsArgs;
    feeding_schedules?: boolean | PetCountOutputTypeCountFeeding_schedulesArgs;
    vet_records?: boolean | PetCountOutputTypeCountVet_recordsArgs;
    calendar_events?: boolean | PetCountOutputTypeCountCalendar_eventsArgs;
    food_alerts?: boolean | PetCountOutputTypeCountFood_alertsArgs;
};
/**
 * PetCountOutputType without action
 */
export type PetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: Prisma.PetCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PetCountOutputType without action
 */
export type PetCountOutputTypeCountHealth_recordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HealthRecordWhereInput;
};
/**
 * PetCountOutputType without action
 */
export type PetCountOutputTypeCountMedicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationWhereInput;
};
/**
 * PetCountOutputType without action
 */
export type PetCountOutputTypeCountFeeding_schedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedingScheduleWhereInput;
};
/**
 * PetCountOutputType without action
 */
export type PetCountOutputTypeCountVet_recordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VetRecordWhereInput;
};
/**
 * PetCountOutputType without action
 */
export type PetCountOutputTypeCountCalendar_eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarEventWhereInput;
};
/**
 * PetCountOutputType without action
 */
export type PetCountOutputTypeCountFood_alertsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodAlertWhereInput;
};
export type PetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    species?: boolean;
    breed?: boolean;
    gender?: boolean;
    color?: boolean;
    microchip?: boolean;
    bio?: boolean;
    image_url?: boolean;
    weight_kg?: boolean;
    birthday?: boolean;
    status?: boolean;
    health_score?: boolean;
    emoji?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    health_records?: boolean | Prisma.Pet$health_recordsArgs<ExtArgs>;
    medications?: boolean | Prisma.Pet$medicationsArgs<ExtArgs>;
    feeding_schedules?: boolean | Prisma.Pet$feeding_schedulesArgs<ExtArgs>;
    vet_records?: boolean | Prisma.Pet$vet_recordsArgs<ExtArgs>;
    calendar_events?: boolean | Prisma.Pet$calendar_eventsArgs<ExtArgs>;
    food_alerts?: boolean | Prisma.Pet$food_alertsArgs<ExtArgs>;
    _count?: boolean | Prisma.PetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pet"]>;
export type PetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    species?: boolean;
    breed?: boolean;
    gender?: boolean;
    color?: boolean;
    microchip?: boolean;
    bio?: boolean;
    image_url?: boolean;
    weight_kg?: boolean;
    birthday?: boolean;
    status?: boolean;
    health_score?: boolean;
    emoji?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pet"]>;
export type PetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    species?: boolean;
    breed?: boolean;
    gender?: boolean;
    color?: boolean;
    microchip?: boolean;
    bio?: boolean;
    image_url?: boolean;
    weight_kg?: boolean;
    birthday?: boolean;
    status?: boolean;
    health_score?: boolean;
    emoji?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pet"]>;
export type PetSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    species?: boolean;
    breed?: boolean;
    gender?: boolean;
    color?: boolean;
    microchip?: boolean;
    bio?: boolean;
    image_url?: boolean;
    weight_kg?: boolean;
    birthday?: boolean;
    status?: boolean;
    health_score?: boolean;
    emoji?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type PetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "name" | "species" | "breed" | "gender" | "color" | "microchip" | "bio" | "image_url" | "weight_kg" | "birthday" | "status" | "health_score" | "emoji" | "created_at" | "updated_at", ExtArgs["result"]["pet"]>;
export type PetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    health_records?: boolean | Prisma.Pet$health_recordsArgs<ExtArgs>;
    medications?: boolean | Prisma.Pet$medicationsArgs<ExtArgs>;
    feeding_schedules?: boolean | Prisma.Pet$feeding_schedulesArgs<ExtArgs>;
    vet_records?: boolean | Prisma.Pet$vet_recordsArgs<ExtArgs>;
    calendar_events?: boolean | Prisma.Pet$calendar_eventsArgs<ExtArgs>;
    food_alerts?: boolean | Prisma.Pet$food_alertsArgs<ExtArgs>;
    _count?: boolean | Prisma.PetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pet";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        health_records: Prisma.$HealthRecordPayload<ExtArgs>[];
        medications: Prisma.$MedicationPayload<ExtArgs>[];
        feeding_schedules: Prisma.$FeedingSchedulePayload<ExtArgs>[];
        vet_records: Prisma.$VetRecordPayload<ExtArgs>[];
        calendar_events: Prisma.$CalendarEventPayload<ExtArgs>[];
        food_alerts: Prisma.$FoodAlertPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number;
        name: string;
        species: string;
        breed: string | null;
        gender: string | null;
        color: string | null;
        microchip: string | null;
        bio: string | null;
        image_url: string | null;
        weight_kg: number | null;
        birthday: string | null;
        status: string;
        health_score: number;
        emoji: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["pet"]>;
    composites: {};
};
export type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PetPayload, S>;
export type PetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PetCountAggregateInputType | true;
};
export interface PetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pet'];
        meta: {
            name: 'Pet';
        };
    };
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
    findUnique<T extends PetFindUniqueArgs>(args: Prisma.SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends PetFindFirstArgs>(args?: Prisma.SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends PetFindManyArgs>(args?: Prisma.SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends PetCreateArgs>(args: Prisma.SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends PetCreateManyArgs>(args?: Prisma.SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends PetDeleteArgs>(args: Prisma.SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends PetUpdateArgs>(args: Prisma.SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends PetDeleteManyArgs>(args?: Prisma.SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends PetUpdateManyArgs>(args: Prisma.SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends PetUpsertArgs>(args: Prisma.SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends PetCountArgs>(args?: Prisma.Subset<T, PetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PetCountAggregateOutputType> : number>;
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
    aggregate<T extends PetAggregateArgs>(args: Prisma.Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>;
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
    groupBy<T extends PetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PetGroupByArgs['orderBy'];
    } : {
        orderBy?: PetGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__PetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    health_records<T extends Prisma.Pet$health_recordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$health_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    medications<T extends Prisma.Pet$medicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feeding_schedules<T extends Prisma.Pet$feeding_schedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$feeding_schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedingSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    vet_records<T extends Prisma.Pet$vet_recordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$vet_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    calendar_events<T extends Prisma.Pet$calendar_eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$calendar_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    food_alerts<T extends Prisma.Pet$food_alertsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$food_alertsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Pet model
 */
export interface PetFieldRefs {
    readonly id: Prisma.FieldRef<"Pet", 'Int'>;
    readonly user_id: Prisma.FieldRef<"Pet", 'Int'>;
    readonly name: Prisma.FieldRef<"Pet", 'String'>;
    readonly species: Prisma.FieldRef<"Pet", 'String'>;
    readonly breed: Prisma.FieldRef<"Pet", 'String'>;
    readonly gender: Prisma.FieldRef<"Pet", 'String'>;
    readonly color: Prisma.FieldRef<"Pet", 'String'>;
    readonly microchip: Prisma.FieldRef<"Pet", 'String'>;
    readonly bio: Prisma.FieldRef<"Pet", 'String'>;
    readonly image_url: Prisma.FieldRef<"Pet", 'String'>;
    readonly weight_kg: Prisma.FieldRef<"Pet", 'Float'>;
    readonly birthday: Prisma.FieldRef<"Pet", 'String'>;
    readonly status: Prisma.FieldRef<"Pet", 'String'>;
    readonly health_score: Prisma.FieldRef<"Pet", 'Int'>;
    readonly emoji: Prisma.FieldRef<"Pet", 'String'>;
    readonly created_at: Prisma.FieldRef<"Pet", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Pet", 'DateTime'>;
}
/**
 * Pet findUnique
 */
export type PetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * Filter, which Pet to fetch.
     */
    where: Prisma.PetWhereUniqueInput;
};
/**
 * Pet findUniqueOrThrow
 */
export type PetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * Filter, which Pet to fetch.
     */
    where: Prisma.PetWhereUniqueInput;
};
/**
 * Pet findFirst
 */
export type PetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * Filter, which Pet to fetch.
     */
    where?: Prisma.PetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pets to fetch.
     */
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pets.
     */
    cursor?: Prisma.PetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pets.
     */
    distinct?: Prisma.PetScalarFieldEnum | Prisma.PetScalarFieldEnum[];
};
/**
 * Pet findFirstOrThrow
 */
export type PetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * Filter, which Pet to fetch.
     */
    where?: Prisma.PetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pets to fetch.
     */
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pets.
     */
    cursor?: Prisma.PetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pets.
     */
    distinct?: Prisma.PetScalarFieldEnum | Prisma.PetScalarFieldEnum[];
};
/**
 * Pet findMany
 */
export type PetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * Filter, which Pets to fetch.
     */
    where?: Prisma.PetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pets to fetch.
     */
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pets.
     */
    cursor?: Prisma.PetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pets.
     */
    distinct?: Prisma.PetScalarFieldEnum | Prisma.PetScalarFieldEnum[];
};
/**
 * Pet create
 */
export type PetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * The data needed to create a Pet.
     */
    data: Prisma.XOR<Prisma.PetCreateInput, Prisma.PetUncheckedCreateInput>;
};
/**
 * Pet createMany
 */
export type PetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: Prisma.PetCreateManyInput | Prisma.PetCreateManyInput[];
};
/**
 * Pet createManyAndReturn
 */
export type PetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * The data used to create many Pets.
     */
    data: Prisma.PetCreateManyInput | Prisma.PetCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Pet update
 */
export type PetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * The data needed to update a Pet.
     */
    data: Prisma.XOR<Prisma.PetUpdateInput, Prisma.PetUncheckedUpdateInput>;
    /**
     * Choose, which Pet to update.
     */
    where: Prisma.PetWhereUniqueInput;
};
/**
 * Pet updateMany
 */
export type PetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: Prisma.XOR<Prisma.PetUpdateManyMutationInput, Prisma.PetUncheckedUpdateManyInput>;
    /**
     * Filter which Pets to update
     */
    where?: Prisma.PetWhereInput;
    /**
     * Limit how many Pets to update.
     */
    limit?: number;
};
/**
 * Pet updateManyAndReturn
 */
export type PetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * The data used to update Pets.
     */
    data: Prisma.XOR<Prisma.PetUpdateManyMutationInput, Prisma.PetUncheckedUpdateManyInput>;
    /**
     * Filter which Pets to update
     */
    where?: Prisma.PetWhereInput;
    /**
     * Limit how many Pets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Pet upsert
 */
export type PetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: Prisma.PetWhereUniqueInput;
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: Prisma.XOR<Prisma.PetCreateInput, Prisma.PetUncheckedCreateInput>;
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PetUpdateInput, Prisma.PetUncheckedUpdateInput>;
};
/**
 * Pet delete
 */
export type PetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
    /**
     * Filter which Pet to delete.
     */
    where: Prisma.PetWhereUniqueInput;
};
/**
 * Pet deleteMany
 */
export type PetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: Prisma.PetWhereInput;
    /**
     * Limit how many Pets to delete.
     */
    limit?: number;
};
/**
 * Pet.health_records
 */
export type Pet$health_recordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: Prisma.HealthRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: Prisma.HealthRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HealthRecordInclude<ExtArgs> | null;
    where?: Prisma.HealthRecordWhereInput;
    orderBy?: Prisma.HealthRecordOrderByWithRelationInput | Prisma.HealthRecordOrderByWithRelationInput[];
    cursor?: Prisma.HealthRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HealthRecordScalarFieldEnum | Prisma.HealthRecordScalarFieldEnum[];
};
/**
 * Pet.medications
 */
export type Pet$medicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medication
     */
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where?: Prisma.MedicationWhereInput;
    orderBy?: Prisma.MedicationOrderByWithRelationInput | Prisma.MedicationOrderByWithRelationInput[];
    cursor?: Prisma.MedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationScalarFieldEnum | Prisma.MedicationScalarFieldEnum[];
};
/**
 * Pet.feeding_schedules
 */
export type Pet$feeding_schedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedingSchedule
     */
    select?: Prisma.FeedingScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedingSchedule
     */
    omit?: Prisma.FeedingScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedingScheduleInclude<ExtArgs> | null;
    where?: Prisma.FeedingScheduleWhereInput;
    orderBy?: Prisma.FeedingScheduleOrderByWithRelationInput | Prisma.FeedingScheduleOrderByWithRelationInput[];
    cursor?: Prisma.FeedingScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeedingScheduleScalarFieldEnum | Prisma.FeedingScheduleScalarFieldEnum[];
};
/**
 * Pet.vet_records
 */
export type Pet$vet_recordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: Prisma.VetRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: Prisma.VetRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VetRecordInclude<ExtArgs> | null;
    where?: Prisma.VetRecordWhereInput;
    orderBy?: Prisma.VetRecordOrderByWithRelationInput | Prisma.VetRecordOrderByWithRelationInput[];
    cursor?: Prisma.VetRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VetRecordScalarFieldEnum | Prisma.VetRecordScalarFieldEnum[];
};
/**
 * Pet.calendar_events
 */
export type Pet$calendar_eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CalendarEventInclude<ExtArgs> | null;
    where?: Prisma.CalendarEventWhereInput;
    orderBy?: Prisma.CalendarEventOrderByWithRelationInput | Prisma.CalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarEventScalarFieldEnum | Prisma.CalendarEventScalarFieldEnum[];
};
/**
 * Pet.food_alerts
 */
export type Pet$food_alertsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: Prisma.FoodAlertSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: Prisma.FoodAlertOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FoodAlertInclude<ExtArgs> | null;
    where?: Prisma.FoodAlertWhereInput;
    orderBy?: Prisma.FoodAlertOrderByWithRelationInput | Prisma.FoodAlertOrderByWithRelationInput[];
    cursor?: Prisma.FoodAlertWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodAlertScalarFieldEnum | Prisma.FoodAlertScalarFieldEnum[];
};
/**
 * Pet without action
 */
export type PetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: Prisma.PetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pet
     */
    omit?: Prisma.PetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PetInclude<ExtArgs> | null;
};
//# sourceMappingURL=Pet.d.ts.map