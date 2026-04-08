import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model HealthRecord
 *
 */
export type HealthRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$HealthRecordPayload>;
export type AggregateHealthRecord = {
    _count: HealthRecordCountAggregateOutputType | null;
    _avg: HealthRecordAvgAggregateOutputType | null;
    _sum: HealthRecordSumAggregateOutputType | null;
    _min: HealthRecordMinAggregateOutputType | null;
    _max: HealthRecordMaxAggregateOutputType | null;
};
export type HealthRecordAvgAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    score: number | null;
    weight_kg: number | null;
};
export type HealthRecordSumAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    score: number | null;
    weight_kg: number | null;
};
export type HealthRecordMinAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    score: number | null;
    weight_kg: number | null;
    last_checkup: string | null;
    vaccinated: boolean | null;
    conditions: string | null;
    recorded_at: Date | null;
};
export type HealthRecordMaxAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    score: number | null;
    weight_kg: number | null;
    last_checkup: string | null;
    vaccinated: boolean | null;
    conditions: string | null;
    recorded_at: Date | null;
};
export type HealthRecordCountAggregateOutputType = {
    id: number;
    pet_id: number;
    score: number;
    weight_kg: number;
    last_checkup: number;
    vaccinated: number;
    conditions: number;
    recorded_at: number;
    _all: number;
};
export type HealthRecordAvgAggregateInputType = {
    id?: true;
    pet_id?: true;
    score?: true;
    weight_kg?: true;
};
export type HealthRecordSumAggregateInputType = {
    id?: true;
    pet_id?: true;
    score?: true;
    weight_kg?: true;
};
export type HealthRecordMinAggregateInputType = {
    id?: true;
    pet_id?: true;
    score?: true;
    weight_kg?: true;
    last_checkup?: true;
    vaccinated?: true;
    conditions?: true;
    recorded_at?: true;
};
export type HealthRecordMaxAggregateInputType = {
    id?: true;
    pet_id?: true;
    score?: true;
    weight_kg?: true;
    last_checkup?: true;
    vaccinated?: true;
    conditions?: true;
    recorded_at?: true;
};
export type HealthRecordCountAggregateInputType = {
    id?: true;
    pet_id?: true;
    score?: true;
    weight_kg?: true;
    last_checkup?: true;
    vaccinated?: true;
    conditions?: true;
    recorded_at?: true;
    _all?: true;
};
export type HealthRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HealthRecord to aggregate.
     */
    where?: Prisma.HealthRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: Prisma.HealthRecordOrderByWithRelationInput | Prisma.HealthRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HealthRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HealthRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HealthRecords
    **/
    _count?: true | HealthRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: HealthRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: HealthRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HealthRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HealthRecordMaxAggregateInputType;
};
export type GetHealthRecordAggregateType<T extends HealthRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateHealthRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHealthRecord[P]> : Prisma.GetScalarType<T[P], AggregateHealthRecord[P]>;
};
export type HealthRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HealthRecordWhereInput;
    orderBy?: Prisma.HealthRecordOrderByWithAggregationInput | Prisma.HealthRecordOrderByWithAggregationInput[];
    by: Prisma.HealthRecordScalarFieldEnum[] | Prisma.HealthRecordScalarFieldEnum;
    having?: Prisma.HealthRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HealthRecordCountAggregateInputType | true;
    _avg?: HealthRecordAvgAggregateInputType;
    _sum?: HealthRecordSumAggregateInputType;
    _min?: HealthRecordMinAggregateInputType;
    _max?: HealthRecordMaxAggregateInputType;
};
export type HealthRecordGroupByOutputType = {
    id: number;
    pet_id: number;
    score: number;
    weight_kg: number | null;
    last_checkup: string | null;
    vaccinated: boolean;
    conditions: string;
    recorded_at: Date;
    _count: HealthRecordCountAggregateOutputType | null;
    _avg: HealthRecordAvgAggregateOutputType | null;
    _sum: HealthRecordSumAggregateOutputType | null;
    _min: HealthRecordMinAggregateOutputType | null;
    _max: HealthRecordMaxAggregateOutputType | null;
};
export type GetHealthRecordGroupByPayload<T extends HealthRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HealthRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HealthRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HealthRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HealthRecordGroupByOutputType[P]>;
}>>;
export type HealthRecordWhereInput = {
    AND?: Prisma.HealthRecordWhereInput | Prisma.HealthRecordWhereInput[];
    OR?: Prisma.HealthRecordWhereInput[];
    NOT?: Prisma.HealthRecordWhereInput | Prisma.HealthRecordWhereInput[];
    id?: Prisma.IntFilter<"HealthRecord"> | number;
    pet_id?: Prisma.IntFilter<"HealthRecord"> | number;
    score?: Prisma.IntFilter<"HealthRecord"> | number;
    weight_kg?: Prisma.FloatNullableFilter<"HealthRecord"> | number | null;
    last_checkup?: Prisma.StringNullableFilter<"HealthRecord"> | string | null;
    vaccinated?: Prisma.BoolFilter<"HealthRecord"> | boolean;
    conditions?: Prisma.StringFilter<"HealthRecord"> | string;
    recorded_at?: Prisma.DateTimeFilter<"HealthRecord"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
};
export type HealthRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_checkup?: Prisma.SortOrderInput | Prisma.SortOrder;
    vaccinated?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
    pet?: Prisma.PetOrderByWithRelationInput;
};
export type HealthRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.HealthRecordWhereInput | Prisma.HealthRecordWhereInput[];
    OR?: Prisma.HealthRecordWhereInput[];
    NOT?: Prisma.HealthRecordWhereInput | Prisma.HealthRecordWhereInput[];
    pet_id?: Prisma.IntFilter<"HealthRecord"> | number;
    score?: Prisma.IntFilter<"HealthRecord"> | number;
    weight_kg?: Prisma.FloatNullableFilter<"HealthRecord"> | number | null;
    last_checkup?: Prisma.StringNullableFilter<"HealthRecord"> | string | null;
    vaccinated?: Prisma.BoolFilter<"HealthRecord"> | boolean;
    conditions?: Prisma.StringFilter<"HealthRecord"> | string;
    recorded_at?: Prisma.DateTimeFilter<"HealthRecord"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
}, "id">;
export type HealthRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_checkup?: Prisma.SortOrderInput | Prisma.SortOrder;
    vaccinated?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
    _count?: Prisma.HealthRecordCountOrderByAggregateInput;
    _avg?: Prisma.HealthRecordAvgOrderByAggregateInput;
    _max?: Prisma.HealthRecordMaxOrderByAggregateInput;
    _min?: Prisma.HealthRecordMinOrderByAggregateInput;
    _sum?: Prisma.HealthRecordSumOrderByAggregateInput;
};
export type HealthRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.HealthRecordScalarWhereWithAggregatesInput | Prisma.HealthRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.HealthRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HealthRecordScalarWhereWithAggregatesInput | Prisma.HealthRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"HealthRecord"> | number;
    pet_id?: Prisma.IntWithAggregatesFilter<"HealthRecord"> | number;
    score?: Prisma.IntWithAggregatesFilter<"HealthRecord"> | number;
    weight_kg?: Prisma.FloatNullableWithAggregatesFilter<"HealthRecord"> | number | null;
    last_checkup?: Prisma.StringNullableWithAggregatesFilter<"HealthRecord"> | string | null;
    vaccinated?: Prisma.BoolWithAggregatesFilter<"HealthRecord"> | boolean;
    conditions?: Prisma.StringWithAggregatesFilter<"HealthRecord"> | string;
    recorded_at?: Prisma.DateTimeWithAggregatesFilter<"HealthRecord"> | Date | string;
};
export type HealthRecordCreateInput = {
    score: number;
    weight_kg?: number | null;
    last_checkup?: string | null;
    vaccinated?: boolean;
    conditions?: string;
    recorded_at?: Date | string;
    pet: Prisma.PetCreateNestedOneWithoutHealth_recordsInput;
};
export type HealthRecordUncheckedCreateInput = {
    id?: number;
    pet_id: number;
    score: number;
    weight_kg?: number | null;
    last_checkup?: string | null;
    vaccinated?: boolean;
    conditions?: string;
    recorded_at?: Date | string;
};
export type HealthRecordUpdateInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    last_checkup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vaccinated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    conditions?: Prisma.StringFieldUpdateOperationsInput | string;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pet?: Prisma.PetUpdateOneRequiredWithoutHealth_recordsNestedInput;
};
export type HealthRecordUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    last_checkup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vaccinated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    conditions?: Prisma.StringFieldUpdateOperationsInput | string;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HealthRecordCreateManyInput = {
    id?: number;
    pet_id: number;
    score: number;
    weight_kg?: number | null;
    last_checkup?: string | null;
    vaccinated?: boolean;
    conditions?: string;
    recorded_at?: Date | string;
};
export type HealthRecordUpdateManyMutationInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    last_checkup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vaccinated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    conditions?: Prisma.StringFieldUpdateOperationsInput | string;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HealthRecordUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    last_checkup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vaccinated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    conditions?: Prisma.StringFieldUpdateOperationsInput | string;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HealthRecordListRelationFilter = {
    every?: Prisma.HealthRecordWhereInput;
    some?: Prisma.HealthRecordWhereInput;
    none?: Prisma.HealthRecordWhereInput;
};
export type HealthRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HealthRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    last_checkup?: Prisma.SortOrder;
    vaccinated?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
};
export type HealthRecordAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
};
export type HealthRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    last_checkup?: Prisma.SortOrder;
    vaccinated?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
};
export type HealthRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
    last_checkup?: Prisma.SortOrder;
    vaccinated?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
};
export type HealthRecordSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    weight_kg?: Prisma.SortOrder;
};
export type HealthRecordCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.HealthRecordCreateWithoutPetInput, Prisma.HealthRecordUncheckedCreateWithoutPetInput> | Prisma.HealthRecordCreateWithoutPetInput[] | Prisma.HealthRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.HealthRecordCreateOrConnectWithoutPetInput | Prisma.HealthRecordCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.HealthRecordCreateManyPetInputEnvelope;
    connect?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
};
export type HealthRecordUncheckedCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.HealthRecordCreateWithoutPetInput, Prisma.HealthRecordUncheckedCreateWithoutPetInput> | Prisma.HealthRecordCreateWithoutPetInput[] | Prisma.HealthRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.HealthRecordCreateOrConnectWithoutPetInput | Prisma.HealthRecordCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.HealthRecordCreateManyPetInputEnvelope;
    connect?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
};
export type HealthRecordUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.HealthRecordCreateWithoutPetInput, Prisma.HealthRecordUncheckedCreateWithoutPetInput> | Prisma.HealthRecordCreateWithoutPetInput[] | Prisma.HealthRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.HealthRecordCreateOrConnectWithoutPetInput | Prisma.HealthRecordCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.HealthRecordUpsertWithWhereUniqueWithoutPetInput | Prisma.HealthRecordUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.HealthRecordCreateManyPetInputEnvelope;
    set?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    disconnect?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    delete?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    connect?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    update?: Prisma.HealthRecordUpdateWithWhereUniqueWithoutPetInput | Prisma.HealthRecordUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.HealthRecordUpdateManyWithWhereWithoutPetInput | Prisma.HealthRecordUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.HealthRecordScalarWhereInput | Prisma.HealthRecordScalarWhereInput[];
};
export type HealthRecordUncheckedUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.HealthRecordCreateWithoutPetInput, Prisma.HealthRecordUncheckedCreateWithoutPetInput> | Prisma.HealthRecordCreateWithoutPetInput[] | Prisma.HealthRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.HealthRecordCreateOrConnectWithoutPetInput | Prisma.HealthRecordCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.HealthRecordUpsertWithWhereUniqueWithoutPetInput | Prisma.HealthRecordUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.HealthRecordCreateManyPetInputEnvelope;
    set?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    disconnect?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    delete?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    connect?: Prisma.HealthRecordWhereUniqueInput | Prisma.HealthRecordWhereUniqueInput[];
    update?: Prisma.HealthRecordUpdateWithWhereUniqueWithoutPetInput | Prisma.HealthRecordUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.HealthRecordUpdateManyWithWhereWithoutPetInput | Prisma.HealthRecordUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.HealthRecordScalarWhereInput | Prisma.HealthRecordScalarWhereInput[];
};
export type HealthRecordCreateWithoutPetInput = {
    score: number;
    weight_kg?: number | null;
    last_checkup?: string | null;
    vaccinated?: boolean;
    conditions?: string;
    recorded_at?: Date | string;
};
export type HealthRecordUncheckedCreateWithoutPetInput = {
    id?: number;
    score: number;
    weight_kg?: number | null;
    last_checkup?: string | null;
    vaccinated?: boolean;
    conditions?: string;
    recorded_at?: Date | string;
};
export type HealthRecordCreateOrConnectWithoutPetInput = {
    where: Prisma.HealthRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.HealthRecordCreateWithoutPetInput, Prisma.HealthRecordUncheckedCreateWithoutPetInput>;
};
export type HealthRecordCreateManyPetInputEnvelope = {
    data: Prisma.HealthRecordCreateManyPetInput | Prisma.HealthRecordCreateManyPetInput[];
};
export type HealthRecordUpsertWithWhereUniqueWithoutPetInput = {
    where: Prisma.HealthRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.HealthRecordUpdateWithoutPetInput, Prisma.HealthRecordUncheckedUpdateWithoutPetInput>;
    create: Prisma.XOR<Prisma.HealthRecordCreateWithoutPetInput, Prisma.HealthRecordUncheckedCreateWithoutPetInput>;
};
export type HealthRecordUpdateWithWhereUniqueWithoutPetInput = {
    where: Prisma.HealthRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.HealthRecordUpdateWithoutPetInput, Prisma.HealthRecordUncheckedUpdateWithoutPetInput>;
};
export type HealthRecordUpdateManyWithWhereWithoutPetInput = {
    where: Prisma.HealthRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.HealthRecordUpdateManyMutationInput, Prisma.HealthRecordUncheckedUpdateManyWithoutPetInput>;
};
export type HealthRecordScalarWhereInput = {
    AND?: Prisma.HealthRecordScalarWhereInput | Prisma.HealthRecordScalarWhereInput[];
    OR?: Prisma.HealthRecordScalarWhereInput[];
    NOT?: Prisma.HealthRecordScalarWhereInput | Prisma.HealthRecordScalarWhereInput[];
    id?: Prisma.IntFilter<"HealthRecord"> | number;
    pet_id?: Prisma.IntFilter<"HealthRecord"> | number;
    score?: Prisma.IntFilter<"HealthRecord"> | number;
    weight_kg?: Prisma.FloatNullableFilter<"HealthRecord"> | number | null;
    last_checkup?: Prisma.StringNullableFilter<"HealthRecord"> | string | null;
    vaccinated?: Prisma.BoolFilter<"HealthRecord"> | boolean;
    conditions?: Prisma.StringFilter<"HealthRecord"> | string;
    recorded_at?: Prisma.DateTimeFilter<"HealthRecord"> | Date | string;
};
export type HealthRecordCreateManyPetInput = {
    id?: number;
    score: number;
    weight_kg?: number | null;
    last_checkup?: string | null;
    vaccinated?: boolean;
    conditions?: string;
    recorded_at?: Date | string;
};
export type HealthRecordUpdateWithoutPetInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    last_checkup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vaccinated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    conditions?: Prisma.StringFieldUpdateOperationsInput | string;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HealthRecordUncheckedUpdateWithoutPetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    last_checkup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vaccinated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    conditions?: Prisma.StringFieldUpdateOperationsInput | string;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HealthRecordUncheckedUpdateManyWithoutPetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    weight_kg?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    last_checkup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vaccinated?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    conditions?: Prisma.StringFieldUpdateOperationsInput | string;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HealthRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    score?: boolean;
    weight_kg?: boolean;
    last_checkup?: boolean;
    vaccinated?: boolean;
    conditions?: boolean;
    recorded_at?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["healthRecord"]>;
export type HealthRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    score?: boolean;
    weight_kg?: boolean;
    last_checkup?: boolean;
    vaccinated?: boolean;
    conditions?: boolean;
    recorded_at?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["healthRecord"]>;
export type HealthRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    score?: boolean;
    weight_kg?: boolean;
    last_checkup?: boolean;
    vaccinated?: boolean;
    conditions?: boolean;
    recorded_at?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["healthRecord"]>;
export type HealthRecordSelectScalar = {
    id?: boolean;
    pet_id?: boolean;
    score?: boolean;
    weight_kg?: boolean;
    last_checkup?: boolean;
    vaccinated?: boolean;
    conditions?: boolean;
    recorded_at?: boolean;
};
export type HealthRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pet_id" | "score" | "weight_kg" | "last_checkup" | "vaccinated" | "conditions" | "recorded_at", ExtArgs["result"]["healthRecord"]>;
export type HealthRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type HealthRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type HealthRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type $HealthRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HealthRecord";
    objects: {
        pet: Prisma.$PetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pet_id: number;
        score: number;
        weight_kg: number | null;
        last_checkup: string | null;
        vaccinated: boolean;
        conditions: string;
        recorded_at: Date;
    }, ExtArgs["result"]["healthRecord"]>;
    composites: {};
};
export type HealthRecordGetPayload<S extends boolean | null | undefined | HealthRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload, S>;
export type HealthRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HealthRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HealthRecordCountAggregateInputType | true;
};
export interface HealthRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HealthRecord'];
        meta: {
            name: 'HealthRecord';
        };
    };
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
    findUnique<T extends HealthRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, HealthRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends HealthRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HealthRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends HealthRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, HealthRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends HealthRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HealthRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends HealthRecordFindManyArgs>(args?: Prisma.SelectSubset<T, HealthRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends HealthRecordCreateArgs>(args: Prisma.SelectSubset<T, HealthRecordCreateArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends HealthRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, HealthRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends HealthRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HealthRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends HealthRecordDeleteArgs>(args: Prisma.SelectSubset<T, HealthRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends HealthRecordUpdateArgs>(args: Prisma.SelectSubset<T, HealthRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends HealthRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, HealthRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends HealthRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, HealthRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends HealthRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HealthRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends HealthRecordUpsertArgs>(args: Prisma.SelectSubset<T, HealthRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__HealthRecordClient<runtime.Types.Result.GetResult<Prisma.$HealthRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends HealthRecordCountArgs>(args?: Prisma.Subset<T, HealthRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HealthRecordCountAggregateOutputType> : number>;
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
    aggregate<T extends HealthRecordAggregateArgs>(args: Prisma.Subset<T, HealthRecordAggregateArgs>): Prisma.PrismaPromise<GetHealthRecordAggregateType<T>>;
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
    groupBy<T extends HealthRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HealthRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: HealthRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HealthRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__HealthRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pet<T extends Prisma.PetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PetDefaultArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the HealthRecord model
 */
export interface HealthRecordFieldRefs {
    readonly id: Prisma.FieldRef<"HealthRecord", 'Int'>;
    readonly pet_id: Prisma.FieldRef<"HealthRecord", 'Int'>;
    readonly score: Prisma.FieldRef<"HealthRecord", 'Int'>;
    readonly weight_kg: Prisma.FieldRef<"HealthRecord", 'Float'>;
    readonly last_checkup: Prisma.FieldRef<"HealthRecord", 'String'>;
    readonly vaccinated: Prisma.FieldRef<"HealthRecord", 'Boolean'>;
    readonly conditions: Prisma.FieldRef<"HealthRecord", 'String'>;
    readonly recorded_at: Prisma.FieldRef<"HealthRecord", 'DateTime'>;
}
/**
 * HealthRecord findUnique
 */
export type HealthRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HealthRecord to fetch.
     */
    where: Prisma.HealthRecordWhereUniqueInput;
};
/**
 * HealthRecord findUniqueOrThrow
 */
export type HealthRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HealthRecord to fetch.
     */
    where: Prisma.HealthRecordWhereUniqueInput;
};
/**
 * HealthRecord findFirst
 */
export type HealthRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HealthRecord to fetch.
     */
    where?: Prisma.HealthRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: Prisma.HealthRecordOrderByWithRelationInput | Prisma.HealthRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HealthRecords.
     */
    cursor?: Prisma.HealthRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HealthRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HealthRecords.
     */
    distinct?: Prisma.HealthRecordScalarFieldEnum | Prisma.HealthRecordScalarFieldEnum[];
};
/**
 * HealthRecord findFirstOrThrow
 */
export type HealthRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HealthRecord to fetch.
     */
    where?: Prisma.HealthRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: Prisma.HealthRecordOrderByWithRelationInput | Prisma.HealthRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HealthRecords.
     */
    cursor?: Prisma.HealthRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HealthRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HealthRecords.
     */
    distinct?: Prisma.HealthRecordScalarFieldEnum | Prisma.HealthRecordScalarFieldEnum[];
};
/**
 * HealthRecord findMany
 */
export type HealthRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HealthRecords to fetch.
     */
    where?: Prisma.HealthRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HealthRecords to fetch.
     */
    orderBy?: Prisma.HealthRecordOrderByWithRelationInput | Prisma.HealthRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HealthRecords.
     */
    cursor?: Prisma.HealthRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HealthRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HealthRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HealthRecords.
     */
    distinct?: Prisma.HealthRecordScalarFieldEnum | Prisma.HealthRecordScalarFieldEnum[];
};
/**
 * HealthRecord create
 */
export type HealthRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a HealthRecord.
     */
    data: Prisma.XOR<Prisma.HealthRecordCreateInput, Prisma.HealthRecordUncheckedCreateInput>;
};
/**
 * HealthRecord createMany
 */
export type HealthRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthRecords.
     */
    data: Prisma.HealthRecordCreateManyInput | Prisma.HealthRecordCreateManyInput[];
};
/**
 * HealthRecord createManyAndReturn
 */
export type HealthRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: Prisma.HealthRecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: Prisma.HealthRecordOmit<ExtArgs> | null;
    /**
     * The data used to create many HealthRecords.
     */
    data: Prisma.HealthRecordCreateManyInput | Prisma.HealthRecordCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HealthRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * HealthRecord update
 */
export type HealthRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a HealthRecord.
     */
    data: Prisma.XOR<Prisma.HealthRecordUpdateInput, Prisma.HealthRecordUncheckedUpdateInput>;
    /**
     * Choose, which HealthRecord to update.
     */
    where: Prisma.HealthRecordWhereUniqueInput;
};
/**
 * HealthRecord updateMany
 */
export type HealthRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthRecords.
     */
    data: Prisma.XOR<Prisma.HealthRecordUpdateManyMutationInput, Prisma.HealthRecordUncheckedUpdateManyInput>;
    /**
     * Filter which HealthRecords to update
     */
    where?: Prisma.HealthRecordWhereInput;
    /**
     * Limit how many HealthRecords to update.
     */
    limit?: number;
};
/**
 * HealthRecord updateManyAndReturn
 */
export type HealthRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthRecord
     */
    select?: Prisma.HealthRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HealthRecord
     */
    omit?: Prisma.HealthRecordOmit<ExtArgs> | null;
    /**
     * The data used to update HealthRecords.
     */
    data: Prisma.XOR<Prisma.HealthRecordUpdateManyMutationInput, Prisma.HealthRecordUncheckedUpdateManyInput>;
    /**
     * Filter which HealthRecords to update
     */
    where?: Prisma.HealthRecordWhereInput;
    /**
     * Limit how many HealthRecords to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HealthRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * HealthRecord upsert
 */
export type HealthRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the HealthRecord to update in case it exists.
     */
    where: Prisma.HealthRecordWhereUniqueInput;
    /**
     * In case the HealthRecord found by the `where` argument doesn't exist, create a new HealthRecord with this data.
     */
    create: Prisma.XOR<Prisma.HealthRecordCreateInput, Prisma.HealthRecordUncheckedCreateInput>;
    /**
     * In case the HealthRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HealthRecordUpdateInput, Prisma.HealthRecordUncheckedUpdateInput>;
};
/**
 * HealthRecord delete
 */
export type HealthRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which HealthRecord to delete.
     */
    where: Prisma.HealthRecordWhereUniqueInput;
};
/**
 * HealthRecord deleteMany
 */
export type HealthRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HealthRecords to delete
     */
    where?: Prisma.HealthRecordWhereInput;
    /**
     * Limit how many HealthRecords to delete.
     */
    limit?: number;
};
/**
 * HealthRecord without action
 */
export type HealthRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=HealthRecord.d.ts.map