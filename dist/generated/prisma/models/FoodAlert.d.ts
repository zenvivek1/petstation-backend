import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model FoodAlert
 *
 */
export type FoodAlertModel = runtime.Types.Result.DefaultSelection<Prisma.$FoodAlertPayload>;
export type AggregateFoodAlert = {
    _count: FoodAlertCountAggregateOutputType | null;
    _avg: FoodAlertAvgAggregateOutputType | null;
    _sum: FoodAlertSumAggregateOutputType | null;
    _min: FoodAlertMinAggregateOutputType | null;
    _max: FoodAlertMaxAggregateOutputType | null;
};
export type FoodAlertAvgAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
};
export type FoodAlertSumAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
};
export type FoodAlertMinAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    message: string | null;
    level: string | null;
    is_resolved: boolean | null;
    created_at: Date | null;
};
export type FoodAlertMaxAggregateOutputType = {
    id: number | null;
    pet_id: number | null;
    message: string | null;
    level: string | null;
    is_resolved: boolean | null;
    created_at: Date | null;
};
export type FoodAlertCountAggregateOutputType = {
    id: number;
    pet_id: number;
    message: number;
    level: number;
    is_resolved: number;
    created_at: number;
    _all: number;
};
export type FoodAlertAvgAggregateInputType = {
    id?: true;
    pet_id?: true;
};
export type FoodAlertSumAggregateInputType = {
    id?: true;
    pet_id?: true;
};
export type FoodAlertMinAggregateInputType = {
    id?: true;
    pet_id?: true;
    message?: true;
    level?: true;
    is_resolved?: true;
    created_at?: true;
};
export type FoodAlertMaxAggregateInputType = {
    id?: true;
    pet_id?: true;
    message?: true;
    level?: true;
    is_resolved?: true;
    created_at?: true;
};
export type FoodAlertCountAggregateInputType = {
    id?: true;
    pet_id?: true;
    message?: true;
    level?: true;
    is_resolved?: true;
    created_at?: true;
    _all?: true;
};
export type FoodAlertAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FoodAlert to aggregate.
     */
    where?: Prisma.FoodAlertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: Prisma.FoodAlertOrderByWithRelationInput | Prisma.FoodAlertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FoodAlertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FoodAlerts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FoodAlerts
    **/
    _count?: true | FoodAlertCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FoodAlertAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FoodAlertSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FoodAlertMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FoodAlertMaxAggregateInputType;
};
export type GetFoodAlertAggregateType<T extends FoodAlertAggregateArgs> = {
    [P in keyof T & keyof AggregateFoodAlert]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFoodAlert[P]> : Prisma.GetScalarType<T[P], AggregateFoodAlert[P]>;
};
export type FoodAlertGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodAlertWhereInput;
    orderBy?: Prisma.FoodAlertOrderByWithAggregationInput | Prisma.FoodAlertOrderByWithAggregationInput[];
    by: Prisma.FoodAlertScalarFieldEnum[] | Prisma.FoodAlertScalarFieldEnum;
    having?: Prisma.FoodAlertScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FoodAlertCountAggregateInputType | true;
    _avg?: FoodAlertAvgAggregateInputType;
    _sum?: FoodAlertSumAggregateInputType;
    _min?: FoodAlertMinAggregateInputType;
    _max?: FoodAlertMaxAggregateInputType;
};
export type FoodAlertGroupByOutputType = {
    id: number;
    pet_id: number;
    message: string;
    level: string;
    is_resolved: boolean;
    created_at: Date;
    _count: FoodAlertCountAggregateOutputType | null;
    _avg: FoodAlertAvgAggregateOutputType | null;
    _sum: FoodAlertSumAggregateOutputType | null;
    _min: FoodAlertMinAggregateOutputType | null;
    _max: FoodAlertMaxAggregateOutputType | null;
};
export type GetFoodAlertGroupByPayload<T extends FoodAlertGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FoodAlertGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FoodAlertGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FoodAlertGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FoodAlertGroupByOutputType[P]>;
}>>;
export type FoodAlertWhereInput = {
    AND?: Prisma.FoodAlertWhereInput | Prisma.FoodAlertWhereInput[];
    OR?: Prisma.FoodAlertWhereInput[];
    NOT?: Prisma.FoodAlertWhereInput | Prisma.FoodAlertWhereInput[];
    id?: Prisma.IntFilter<"FoodAlert"> | number;
    pet_id?: Prisma.IntFilter<"FoodAlert"> | number;
    message?: Prisma.StringFilter<"FoodAlert"> | string;
    level?: Prisma.StringFilter<"FoodAlert"> | string;
    is_resolved?: Prisma.BoolFilter<"FoodAlert"> | boolean;
    created_at?: Prisma.DateTimeFilter<"FoodAlert"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
};
export type FoodAlertOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    is_resolved?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    pet?: Prisma.PetOrderByWithRelationInput;
};
export type FoodAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FoodAlertWhereInput | Prisma.FoodAlertWhereInput[];
    OR?: Prisma.FoodAlertWhereInput[];
    NOT?: Prisma.FoodAlertWhereInput | Prisma.FoodAlertWhereInput[];
    pet_id?: Prisma.IntFilter<"FoodAlert"> | number;
    message?: Prisma.StringFilter<"FoodAlert"> | string;
    level?: Prisma.StringFilter<"FoodAlert"> | string;
    is_resolved?: Prisma.BoolFilter<"FoodAlert"> | boolean;
    created_at?: Prisma.DateTimeFilter<"FoodAlert"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
}, "id">;
export type FoodAlertOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    is_resolved?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.FoodAlertCountOrderByAggregateInput;
    _avg?: Prisma.FoodAlertAvgOrderByAggregateInput;
    _max?: Prisma.FoodAlertMaxOrderByAggregateInput;
    _min?: Prisma.FoodAlertMinOrderByAggregateInput;
    _sum?: Prisma.FoodAlertSumOrderByAggregateInput;
};
export type FoodAlertScalarWhereWithAggregatesInput = {
    AND?: Prisma.FoodAlertScalarWhereWithAggregatesInput | Prisma.FoodAlertScalarWhereWithAggregatesInput[];
    OR?: Prisma.FoodAlertScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FoodAlertScalarWhereWithAggregatesInput | Prisma.FoodAlertScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"FoodAlert"> | number;
    pet_id?: Prisma.IntWithAggregatesFilter<"FoodAlert"> | number;
    message?: Prisma.StringWithAggregatesFilter<"FoodAlert"> | string;
    level?: Prisma.StringWithAggregatesFilter<"FoodAlert"> | string;
    is_resolved?: Prisma.BoolWithAggregatesFilter<"FoodAlert"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"FoodAlert"> | Date | string;
};
export type FoodAlertCreateInput = {
    message: string;
    level?: string;
    is_resolved?: boolean;
    created_at?: Date | string;
    pet: Prisma.PetCreateNestedOneWithoutFood_alertsInput;
};
export type FoodAlertUncheckedCreateInput = {
    id?: number;
    pet_id: number;
    message: string;
    level?: string;
    is_resolved?: boolean;
    created_at?: Date | string;
};
export type FoodAlertUpdateInput = {
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    is_resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pet?: Prisma.PetUpdateOneRequiredWithoutFood_alertsNestedInput;
};
export type FoodAlertUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    is_resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodAlertCreateManyInput = {
    id?: number;
    pet_id: number;
    message: string;
    level?: string;
    is_resolved?: boolean;
    created_at?: Date | string;
};
export type FoodAlertUpdateManyMutationInput = {
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    is_resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodAlertUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    is_resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodAlertListRelationFilter = {
    every?: Prisma.FoodAlertWhereInput;
    some?: Prisma.FoodAlertWhereInput;
    none?: Prisma.FoodAlertWhereInput;
};
export type FoodAlertOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FoodAlertCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    is_resolved?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type FoodAlertAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
};
export type FoodAlertMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    is_resolved?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type FoodAlertMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    is_resolved?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type FoodAlertSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
};
export type FoodAlertCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.FoodAlertCreateWithoutPetInput, Prisma.FoodAlertUncheckedCreateWithoutPetInput> | Prisma.FoodAlertCreateWithoutPetInput[] | Prisma.FoodAlertUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodAlertCreateOrConnectWithoutPetInput | Prisma.FoodAlertCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.FoodAlertCreateManyPetInputEnvelope;
    connect?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
};
export type FoodAlertUncheckedCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.FoodAlertCreateWithoutPetInput, Prisma.FoodAlertUncheckedCreateWithoutPetInput> | Prisma.FoodAlertCreateWithoutPetInput[] | Prisma.FoodAlertUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodAlertCreateOrConnectWithoutPetInput | Prisma.FoodAlertCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.FoodAlertCreateManyPetInputEnvelope;
    connect?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
};
export type FoodAlertUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.FoodAlertCreateWithoutPetInput, Prisma.FoodAlertUncheckedCreateWithoutPetInput> | Prisma.FoodAlertCreateWithoutPetInput[] | Prisma.FoodAlertUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodAlertCreateOrConnectWithoutPetInput | Prisma.FoodAlertCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.FoodAlertUpsertWithWhereUniqueWithoutPetInput | Prisma.FoodAlertUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.FoodAlertCreateManyPetInputEnvelope;
    set?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    disconnect?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    delete?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    connect?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    update?: Prisma.FoodAlertUpdateWithWhereUniqueWithoutPetInput | Prisma.FoodAlertUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.FoodAlertUpdateManyWithWhereWithoutPetInput | Prisma.FoodAlertUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.FoodAlertScalarWhereInput | Prisma.FoodAlertScalarWhereInput[];
};
export type FoodAlertUncheckedUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.FoodAlertCreateWithoutPetInput, Prisma.FoodAlertUncheckedCreateWithoutPetInput> | Prisma.FoodAlertCreateWithoutPetInput[] | Prisma.FoodAlertUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodAlertCreateOrConnectWithoutPetInput | Prisma.FoodAlertCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.FoodAlertUpsertWithWhereUniqueWithoutPetInput | Prisma.FoodAlertUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.FoodAlertCreateManyPetInputEnvelope;
    set?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    disconnect?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    delete?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    connect?: Prisma.FoodAlertWhereUniqueInput | Prisma.FoodAlertWhereUniqueInput[];
    update?: Prisma.FoodAlertUpdateWithWhereUniqueWithoutPetInput | Prisma.FoodAlertUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.FoodAlertUpdateManyWithWhereWithoutPetInput | Prisma.FoodAlertUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.FoodAlertScalarWhereInput | Prisma.FoodAlertScalarWhereInput[];
};
export type FoodAlertCreateWithoutPetInput = {
    message: string;
    level?: string;
    is_resolved?: boolean;
    created_at?: Date | string;
};
export type FoodAlertUncheckedCreateWithoutPetInput = {
    id?: number;
    message: string;
    level?: string;
    is_resolved?: boolean;
    created_at?: Date | string;
};
export type FoodAlertCreateOrConnectWithoutPetInput = {
    where: Prisma.FoodAlertWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodAlertCreateWithoutPetInput, Prisma.FoodAlertUncheckedCreateWithoutPetInput>;
};
export type FoodAlertCreateManyPetInputEnvelope = {
    data: Prisma.FoodAlertCreateManyPetInput | Prisma.FoodAlertCreateManyPetInput[];
};
export type FoodAlertUpsertWithWhereUniqueWithoutPetInput = {
    where: Prisma.FoodAlertWhereUniqueInput;
    update: Prisma.XOR<Prisma.FoodAlertUpdateWithoutPetInput, Prisma.FoodAlertUncheckedUpdateWithoutPetInput>;
    create: Prisma.XOR<Prisma.FoodAlertCreateWithoutPetInput, Prisma.FoodAlertUncheckedCreateWithoutPetInput>;
};
export type FoodAlertUpdateWithWhereUniqueWithoutPetInput = {
    where: Prisma.FoodAlertWhereUniqueInput;
    data: Prisma.XOR<Prisma.FoodAlertUpdateWithoutPetInput, Prisma.FoodAlertUncheckedUpdateWithoutPetInput>;
};
export type FoodAlertUpdateManyWithWhereWithoutPetInput = {
    where: Prisma.FoodAlertScalarWhereInput;
    data: Prisma.XOR<Prisma.FoodAlertUpdateManyMutationInput, Prisma.FoodAlertUncheckedUpdateManyWithoutPetInput>;
};
export type FoodAlertScalarWhereInput = {
    AND?: Prisma.FoodAlertScalarWhereInput | Prisma.FoodAlertScalarWhereInput[];
    OR?: Prisma.FoodAlertScalarWhereInput[];
    NOT?: Prisma.FoodAlertScalarWhereInput | Prisma.FoodAlertScalarWhereInput[];
    id?: Prisma.IntFilter<"FoodAlert"> | number;
    pet_id?: Prisma.IntFilter<"FoodAlert"> | number;
    message?: Prisma.StringFilter<"FoodAlert"> | string;
    level?: Prisma.StringFilter<"FoodAlert"> | string;
    is_resolved?: Prisma.BoolFilter<"FoodAlert"> | boolean;
    created_at?: Prisma.DateTimeFilter<"FoodAlert"> | Date | string;
};
export type FoodAlertCreateManyPetInput = {
    id?: number;
    message: string;
    level?: string;
    is_resolved?: boolean;
    created_at?: Date | string;
};
export type FoodAlertUpdateWithoutPetInput = {
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    is_resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodAlertUncheckedUpdateWithoutPetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    is_resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodAlertUncheckedUpdateManyWithoutPetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    is_resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodAlertSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    message?: boolean;
    level?: boolean;
    is_resolved?: boolean;
    created_at?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodAlert"]>;
export type FoodAlertSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    message?: boolean;
    level?: boolean;
    is_resolved?: boolean;
    created_at?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodAlert"]>;
export type FoodAlertSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pet_id?: boolean;
    message?: boolean;
    level?: boolean;
    is_resolved?: boolean;
    created_at?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodAlert"]>;
export type FoodAlertSelectScalar = {
    id?: boolean;
    pet_id?: boolean;
    message?: boolean;
    level?: boolean;
    is_resolved?: boolean;
    created_at?: boolean;
};
export type FoodAlertOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pet_id" | "message" | "level" | "is_resolved" | "created_at", ExtArgs["result"]["foodAlert"]>;
export type FoodAlertInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type FoodAlertIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type FoodAlertIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type $FoodAlertPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FoodAlert";
    objects: {
        pet: Prisma.$PetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pet_id: number;
        message: string;
        level: string;
        is_resolved: boolean;
        created_at: Date;
    }, ExtArgs["result"]["foodAlert"]>;
    composites: {};
};
export type FoodAlertGetPayload<S extends boolean | null | undefined | FoodAlertDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload, S>;
export type FoodAlertCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FoodAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FoodAlertCountAggregateInputType | true;
};
export interface FoodAlertDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FoodAlert'];
        meta: {
            name: 'FoodAlert';
        };
    };
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
    findUnique<T extends FoodAlertFindUniqueArgs>(args: Prisma.SelectSubset<T, FoodAlertFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends FoodAlertFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FoodAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends FoodAlertFindFirstArgs>(args?: Prisma.SelectSubset<T, FoodAlertFindFirstArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends FoodAlertFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FoodAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends FoodAlertFindManyArgs>(args?: Prisma.SelectSubset<T, FoodAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends FoodAlertCreateArgs>(args: Prisma.SelectSubset<T, FoodAlertCreateArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends FoodAlertCreateManyArgs>(args?: Prisma.SelectSubset<T, FoodAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends FoodAlertCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FoodAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends FoodAlertDeleteArgs>(args: Prisma.SelectSubset<T, FoodAlertDeleteArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends FoodAlertUpdateArgs>(args: Prisma.SelectSubset<T, FoodAlertUpdateArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends FoodAlertDeleteManyArgs>(args?: Prisma.SelectSubset<T, FoodAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends FoodAlertUpdateManyArgs>(args: Prisma.SelectSubset<T, FoodAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends FoodAlertUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FoodAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends FoodAlertUpsertArgs>(args: Prisma.SelectSubset<T, FoodAlertUpsertArgs<ExtArgs>>): Prisma.Prisma__FoodAlertClient<runtime.Types.Result.GetResult<Prisma.$FoodAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends FoodAlertCountArgs>(args?: Prisma.Subset<T, FoodAlertCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FoodAlertCountAggregateOutputType> : number>;
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
    aggregate<T extends FoodAlertAggregateArgs>(args: Prisma.Subset<T, FoodAlertAggregateArgs>): Prisma.PrismaPromise<GetFoodAlertAggregateType<T>>;
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
    groupBy<T extends FoodAlertGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FoodAlertGroupByArgs['orderBy'];
    } : {
        orderBy?: FoodAlertGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FoodAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__FoodAlertClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the FoodAlert model
 */
export interface FoodAlertFieldRefs {
    readonly id: Prisma.FieldRef<"FoodAlert", 'Int'>;
    readonly pet_id: Prisma.FieldRef<"FoodAlert", 'Int'>;
    readonly message: Prisma.FieldRef<"FoodAlert", 'String'>;
    readonly level: Prisma.FieldRef<"FoodAlert", 'String'>;
    readonly is_resolved: Prisma.FieldRef<"FoodAlert", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"FoodAlert", 'DateTime'>;
}
/**
 * FoodAlert findUnique
 */
export type FoodAlertFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FoodAlert to fetch.
     */
    where: Prisma.FoodAlertWhereUniqueInput;
};
/**
 * FoodAlert findUniqueOrThrow
 */
export type FoodAlertFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FoodAlert to fetch.
     */
    where: Prisma.FoodAlertWhereUniqueInput;
};
/**
 * FoodAlert findFirst
 */
export type FoodAlertFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FoodAlert to fetch.
     */
    where?: Prisma.FoodAlertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: Prisma.FoodAlertOrderByWithRelationInput | Prisma.FoodAlertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FoodAlerts.
     */
    cursor?: Prisma.FoodAlertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FoodAlerts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FoodAlerts.
     */
    distinct?: Prisma.FoodAlertScalarFieldEnum | Prisma.FoodAlertScalarFieldEnum[];
};
/**
 * FoodAlert findFirstOrThrow
 */
export type FoodAlertFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FoodAlert to fetch.
     */
    where?: Prisma.FoodAlertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: Prisma.FoodAlertOrderByWithRelationInput | Prisma.FoodAlertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FoodAlerts.
     */
    cursor?: Prisma.FoodAlertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FoodAlerts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FoodAlerts.
     */
    distinct?: Prisma.FoodAlertScalarFieldEnum | Prisma.FoodAlertScalarFieldEnum[];
};
/**
 * FoodAlert findMany
 */
export type FoodAlertFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FoodAlerts to fetch.
     */
    where?: Prisma.FoodAlertWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FoodAlerts to fetch.
     */
    orderBy?: Prisma.FoodAlertOrderByWithRelationInput | Prisma.FoodAlertOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FoodAlerts.
     */
    cursor?: Prisma.FoodAlertWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FoodAlerts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FoodAlerts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FoodAlerts.
     */
    distinct?: Prisma.FoodAlertScalarFieldEnum | Prisma.FoodAlertScalarFieldEnum[];
};
/**
 * FoodAlert create
 */
export type FoodAlertCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a FoodAlert.
     */
    data: Prisma.XOR<Prisma.FoodAlertCreateInput, Prisma.FoodAlertUncheckedCreateInput>;
};
/**
 * FoodAlert createMany
 */
export type FoodAlertCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodAlerts.
     */
    data: Prisma.FoodAlertCreateManyInput | Prisma.FoodAlertCreateManyInput[];
};
/**
 * FoodAlert createManyAndReturn
 */
export type FoodAlertCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: Prisma.FoodAlertSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: Prisma.FoodAlertOmit<ExtArgs> | null;
    /**
     * The data used to create many FoodAlerts.
     */
    data: Prisma.FoodAlertCreateManyInput | Prisma.FoodAlertCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FoodAlertIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FoodAlert update
 */
export type FoodAlertUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a FoodAlert.
     */
    data: Prisma.XOR<Prisma.FoodAlertUpdateInput, Prisma.FoodAlertUncheckedUpdateInput>;
    /**
     * Choose, which FoodAlert to update.
     */
    where: Prisma.FoodAlertWhereUniqueInput;
};
/**
 * FoodAlert updateMany
 */
export type FoodAlertUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodAlerts.
     */
    data: Prisma.XOR<Prisma.FoodAlertUpdateManyMutationInput, Prisma.FoodAlertUncheckedUpdateManyInput>;
    /**
     * Filter which FoodAlerts to update
     */
    where?: Prisma.FoodAlertWhereInput;
    /**
     * Limit how many FoodAlerts to update.
     */
    limit?: number;
};
/**
 * FoodAlert updateManyAndReturn
 */
export type FoodAlertUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodAlert
     */
    select?: Prisma.FoodAlertSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FoodAlert
     */
    omit?: Prisma.FoodAlertOmit<ExtArgs> | null;
    /**
     * The data used to update FoodAlerts.
     */
    data: Prisma.XOR<Prisma.FoodAlertUpdateManyMutationInput, Prisma.FoodAlertUncheckedUpdateManyInput>;
    /**
     * Filter which FoodAlerts to update
     */
    where?: Prisma.FoodAlertWhereInput;
    /**
     * Limit how many FoodAlerts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FoodAlertIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FoodAlert upsert
 */
export type FoodAlertUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the FoodAlert to update in case it exists.
     */
    where: Prisma.FoodAlertWhereUniqueInput;
    /**
     * In case the FoodAlert found by the `where` argument doesn't exist, create a new FoodAlert with this data.
     */
    create: Prisma.XOR<Prisma.FoodAlertCreateInput, Prisma.FoodAlertUncheckedCreateInput>;
    /**
     * In case the FoodAlert was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FoodAlertUpdateInput, Prisma.FoodAlertUncheckedUpdateInput>;
};
/**
 * FoodAlert delete
 */
export type FoodAlertDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which FoodAlert to delete.
     */
    where: Prisma.FoodAlertWhereUniqueInput;
};
/**
 * FoodAlert deleteMany
 */
export type FoodAlertDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FoodAlerts to delete
     */
    where?: Prisma.FoodAlertWhereInput;
    /**
     * Limit how many FoodAlerts to delete.
     */
    limit?: number;
};
/**
 * FoodAlert without action
 */
export type FoodAlertDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=FoodAlert.d.ts.map