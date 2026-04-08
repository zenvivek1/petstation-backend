import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Vet
 *
 */
export type VetModel = runtime.Types.Result.DefaultSelection<Prisma.$VetPayload>;
export type AggregateVet = {
    _count: VetCountAggregateOutputType | null;
    _avg: VetAvgAggregateOutputType | null;
    _sum: VetSumAggregateOutputType | null;
    _min: VetMinAggregateOutputType | null;
    _max: VetMaxAggregateOutputType | null;
};
export type VetAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type VetSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type VetMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    name: string | null;
    clinic: string | null;
    phone: string | null;
    address: string | null;
    specialty: string | null;
};
export type VetMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    name: string | null;
    clinic: string | null;
    phone: string | null;
    address: string | null;
    specialty: string | null;
};
export type VetCountAggregateOutputType = {
    id: number;
    user_id: number;
    name: number;
    clinic: number;
    phone: number;
    address: number;
    specialty: number;
    _all: number;
};
export type VetAvgAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type VetSumAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type VetMinAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    clinic?: true;
    phone?: true;
    address?: true;
    specialty?: true;
};
export type VetMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    clinic?: true;
    phone?: true;
    address?: true;
    specialty?: true;
};
export type VetCountAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    clinic?: true;
    phone?: true;
    address?: true;
    specialty?: true;
    _all?: true;
};
export type VetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Vet to aggregate.
     */
    where?: Prisma.VetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vets to fetch.
     */
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Vets
    **/
    _count?: true | VetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: VetAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: VetSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VetMaxAggregateInputType;
};
export type GetVetAggregateType<T extends VetAggregateArgs> = {
    [P in keyof T & keyof AggregateVet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVet[P]> : Prisma.GetScalarType<T[P], AggregateVet[P]>;
};
export type VetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VetWhereInput;
    orderBy?: Prisma.VetOrderByWithAggregationInput | Prisma.VetOrderByWithAggregationInput[];
    by: Prisma.VetScalarFieldEnum[] | Prisma.VetScalarFieldEnum;
    having?: Prisma.VetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VetCountAggregateInputType | true;
    _avg?: VetAvgAggregateInputType;
    _sum?: VetSumAggregateInputType;
    _min?: VetMinAggregateInputType;
    _max?: VetMaxAggregateInputType;
};
export type VetGroupByOutputType = {
    id: number;
    user_id: number;
    name: string;
    clinic: string | null;
    phone: string | null;
    address: string | null;
    specialty: string;
    _count: VetCountAggregateOutputType | null;
    _avg: VetAvgAggregateOutputType | null;
    _sum: VetSumAggregateOutputType | null;
    _min: VetMinAggregateOutputType | null;
    _max: VetMaxAggregateOutputType | null;
};
export type GetVetGroupByPayload<T extends VetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VetGroupByOutputType[P]>;
}>>;
export type VetWhereInput = {
    AND?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    OR?: Prisma.VetWhereInput[];
    NOT?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    id?: Prisma.IntFilter<"Vet"> | number;
    user_id?: Prisma.IntFilter<"Vet"> | number;
    name?: Prisma.StringFilter<"Vet"> | string;
    clinic?: Prisma.StringNullableFilter<"Vet"> | string | null;
    phone?: Prisma.StringNullableFilter<"Vet"> | string | null;
    address?: Prisma.StringNullableFilter<"Vet"> | string | null;
    specialty?: Prisma.StringFilter<"Vet"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    records?: Prisma.VetRecordListRelationFilter;
};
export type VetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clinic?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    records?: Prisma.VetRecordOrderByRelationAggregateInput;
};
export type VetWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    OR?: Prisma.VetWhereInput[];
    NOT?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    user_id?: Prisma.IntFilter<"Vet"> | number;
    name?: Prisma.StringFilter<"Vet"> | string;
    clinic?: Prisma.StringNullableFilter<"Vet"> | string | null;
    phone?: Prisma.StringNullableFilter<"Vet"> | string | null;
    address?: Prisma.StringNullableFilter<"Vet"> | string | null;
    specialty?: Prisma.StringFilter<"Vet"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    records?: Prisma.VetRecordListRelationFilter;
}, "id">;
export type VetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clinic?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
    _count?: Prisma.VetCountOrderByAggregateInput;
    _avg?: Prisma.VetAvgOrderByAggregateInput;
    _max?: Prisma.VetMaxOrderByAggregateInput;
    _min?: Prisma.VetMinOrderByAggregateInput;
    _sum?: Prisma.VetSumOrderByAggregateInput;
};
export type VetScalarWhereWithAggregatesInput = {
    AND?: Prisma.VetScalarWhereWithAggregatesInput | Prisma.VetScalarWhereWithAggregatesInput[];
    OR?: Prisma.VetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VetScalarWhereWithAggregatesInput | Prisma.VetScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Vet"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"Vet"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Vet"> | string;
    clinic?: Prisma.StringNullableWithAggregatesFilter<"Vet"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Vet"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Vet"> | string | null;
    specialty?: Prisma.StringWithAggregatesFilter<"Vet"> | string;
};
export type VetCreateInput = {
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
    user: Prisma.UserCreateNestedOneWithoutVetsInput;
    records?: Prisma.VetRecordCreateNestedManyWithoutVetInput;
};
export type VetUncheckedCreateInput = {
    id?: number;
    user_id: number;
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
    records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutVetInput;
};
export type VetUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVetsNestedInput;
    records?: Prisma.VetRecordUpdateManyWithoutVetNestedInput;
};
export type VetUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
    records?: Prisma.VetRecordUncheckedUpdateManyWithoutVetNestedInput;
};
export type VetCreateManyInput = {
    id?: number;
    user_id: number;
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
};
export type VetUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetListRelationFilter = {
    every?: Prisma.VetWhereInput;
    some?: Prisma.VetWhereInput;
    none?: Prisma.VetWhereInput;
};
export type VetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clinic?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
};
export type VetAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type VetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clinic?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
};
export type VetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    clinic?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
};
export type VetSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type VetNullableScalarRelationFilter = {
    is?: Prisma.VetWhereInput | null;
    isNot?: Prisma.VetWhereInput | null;
};
export type VetCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput> | Prisma.VetCreateWithoutUserInput[] | Prisma.VetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput | Prisma.VetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.VetCreateManyUserInputEnvelope;
    connect?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
};
export type VetUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput> | Prisma.VetCreateWithoutUserInput[] | Prisma.VetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput | Prisma.VetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.VetCreateManyUserInputEnvelope;
    connect?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
};
export type VetUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput> | Prisma.VetCreateWithoutUserInput[] | Prisma.VetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput | Prisma.VetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.VetUpsertWithWhereUniqueWithoutUserInput | Prisma.VetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.VetCreateManyUserInputEnvelope;
    set?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    disconnect?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    delete?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    connect?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    update?: Prisma.VetUpdateWithWhereUniqueWithoutUserInput | Prisma.VetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.VetUpdateManyWithWhereWithoutUserInput | Prisma.VetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.VetScalarWhereInput | Prisma.VetScalarWhereInput[];
};
export type VetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput> | Prisma.VetCreateWithoutUserInput[] | Prisma.VetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput | Prisma.VetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.VetUpsertWithWhereUniqueWithoutUserInput | Prisma.VetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.VetCreateManyUserInputEnvelope;
    set?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    disconnect?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    delete?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    connect?: Prisma.VetWhereUniqueInput | Prisma.VetWhereUniqueInput[];
    update?: Prisma.VetUpdateWithWhereUniqueWithoutUserInput | Prisma.VetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.VetUpdateManyWithWhereWithoutUserInput | Prisma.VetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.VetScalarWhereInput | Prisma.VetScalarWhereInput[];
};
export type VetCreateNestedOneWithoutRecordsInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutRecordsInput, Prisma.VetUncheckedCreateWithoutRecordsInput>;
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutRecordsInput;
    connect?: Prisma.VetWhereUniqueInput;
};
export type VetUpdateOneWithoutRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutRecordsInput, Prisma.VetUncheckedCreateWithoutRecordsInput>;
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutRecordsInput;
    upsert?: Prisma.VetUpsertWithoutRecordsInput;
    disconnect?: Prisma.VetWhereInput | boolean;
    delete?: Prisma.VetWhereInput | boolean;
    connect?: Prisma.VetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VetUpdateToOneWithWhereWithoutRecordsInput, Prisma.VetUpdateWithoutRecordsInput>, Prisma.VetUncheckedUpdateWithoutRecordsInput>;
};
export type VetCreateWithoutUserInput = {
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
    records?: Prisma.VetRecordCreateNestedManyWithoutVetInput;
};
export type VetUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
    records?: Prisma.VetRecordUncheckedCreateNestedManyWithoutVetInput;
};
export type VetCreateOrConnectWithoutUserInput = {
    where: Prisma.VetWhereUniqueInput;
    create: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
};
export type VetCreateManyUserInputEnvelope = {
    data: Prisma.VetCreateManyUserInput | Prisma.VetCreateManyUserInput[];
};
export type VetUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.VetWhereUniqueInput;
    update: Prisma.XOR<Prisma.VetUpdateWithoutUserInput, Prisma.VetUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
};
export type VetUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.VetWhereUniqueInput;
    data: Prisma.XOR<Prisma.VetUpdateWithoutUserInput, Prisma.VetUncheckedUpdateWithoutUserInput>;
};
export type VetUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.VetScalarWhereInput;
    data: Prisma.XOR<Prisma.VetUpdateManyMutationInput, Prisma.VetUncheckedUpdateManyWithoutUserInput>;
};
export type VetScalarWhereInput = {
    AND?: Prisma.VetScalarWhereInput | Prisma.VetScalarWhereInput[];
    OR?: Prisma.VetScalarWhereInput[];
    NOT?: Prisma.VetScalarWhereInput | Prisma.VetScalarWhereInput[];
    id?: Prisma.IntFilter<"Vet"> | number;
    user_id?: Prisma.IntFilter<"Vet"> | number;
    name?: Prisma.StringFilter<"Vet"> | string;
    clinic?: Prisma.StringNullableFilter<"Vet"> | string | null;
    phone?: Prisma.StringNullableFilter<"Vet"> | string | null;
    address?: Prisma.StringNullableFilter<"Vet"> | string | null;
    specialty?: Prisma.StringFilter<"Vet"> | string;
};
export type VetCreateWithoutRecordsInput = {
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
    user: Prisma.UserCreateNestedOneWithoutVetsInput;
};
export type VetUncheckedCreateWithoutRecordsInput = {
    id?: number;
    user_id: number;
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
};
export type VetCreateOrConnectWithoutRecordsInput = {
    where: Prisma.VetWhereUniqueInput;
    create: Prisma.XOR<Prisma.VetCreateWithoutRecordsInput, Prisma.VetUncheckedCreateWithoutRecordsInput>;
};
export type VetUpsertWithoutRecordsInput = {
    update: Prisma.XOR<Prisma.VetUpdateWithoutRecordsInput, Prisma.VetUncheckedUpdateWithoutRecordsInput>;
    create: Prisma.XOR<Prisma.VetCreateWithoutRecordsInput, Prisma.VetUncheckedCreateWithoutRecordsInput>;
    where?: Prisma.VetWhereInput;
};
export type VetUpdateToOneWithWhereWithoutRecordsInput = {
    where?: Prisma.VetWhereInput;
    data: Prisma.XOR<Prisma.VetUpdateWithoutRecordsInput, Prisma.VetUncheckedUpdateWithoutRecordsInput>;
};
export type VetUpdateWithoutRecordsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVetsNestedInput;
};
export type VetUncheckedUpdateWithoutRecordsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetCreateManyUserInput = {
    id?: number;
    name: string;
    clinic?: string | null;
    phone?: string | null;
    address?: string | null;
    specialty?: string;
};
export type VetUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
    records?: Prisma.VetRecordUpdateManyWithoutVetNestedInput;
};
export type VetUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
    records?: Prisma.VetRecordUncheckedUpdateManyWithoutVetNestedInput;
};
export type VetUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialty?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type VetCountOutputType
 */
export type VetCountOutputType = {
    records: number;
};
export type VetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    records?: boolean | VetCountOutputTypeCountRecordsArgs;
};
/**
 * VetCountOutputType without action
 */
export type VetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VetCountOutputType
     */
    select?: Prisma.VetCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VetCountOutputType without action
 */
export type VetCountOutputTypeCountRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VetRecordWhereInput;
};
export type VetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    clinic?: boolean;
    phone?: boolean;
    address?: boolean;
    specialty?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    records?: boolean | Prisma.Vet$recordsArgs<ExtArgs>;
    _count?: boolean | Prisma.VetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vet"]>;
export type VetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    clinic?: boolean;
    phone?: boolean;
    address?: boolean;
    specialty?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vet"]>;
export type VetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    clinic?: boolean;
    phone?: boolean;
    address?: boolean;
    specialty?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vet"]>;
export type VetSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    clinic?: boolean;
    phone?: boolean;
    address?: boolean;
    specialty?: boolean;
};
export type VetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "name" | "clinic" | "phone" | "address" | "specialty", ExtArgs["result"]["vet"]>;
export type VetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    records?: boolean | Prisma.Vet$recordsArgs<ExtArgs>;
    _count?: boolean | Prisma.VetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vet";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        records: Prisma.$VetRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number;
        name: string;
        clinic: string | null;
        phone: string | null;
        address: string | null;
        specialty: string;
    }, ExtArgs["result"]["vet"]>;
    composites: {};
};
export type VetGetPayload<S extends boolean | null | undefined | VetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VetPayload, S>;
export type VetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VetCountAggregateInputType | true;
};
export interface VetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vet'];
        meta: {
            name: 'Vet';
        };
    };
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
    findUnique<T extends VetFindUniqueArgs>(args: Prisma.SelectSubset<T, VetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends VetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends VetFindFirstArgs>(args?: Prisma.SelectSubset<T, VetFindFirstArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends VetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends VetFindManyArgs>(args?: Prisma.SelectSubset<T, VetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends VetCreateArgs>(args: Prisma.SelectSubset<T, VetCreateArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends VetCreateManyArgs>(args?: Prisma.SelectSubset<T, VetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends VetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends VetDeleteArgs>(args: Prisma.SelectSubset<T, VetDeleteArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends VetUpdateArgs>(args: Prisma.SelectSubset<T, VetUpdateArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends VetDeleteManyArgs>(args?: Prisma.SelectSubset<T, VetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends VetUpdateManyArgs>(args: Prisma.SelectSubset<T, VetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends VetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends VetUpsertArgs>(args: Prisma.SelectSubset<T, VetUpsertArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends VetCountArgs>(args?: Prisma.Subset<T, VetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VetCountAggregateOutputType> : number>;
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
    aggregate<T extends VetAggregateArgs>(args: Prisma.Subset<T, VetAggregateArgs>): Prisma.PrismaPromise<GetVetAggregateType<T>>;
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
    groupBy<T extends VetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VetGroupByArgs['orderBy'];
    } : {
        orderBy?: VetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__VetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    records<T extends Prisma.Vet$recordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vet$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Vet model
 */
export interface VetFieldRefs {
    readonly id: Prisma.FieldRef<"Vet", 'Int'>;
    readonly user_id: Prisma.FieldRef<"Vet", 'Int'>;
    readonly name: Prisma.FieldRef<"Vet", 'String'>;
    readonly clinic: Prisma.FieldRef<"Vet", 'String'>;
    readonly phone: Prisma.FieldRef<"Vet", 'String'>;
    readonly address: Prisma.FieldRef<"Vet", 'String'>;
    readonly specialty: Prisma.FieldRef<"Vet", 'String'>;
}
/**
 * Vet findUnique
 */
export type VetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Vet to fetch.
     */
    where: Prisma.VetWhereUniqueInput;
};
/**
 * Vet findUniqueOrThrow
 */
export type VetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Vet to fetch.
     */
    where: Prisma.VetWhereUniqueInput;
};
/**
 * Vet findFirst
 */
export type VetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Vet to fetch.
     */
    where?: Prisma.VetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vets to fetch.
     */
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vets.
     */
    cursor?: Prisma.VetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vets.
     */
    distinct?: Prisma.VetScalarFieldEnum | Prisma.VetScalarFieldEnum[];
};
/**
 * Vet findFirstOrThrow
 */
export type VetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Vet to fetch.
     */
    where?: Prisma.VetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vets to fetch.
     */
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vets.
     */
    cursor?: Prisma.VetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vets.
     */
    distinct?: Prisma.VetScalarFieldEnum | Prisma.VetScalarFieldEnum[];
};
/**
 * Vet findMany
 */
export type VetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Vets to fetch.
     */
    where?: Prisma.VetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vets to fetch.
     */
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Vets.
     */
    cursor?: Prisma.VetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vets.
     */
    distinct?: Prisma.VetScalarFieldEnum | Prisma.VetScalarFieldEnum[];
};
/**
 * Vet create
 */
export type VetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Vet.
     */
    data: Prisma.XOR<Prisma.VetCreateInput, Prisma.VetUncheckedCreateInput>;
};
/**
 * Vet createMany
 */
export type VetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vets.
     */
    data: Prisma.VetCreateManyInput | Prisma.VetCreateManyInput[];
};
/**
 * Vet createManyAndReturn
 */
export type VetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: Prisma.VetSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Vet
     */
    omit?: Prisma.VetOmit<ExtArgs> | null;
    /**
     * The data used to create many Vets.
     */
    data: Prisma.VetCreateManyInput | Prisma.VetCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VetIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Vet update
 */
export type VetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Vet.
     */
    data: Prisma.XOR<Prisma.VetUpdateInput, Prisma.VetUncheckedUpdateInput>;
    /**
     * Choose, which Vet to update.
     */
    where: Prisma.VetWhereUniqueInput;
};
/**
 * Vet updateMany
 */
export type VetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Vets.
     */
    data: Prisma.XOR<Prisma.VetUpdateManyMutationInput, Prisma.VetUncheckedUpdateManyInput>;
    /**
     * Filter which Vets to update
     */
    where?: Prisma.VetWhereInput;
    /**
     * Limit how many Vets to update.
     */
    limit?: number;
};
/**
 * Vet updateManyAndReturn
 */
export type VetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vet
     */
    select?: Prisma.VetSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Vet
     */
    omit?: Prisma.VetOmit<ExtArgs> | null;
    /**
     * The data used to update Vets.
     */
    data: Prisma.XOR<Prisma.VetUpdateManyMutationInput, Prisma.VetUncheckedUpdateManyInput>;
    /**
     * Filter which Vets to update
     */
    where?: Prisma.VetWhereInput;
    /**
     * Limit how many Vets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Vet upsert
 */
export type VetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Vet to update in case it exists.
     */
    where: Prisma.VetWhereUniqueInput;
    /**
     * In case the Vet found by the `where` argument doesn't exist, create a new Vet with this data.
     */
    create: Prisma.XOR<Prisma.VetCreateInput, Prisma.VetUncheckedCreateInput>;
    /**
     * In case the Vet was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VetUpdateInput, Prisma.VetUncheckedUpdateInput>;
};
/**
 * Vet delete
 */
export type VetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Vet to delete.
     */
    where: Prisma.VetWhereUniqueInput;
};
/**
 * Vet deleteMany
 */
export type VetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Vets to delete
     */
    where?: Prisma.VetWhereInput;
    /**
     * Limit how many Vets to delete.
     */
    limit?: number;
};
/**
 * Vet.records
 */
export type Vet$recordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Vet without action
 */
export type VetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Vet.d.ts.map