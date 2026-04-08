import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model VetRecord
 *
 */
export type VetRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$VetRecordPayload>;
export type AggregateVetRecord = {
    _count: VetRecordCountAggregateOutputType | null;
    _avg: VetRecordAvgAggregateOutputType | null;
    _sum: VetRecordSumAggregateOutputType | null;
    _min: VetRecordMinAggregateOutputType | null;
    _max: VetRecordMaxAggregateOutputType | null;
};
export type VetRecordAvgAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    vet_id: number | null;
};
export type VetRecordSumAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    vet_id: number | null;
};
export type VetRecordMinAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    vet_id: number | null;
    vet_name: string | null;
    date: string | null;
    type: string | null;
    notes: string | null;
    status: string | null;
};
export type VetRecordMaxAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    vet_id: number | null;
    vet_name: string | null;
    date: string | null;
    type: string | null;
    notes: string | null;
    status: string | null;
};
export type VetRecordCountAggregateOutputType = {
    id: number;
    pet_id: number;
    vet_id: number;
    vet_name: number;
    date: number;
    type: number;
    notes: number;
    status: number;
    _all: number;
};
export type VetRecordAvgAggregateInputType = {
    id?: true;
    pet_id?: true;
    vet_id?: true;
};
export type VetRecordSumAggregateInputType = {
    id?: true;
    pet_id?: true;
    vet_id?: true;
};
export type VetRecordMinAggregateInputType = {
    id?: true;
    pet_id?: true;
    vet_id?: true;
    vet_name?: true;
    date?: true;
    type?: true;
    notes?: true;
    status?: true;
};
export type VetRecordMaxAggregateInputType = {
    id?: true;
    pet_id?: true;
    vet_id?: true;
    vet_name?: true;
    date?: true;
    type?: true;
    notes?: true;
    status?: true;
};
export type VetRecordCountAggregateInputType = {
    id?: true;
    pet_id?: true;
    vet_id?: true;
    vet_name?: true;
    date?: true;
    type?: true;
    notes?: true;
    status?: true;
    _all?: true;
};
export type VetRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VetRecord to aggregate.
     */
    where?: Prisma.VetRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: Prisma.VetRecordOrderByWithRelationInput | Prisma.VetRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VetRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VetRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VetRecords
    **/
    _count?: true | VetRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: VetRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: VetRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VetRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VetRecordMaxAggregateInputType;
};
export type GetVetRecordAggregateType<T extends VetRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateVetRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVetRecord[P]> : Prisma.GetScalarType<T[P], AggregateVetRecord[P]>;
};
export type VetRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VetRecordWhereInput;
    orderBy?: Prisma.VetRecordOrderByWithAggregationInput | Prisma.VetRecordOrderByWithAggregationInput[];
    by: Prisma.VetRecordScalarFieldEnum[] | Prisma.VetRecordScalarFieldEnum;
    having?: Prisma.VetRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VetRecordCountAggregateInputType | true;
    _avg?: VetRecordAvgAggregateInputType;
    _sum?: VetRecordSumAggregateInputType;
    _min?: VetRecordMinAggregateInputType;
    _max?: VetRecordMaxAggregateInputType;
};
export type VetRecordGroupByOutputType = {
    id: number;
    pet_id: number;
    vet_id: number | null;
    vet_name: string | null;
    date: string;
    type: string;
    notes: string | null;
    status: string;
    _count: VetRecordCountAggregateOutputType | null;
    _avg: VetRecordAvgAggregateOutputType | null;
    _sum: VetRecordSumAggregateOutputType | null;
    _min: VetRecordMinAggregateOutputType | null;
    _max: VetRecordMaxAggregateOutputType | null;
};
export type GetVetRecordGroupByPayload<T extends VetRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VetRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VetRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VetRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VetRecordGroupByOutputType[P]>;
}>>;
export type VetRecordWhereInput = {
    AND?: Prisma.VetRecordWhereInput | Prisma.VetRecordWhereInput[];
    OR?: Prisma.VetRecordWhereInput[];
    NOT?: Prisma.VetRecordWhereInput | Prisma.VetRecordWhereInput[];
    id?: Prisma.IntFilter<"VetRecord"> | number;
    pet_id?: Prisma.IntFilter<"VetRecord"> | number;
    vet_id?: Prisma.IntNullableFilter<"VetRecord"> | number | null;
    vet_name?: Prisma.StringNullableFilter<"VetRecord"> | string | null;
    date?: Prisma.StringFilter<"VetRecord"> | string;
    type?: Prisma.StringFilter<"VetRecord"> | string;
    notes?: Prisma.StringNullableFilter<"VetRecord"> | string | null;
    status?: Prisma.StringFilter<"VetRecord"> | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
    vet?: Prisma.XOR<Prisma.VetNullableScalarRelationFilter, Prisma.VetWhereInput> | null;
};
export type VetRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    vet_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    vet_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pet?: Prisma.PetOrderByWithRelationInput;
    vet?: Prisma.VetOrderByWithRelationInput;
};
export type VetRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.VetRecordWhereInput | Prisma.VetRecordWhereInput[];
    OR?: Prisma.VetRecordWhereInput[];
    NOT?: Prisma.VetRecordWhereInput | Prisma.VetRecordWhereInput[];
    pet_id?: Prisma.IntFilter<"VetRecord"> | number;
    vet_id?: Prisma.IntNullableFilter<"VetRecord"> | number | null;
    vet_name?: Prisma.StringNullableFilter<"VetRecord"> | string | null;
    date?: Prisma.StringFilter<"VetRecord"> | string;
    type?: Prisma.StringFilter<"VetRecord"> | string;
    notes?: Prisma.StringNullableFilter<"VetRecord"> | string | null;
    status?: Prisma.StringFilter<"VetRecord"> | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
    vet?: Prisma.XOR<Prisma.VetNullableScalarRelationFilter, Prisma.VetWhereInput> | null;
}, "id">;
export type VetRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    vet_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    vet_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.VetRecordCountOrderByAggregateInput;
    _avg?: Prisma.VetRecordAvgOrderByAggregateInput;
    _max?: Prisma.VetRecordMaxOrderByAggregateInput;
    _min?: Prisma.VetRecordMinOrderByAggregateInput;
    _sum?: Prisma.VetRecordSumOrderByAggregateInput;
};
export type VetRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.VetRecordScalarWhereWithAggregatesInput | Prisma.VetRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.VetRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VetRecordScalarWhereWithAggregatesInput | Prisma.VetRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"VetRecord"> | number;
    pet_id?: Prisma.IntWithAggregatesFilter<"VetRecord"> | number;
    vet_id?: Prisma.IntNullableWithAggregatesFilter<"VetRecord"> | number | null;
    vet_name?: Prisma.StringNullableWithAggregatesFilter<"VetRecord"> | string | null;
    date?: Prisma.StringWithAggregatesFilter<"VetRecord"> | string;
    type?: Prisma.StringWithAggregatesFilter<"VetRecord"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"VetRecord"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"VetRecord"> | string;
};
export type VetRecordCreateInput = {
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
    pet: Prisma.PetCreateNestedOneWithoutVet_recordsInput;
    vet?: Prisma.VetCreateNestedOneWithoutRecordsInput;
};
export type VetRecordUncheckedCreateInput = {
    id?: number;
    pet_id: number;
    vet_id?: number | null;
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
};
export type VetRecordUpdateInput = {
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pet?: Prisma.PetUpdateOneRequiredWithoutVet_recordsNestedInput;
    vet?: Prisma.VetUpdateOneWithoutRecordsNestedInput;
};
export type VetRecordUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vet_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetRecordCreateManyInput = {
    id?: number;
    pet_id: number;
    vet_id?: number | null;
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
};
export type VetRecordUpdateManyMutationInput = {
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetRecordUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vet_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetRecordListRelationFilter = {
    every?: Prisma.VetRecordWhereInput;
    some?: Prisma.VetRecordWhereInput;
    none?: Prisma.VetRecordWhereInput;
};
export type VetRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VetRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    vet_id?: Prisma.SortOrder;
    vet_name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type VetRecordAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    vet_id?: Prisma.SortOrder;
};
export type VetRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    vet_id?: Prisma.SortOrder;
    vet_name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type VetRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    vet_id?: Prisma.SortOrder;
    vet_name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type VetRecordSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    vet_id?: Prisma.SortOrder;
};
export type VetRecordCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutPetInput, Prisma.VetRecordUncheckedCreateWithoutPetInput> | Prisma.VetRecordCreateWithoutPetInput[] | Prisma.VetRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutPetInput | Prisma.VetRecordCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.VetRecordCreateManyPetInputEnvelope;
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
};
export type VetRecordUncheckedCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutPetInput, Prisma.VetRecordUncheckedCreateWithoutPetInput> | Prisma.VetRecordCreateWithoutPetInput[] | Prisma.VetRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutPetInput | Prisma.VetRecordCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.VetRecordCreateManyPetInputEnvelope;
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
};
export type VetRecordUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutPetInput, Prisma.VetRecordUncheckedCreateWithoutPetInput> | Prisma.VetRecordCreateWithoutPetInput[] | Prisma.VetRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutPetInput | Prisma.VetRecordCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.VetRecordUpsertWithWhereUniqueWithoutPetInput | Prisma.VetRecordUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.VetRecordCreateManyPetInputEnvelope;
    set?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    disconnect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    delete?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    update?: Prisma.VetRecordUpdateWithWhereUniqueWithoutPetInput | Prisma.VetRecordUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.VetRecordUpdateManyWithWhereWithoutPetInput | Prisma.VetRecordUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.VetRecordScalarWhereInput | Prisma.VetRecordScalarWhereInput[];
};
export type VetRecordUncheckedUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutPetInput, Prisma.VetRecordUncheckedCreateWithoutPetInput> | Prisma.VetRecordCreateWithoutPetInput[] | Prisma.VetRecordUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutPetInput | Prisma.VetRecordCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.VetRecordUpsertWithWhereUniqueWithoutPetInput | Prisma.VetRecordUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.VetRecordCreateManyPetInputEnvelope;
    set?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    disconnect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    delete?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    update?: Prisma.VetRecordUpdateWithWhereUniqueWithoutPetInput | Prisma.VetRecordUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.VetRecordUpdateManyWithWhereWithoutPetInput | Prisma.VetRecordUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.VetRecordScalarWhereInput | Prisma.VetRecordScalarWhereInput[];
};
export type VetRecordCreateNestedManyWithoutVetInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutVetInput, Prisma.VetRecordUncheckedCreateWithoutVetInput> | Prisma.VetRecordCreateWithoutVetInput[] | Prisma.VetRecordUncheckedCreateWithoutVetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutVetInput | Prisma.VetRecordCreateOrConnectWithoutVetInput[];
    createMany?: Prisma.VetRecordCreateManyVetInputEnvelope;
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
};
export type VetRecordUncheckedCreateNestedManyWithoutVetInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutVetInput, Prisma.VetRecordUncheckedCreateWithoutVetInput> | Prisma.VetRecordCreateWithoutVetInput[] | Prisma.VetRecordUncheckedCreateWithoutVetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutVetInput | Prisma.VetRecordCreateOrConnectWithoutVetInput[];
    createMany?: Prisma.VetRecordCreateManyVetInputEnvelope;
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
};
export type VetRecordUpdateManyWithoutVetNestedInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutVetInput, Prisma.VetRecordUncheckedCreateWithoutVetInput> | Prisma.VetRecordCreateWithoutVetInput[] | Prisma.VetRecordUncheckedCreateWithoutVetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutVetInput | Prisma.VetRecordCreateOrConnectWithoutVetInput[];
    upsert?: Prisma.VetRecordUpsertWithWhereUniqueWithoutVetInput | Prisma.VetRecordUpsertWithWhereUniqueWithoutVetInput[];
    createMany?: Prisma.VetRecordCreateManyVetInputEnvelope;
    set?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    disconnect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    delete?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    update?: Prisma.VetRecordUpdateWithWhereUniqueWithoutVetInput | Prisma.VetRecordUpdateWithWhereUniqueWithoutVetInput[];
    updateMany?: Prisma.VetRecordUpdateManyWithWhereWithoutVetInput | Prisma.VetRecordUpdateManyWithWhereWithoutVetInput[];
    deleteMany?: Prisma.VetRecordScalarWhereInput | Prisma.VetRecordScalarWhereInput[];
};
export type VetRecordUncheckedUpdateManyWithoutVetNestedInput = {
    create?: Prisma.XOR<Prisma.VetRecordCreateWithoutVetInput, Prisma.VetRecordUncheckedCreateWithoutVetInput> | Prisma.VetRecordCreateWithoutVetInput[] | Prisma.VetRecordUncheckedCreateWithoutVetInput[];
    connectOrCreate?: Prisma.VetRecordCreateOrConnectWithoutVetInput | Prisma.VetRecordCreateOrConnectWithoutVetInput[];
    upsert?: Prisma.VetRecordUpsertWithWhereUniqueWithoutVetInput | Prisma.VetRecordUpsertWithWhereUniqueWithoutVetInput[];
    createMany?: Prisma.VetRecordCreateManyVetInputEnvelope;
    set?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    disconnect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    delete?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    connect?: Prisma.VetRecordWhereUniqueInput | Prisma.VetRecordWhereUniqueInput[];
    update?: Prisma.VetRecordUpdateWithWhereUniqueWithoutVetInput | Prisma.VetRecordUpdateWithWhereUniqueWithoutVetInput[];
    updateMany?: Prisma.VetRecordUpdateManyWithWhereWithoutVetInput | Prisma.VetRecordUpdateManyWithWhereWithoutVetInput[];
    deleteMany?: Prisma.VetRecordScalarWhereInput | Prisma.VetRecordScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type VetRecordCreateWithoutPetInput = {
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
    vet?: Prisma.VetCreateNestedOneWithoutRecordsInput;
};
export type VetRecordUncheckedCreateWithoutPetInput = {
    id?: number;
    vet_id?: number | null;
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
};
export type VetRecordCreateOrConnectWithoutPetInput = {
    where: Prisma.VetRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.VetRecordCreateWithoutPetInput, Prisma.VetRecordUncheckedCreateWithoutPetInput>;
};
export type VetRecordCreateManyPetInputEnvelope = {
    data: Prisma.VetRecordCreateManyPetInput | Prisma.VetRecordCreateManyPetInput[];
};
export type VetRecordUpsertWithWhereUniqueWithoutPetInput = {
    where: Prisma.VetRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.VetRecordUpdateWithoutPetInput, Prisma.VetRecordUncheckedUpdateWithoutPetInput>;
    create: Prisma.XOR<Prisma.VetRecordCreateWithoutPetInput, Prisma.VetRecordUncheckedCreateWithoutPetInput>;
};
export type VetRecordUpdateWithWhereUniqueWithoutPetInput = {
    where: Prisma.VetRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.VetRecordUpdateWithoutPetInput, Prisma.VetRecordUncheckedUpdateWithoutPetInput>;
};
export type VetRecordUpdateManyWithWhereWithoutPetInput = {
    where: Prisma.VetRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.VetRecordUpdateManyMutationInput, Prisma.VetRecordUncheckedUpdateManyWithoutPetInput>;
};
export type VetRecordScalarWhereInput = {
    AND?: Prisma.VetRecordScalarWhereInput | Prisma.VetRecordScalarWhereInput[];
    OR?: Prisma.VetRecordScalarWhereInput[];
    NOT?: Prisma.VetRecordScalarWhereInput | Prisma.VetRecordScalarWhereInput[];
    id?: Prisma.IntFilter<"VetRecord"> | number;
    pet_id?: Prisma.IntFilter<"VetRecord"> | number;
    vet_id?: Prisma.IntNullableFilter<"VetRecord"> | number | null;
    vet_name?: Prisma.StringNullableFilter<"VetRecord"> | string | null;
    date?: Prisma.StringFilter<"VetRecord"> | string;
    type?: Prisma.StringFilter<"VetRecord"> | string;
    notes?: Prisma.StringNullableFilter<"VetRecord"> | string | null;
    status?: Prisma.StringFilter<"VetRecord"> | string;
};
export type VetRecordCreateWithoutVetInput = {
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
    pet: Prisma.PetCreateNestedOneWithoutVet_recordsInput;
};
export type VetRecordUncheckedCreateWithoutVetInput = {
    id?: number;
    pet_id: number;
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
};
export type VetRecordCreateOrConnectWithoutVetInput = {
    where: Prisma.VetRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.VetRecordCreateWithoutVetInput, Prisma.VetRecordUncheckedCreateWithoutVetInput>;
};
export type VetRecordCreateManyVetInputEnvelope = {
    data: Prisma.VetRecordCreateManyVetInput | Prisma.VetRecordCreateManyVetInput[];
};
export type VetRecordUpsertWithWhereUniqueWithoutVetInput = {
    where: Prisma.VetRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.VetRecordUpdateWithoutVetInput, Prisma.VetRecordUncheckedUpdateWithoutVetInput>;
    create: Prisma.XOR<Prisma.VetRecordCreateWithoutVetInput, Prisma.VetRecordUncheckedCreateWithoutVetInput>;
};
export type VetRecordUpdateWithWhereUniqueWithoutVetInput = {
    where: Prisma.VetRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.VetRecordUpdateWithoutVetInput, Prisma.VetRecordUncheckedUpdateWithoutVetInput>;
};
export type VetRecordUpdateManyWithWhereWithoutVetInput = {
    where: Prisma.VetRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.VetRecordUpdateManyMutationInput, Prisma.VetRecordUncheckedUpdateManyWithoutVetInput>;
};
export type VetRecordCreateManyPetInput = {
    id?: number;
    vet_id?: number | null;
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
};
export type VetRecordUpdateWithoutPetInput = {
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    vet?: Prisma.VetUpdateOneWithoutRecordsNestedInput;
};
export type VetRecordUncheckedUpdateWithoutPetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    vet_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetRecordUncheckedUpdateManyWithoutPetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    vet_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetRecordCreateManyVetInput = {
    id?: number;
    pet_id: number;
    vet_name?: string | null;
    date: string;
    type: string;
    notes?: string | null;
    status?: string;
};
export type VetRecordUpdateWithoutVetInput = {
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pet?: Prisma.PetUpdateOneRequiredWithoutVet_recordsNestedInput;
};
export type VetRecordUncheckedUpdateWithoutVetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetRecordUncheckedUpdateManyWithoutVetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    vet_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    vet_id?: boolean;
    vet_name?: boolean;
    date?: boolean;
    type?: boolean;
    notes?: boolean;
    status?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
    vet?: boolean | Prisma.VetRecord$vetArgs<ExtArgs>;
}, ExtArgs["result"]["vetRecord"]>;
export type VetRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    vet_id?: boolean;
    vet_name?: boolean;
    date?: boolean;
    type?: boolean;
    notes?: boolean;
    status?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
    vet?: boolean | Prisma.VetRecord$vetArgs<ExtArgs>;
}, ExtArgs["result"]["vetRecord"]>;
export type VetRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    vet_id?: boolean;
    vet_name?: boolean;
    date?: boolean;
    type?: boolean;
    notes?: boolean;
    status?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
    vet?: boolean | Prisma.VetRecord$vetArgs<ExtArgs>;
}, ExtArgs["result"]["vetRecord"]>;
export type VetRecordSelectScalar = {
    id?: boolean;
    pet_id?: boolean;
    vet_id?: boolean;
    vet_name?: boolean;
    date?: boolean;
    type?: boolean;
    notes?: boolean;
    status?: boolean;
};
export type VetRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pet_id" | "vet_id" | "vet_name" | "date" | "type" | "notes" | "status", ExtArgs["result"]["vetRecord"]>;
export type VetRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
    vet?: boolean | Prisma.VetRecord$vetArgs<ExtArgs>;
};
export type VetRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
    vet?: boolean | Prisma.VetRecord$vetArgs<ExtArgs>;
};
export type VetRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
    vet?: boolean | Prisma.VetRecord$vetArgs<ExtArgs>;
};
export type $VetRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VetRecord";
    objects: {
        pet: Prisma.$PetPayload<ExtArgs>;
        vet: Prisma.$VetPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pet_id: number;
        vet_id: number | null;
        vet_name: string | null;
        date: string;
        type: string;
        notes: string | null;
        status: string;
    }, ExtArgs["result"]["vetRecord"]>;
    composites: {};
};
export type VetRecordGetPayload<S extends boolean | null | undefined | VetRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VetRecordPayload, S>;
export type VetRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VetRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VetRecordCountAggregateInputType | true;
};
export interface VetRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VetRecord'];
        meta: {
            name: 'VetRecord';
        };
    };
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
    findUnique<T extends VetRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, VetRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends VetRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VetRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends VetRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, VetRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends VetRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VetRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends VetRecordFindManyArgs>(args?: Prisma.SelectSubset<T, VetRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends VetRecordCreateArgs>(args: Prisma.SelectSubset<T, VetRecordCreateArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends VetRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, VetRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends VetRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VetRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends VetRecordDeleteArgs>(args: Prisma.SelectSubset<T, VetRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends VetRecordUpdateArgs>(args: Prisma.SelectSubset<T, VetRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends VetRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, VetRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends VetRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, VetRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends VetRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VetRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends VetRecordUpsertArgs>(args: Prisma.SelectSubset<T, VetRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__VetRecordClient<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends VetRecordCountArgs>(args?: Prisma.Subset<T, VetRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VetRecordCountAggregateOutputType> : number>;
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
    aggregate<T extends VetRecordAggregateArgs>(args: Prisma.Subset<T, VetRecordAggregateArgs>): Prisma.PrismaPromise<GetVetRecordAggregateType<T>>;
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
    groupBy<T extends VetRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VetRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: VetRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VetRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__VetRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pet<T extends Prisma.PetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PetDefaultArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vet<T extends Prisma.VetRecord$vetArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VetRecord$vetArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the VetRecord model
 */
export interface VetRecordFieldRefs {
    readonly id: Prisma.FieldRef<"VetRecord", 'Int'>;
    readonly pet_id: Prisma.FieldRef<"VetRecord", 'Int'>;
    readonly vet_id: Prisma.FieldRef<"VetRecord", 'Int'>;
    readonly vet_name: Prisma.FieldRef<"VetRecord", 'String'>;
    readonly date: Prisma.FieldRef<"VetRecord", 'String'>;
    readonly type: Prisma.FieldRef<"VetRecord", 'String'>;
    readonly notes: Prisma.FieldRef<"VetRecord", 'String'>;
    readonly status: Prisma.FieldRef<"VetRecord", 'String'>;
}
/**
 * VetRecord findUnique
 */
export type VetRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VetRecord to fetch.
     */
    where: Prisma.VetRecordWhereUniqueInput;
};
/**
 * VetRecord findUniqueOrThrow
 */
export type VetRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VetRecord to fetch.
     */
    where: Prisma.VetRecordWhereUniqueInput;
};
/**
 * VetRecord findFirst
 */
export type VetRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VetRecord to fetch.
     */
    where?: Prisma.VetRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: Prisma.VetRecordOrderByWithRelationInput | Prisma.VetRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VetRecords.
     */
    cursor?: Prisma.VetRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VetRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VetRecords.
     */
    distinct?: Prisma.VetRecordScalarFieldEnum | Prisma.VetRecordScalarFieldEnum[];
};
/**
 * VetRecord findFirstOrThrow
 */
export type VetRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VetRecord to fetch.
     */
    where?: Prisma.VetRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: Prisma.VetRecordOrderByWithRelationInput | Prisma.VetRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VetRecords.
     */
    cursor?: Prisma.VetRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VetRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VetRecords.
     */
    distinct?: Prisma.VetRecordScalarFieldEnum | Prisma.VetRecordScalarFieldEnum[];
};
/**
 * VetRecord findMany
 */
export type VetRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which VetRecords to fetch.
     */
    where?: Prisma.VetRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VetRecords to fetch.
     */
    orderBy?: Prisma.VetRecordOrderByWithRelationInput | Prisma.VetRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VetRecords.
     */
    cursor?: Prisma.VetRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VetRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VetRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VetRecords.
     */
    distinct?: Prisma.VetRecordScalarFieldEnum | Prisma.VetRecordScalarFieldEnum[];
};
/**
 * VetRecord create
 */
export type VetRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a VetRecord.
     */
    data: Prisma.XOR<Prisma.VetRecordCreateInput, Prisma.VetRecordUncheckedCreateInput>;
};
/**
 * VetRecord createMany
 */
export type VetRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VetRecords.
     */
    data: Prisma.VetRecordCreateManyInput | Prisma.VetRecordCreateManyInput[];
};
/**
 * VetRecord createManyAndReturn
 */
export type VetRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: Prisma.VetRecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: Prisma.VetRecordOmit<ExtArgs> | null;
    /**
     * The data used to create many VetRecords.
     */
    data: Prisma.VetRecordCreateManyInput | Prisma.VetRecordCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VetRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * VetRecord update
 */
export type VetRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a VetRecord.
     */
    data: Prisma.XOR<Prisma.VetRecordUpdateInput, Prisma.VetRecordUncheckedUpdateInput>;
    /**
     * Choose, which VetRecord to update.
     */
    where: Prisma.VetRecordWhereUniqueInput;
};
/**
 * VetRecord updateMany
 */
export type VetRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VetRecords.
     */
    data: Prisma.XOR<Prisma.VetRecordUpdateManyMutationInput, Prisma.VetRecordUncheckedUpdateManyInput>;
    /**
     * Filter which VetRecords to update
     */
    where?: Prisma.VetRecordWhereInput;
    /**
     * Limit how many VetRecords to update.
     */
    limit?: number;
};
/**
 * VetRecord updateManyAndReturn
 */
export type VetRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetRecord
     */
    select?: Prisma.VetRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VetRecord
     */
    omit?: Prisma.VetRecordOmit<ExtArgs> | null;
    /**
     * The data used to update VetRecords.
     */
    data: Prisma.XOR<Prisma.VetRecordUpdateManyMutationInput, Prisma.VetRecordUncheckedUpdateManyInput>;
    /**
     * Filter which VetRecords to update
     */
    where?: Prisma.VetRecordWhereInput;
    /**
     * Limit how many VetRecords to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VetRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * VetRecord upsert
 */
export type VetRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the VetRecord to update in case it exists.
     */
    where: Prisma.VetRecordWhereUniqueInput;
    /**
     * In case the VetRecord found by the `where` argument doesn't exist, create a new VetRecord with this data.
     */
    create: Prisma.XOR<Prisma.VetRecordCreateInput, Prisma.VetRecordUncheckedCreateInput>;
    /**
     * In case the VetRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VetRecordUpdateInput, Prisma.VetRecordUncheckedUpdateInput>;
};
/**
 * VetRecord delete
 */
export type VetRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which VetRecord to delete.
     */
    where: Prisma.VetRecordWhereUniqueInput;
};
/**
 * VetRecord deleteMany
 */
export type VetRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VetRecords to delete
     */
    where?: Prisma.VetRecordWhereInput;
    /**
     * Limit how many VetRecords to delete.
     */
    limit?: number;
};
/**
 * VetRecord.vet
 */
export type VetRecord$vetArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: Prisma.VetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vet
     */
    omit?: Prisma.VetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VetInclude<ExtArgs> | null;
    where?: Prisma.VetWhereInput;
};
/**
 * VetRecord without action
 */
export type VetRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=VetRecord.d.ts.map