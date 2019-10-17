// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  food: (where?: FoodWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  vote: (where?: VoteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  food: (where: FoodWhereUniqueInput) => FoodNullablePromise;
  foods: (args?: {
    where?: FoodWhereInput;
    orderBy?: FoodOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Food>;
  foodsConnection: (args?: {
    where?: FoodWhereInput;
    orderBy?: FoodOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FoodConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  vote: (where: VoteWhereUniqueInput) => VoteNullablePromise;
  votes: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Vote>;
  votesConnection: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => VoteConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createFood: (data: FoodCreateInput) => FoodPromise;
  updateFood: (args: {
    data: FoodUpdateInput;
    where: FoodWhereUniqueInput;
  }) => FoodPromise;
  updateManyFoods: (args: {
    data: FoodUpdateManyMutationInput;
    where?: FoodWhereInput;
  }) => BatchPayloadPromise;
  upsertFood: (args: {
    where: FoodWhereUniqueInput;
    create: FoodCreateInput;
    update: FoodUpdateInput;
  }) => FoodPromise;
  deleteFood: (where: FoodWhereUniqueInput) => FoodPromise;
  deleteManyFoods: (where?: FoodWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createVote: (data: VoteCreateInput) => VotePromise;
  updateVote: (args: {
    data: VoteUpdateInput;
    where: VoteWhereUniqueInput;
  }) => VotePromise;
  upsertVote: (args: {
    where: VoteWhereUniqueInput;
    create: VoteCreateInput;
    update: VoteUpdateInput;
  }) => VotePromise;
  deleteVote: (where: VoteWhereUniqueInput) => VotePromise;
  deleteManyVotes: (where?: VoteWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  food: (
    where?: FoodSubscriptionWhereInput
  ) => FoodSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  vote: (
    where?: VoteSubscriptionWhereInput
  ) => VoteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type FoodOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "quantity_ASC"
  | "quantity_DESC"
  | "inCart_ASC"
  | "inCart_DESC";

export type VoteOrderByInput = "id_ASC" | "id_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutFoodsInput {
  create?: Maybe<UserCreateWithoutFoodsInput>;
  update?: Maybe<UserUpdateWithoutFoodsDataInput>;
  upsert?: Maybe<UserUpsertWithoutFoodsInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type FoodWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface FoodCreateOneWithoutVotesInput {
  create?: Maybe<FoodCreateWithoutVotesInput>;
  connect?: Maybe<FoodWhereUniqueInput>;
}

export interface FoodUpdateWithWhereUniqueWithoutPostedByInput {
  where: FoodWhereUniqueInput;
  data: FoodUpdateWithoutPostedByDataInput;
}

export interface FoodCreateWithoutVotesInput {
  id?: Maybe<ID_Input>;
  name: String;
  quantity: Int;
  inCart: Boolean;
  postedBy?: Maybe<UserCreateOneWithoutFoodsInput>;
}

export interface VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutUserDataInput;
}

export interface VoteCreateManyWithoutFoodInput {
  create?: Maybe<VoteCreateWithoutFoodInput[] | VoteCreateWithoutFoodInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  foods_every?: Maybe<FoodWhereInput>;
  foods_some?: Maybe<FoodWhereInput>;
  foods_none?: Maybe<FoodWhereInput>;
  votes_every?: Maybe<VoteWhereInput>;
  votes_some?: Maybe<VoteWhereInput>;
  votes_none?: Maybe<VoteWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface VoteCreateWithoutFoodInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneWithoutVotesInput;
}

export interface VoteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<VoteWhereInput>;
  AND?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  OR?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  NOT?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
}

export interface UserCreateOneWithoutVotesInput {
  create?: Maybe<UserCreateWithoutVotesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface FoodSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<FoodWhereInput>;
  AND?: Maybe<FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput>;
  OR?: Maybe<FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput>;
  NOT?: Maybe<FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput>;
}

export interface UserCreateWithoutVotesInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  foods?: Maybe<FoodCreateManyWithoutPostedByInput>;
}

export interface VoteCreateInput {
  id?: Maybe<ID_Input>;
  food: FoodCreateOneWithoutVotesInput;
  user: UserCreateOneWithoutVotesInput;
}

export interface FoodCreateManyWithoutPostedByInput {
  create?: Maybe<
    FoodCreateWithoutPostedByInput[] | FoodCreateWithoutPostedByInput
  >;
  connect?: Maybe<FoodWhereUniqueInput[] | FoodWhereUniqueInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  foods?: Maybe<FoodUpdateManyWithoutPostedByInput>;
  votes?: Maybe<VoteUpdateManyWithoutUserInput>;
}

export interface FoodCreateWithoutPostedByInput {
  id?: Maybe<ID_Input>;
  name: String;
  quantity: Int;
  inCart: Boolean;
  votes?: Maybe<VoteCreateManyWithoutFoodInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  foods?: Maybe<FoodCreateManyWithoutPostedByInput>;
  votes?: Maybe<VoteCreateManyWithoutUserInput>;
}

export interface FoodUpdateInput {
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
  postedBy?: Maybe<UserUpdateOneWithoutFoodsInput>;
  votes?: Maybe<VoteUpdateManyWithoutFoodInput>;
}

export interface VoteUpsertWithWhereUniqueWithoutFoodInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutFoodDataInput;
  create: VoteCreateWithoutFoodInput;
}

export interface FoodUpsertWithWhereUniqueWithoutPostedByInput {
  where: FoodWhereUniqueInput;
  update: FoodUpdateWithoutPostedByDataInput;
  create: FoodCreateWithoutPostedByInput;
}

export type VoteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserUpdateWithoutFoodsDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  votes?: Maybe<VoteUpdateManyWithoutUserInput>;
}

export interface FoodUpdateManyWithWhereNestedInput {
  where: FoodScalarWhereInput;
  data: FoodUpdateManyDataInput;
}

export interface VoteUpdateManyWithoutUserInput {
  create?: Maybe<VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput>;
  delete?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  set?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  disconnect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  update?: Maybe<
    | VoteUpdateWithWhereUniqueWithoutUserInput[]
    | VoteUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | VoteUpsertWithWhereUniqueWithoutUserInput[]
    | VoteUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
}

export interface UserCreateOneWithoutFoodsInput {
  create?: Maybe<UserCreateWithoutFoodsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface FoodUpdateWithoutPostedByDataInput {
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
  votes?: Maybe<VoteUpdateManyWithoutFoodInput>;
}

export interface VoteCreateManyWithoutUserInput {
  create?: Maybe<VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
}

export interface VoteUpdateWithoutUserDataInput {
  food?: Maybe<FoodUpdateOneRequiredWithoutVotesInput>;
}

export interface FoodWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
  inCart_not?: Maybe<Boolean>;
  postedBy?: Maybe<UserWhereInput>;
  votes_every?: Maybe<VoteWhereInput>;
  votes_some?: Maybe<VoteWhereInput>;
  votes_none?: Maybe<VoteWhereInput>;
  AND?: Maybe<FoodWhereInput[] | FoodWhereInput>;
  OR?: Maybe<FoodWhereInput[] | FoodWhereInput>;
  NOT?: Maybe<FoodWhereInput[] | FoodWhereInput>;
}

export interface FoodUpdateOneRequiredWithoutVotesInput {
  create?: Maybe<FoodCreateWithoutVotesInput>;
  update?: Maybe<FoodUpdateWithoutVotesDataInput>;
  upsert?: Maybe<FoodUpsertWithoutVotesInput>;
  connect?: Maybe<FoodWhereUniqueInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface FoodUpdateWithoutVotesDataInput {
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
  postedBy?: Maybe<UserUpdateOneWithoutFoodsInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface FoodUpsertWithoutVotesInput {
  update: FoodUpdateWithoutVotesDataInput;
  create: FoodCreateWithoutVotesInput;
}

export interface FoodUpdateManyMutationInput {
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
}

export interface VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutUserDataInput;
  create: VoteCreateWithoutUserInput;
}

export interface FoodUpdateManyDataInput {
  name?: Maybe<String>;
  quantity?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
}

export interface VoteScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
  OR?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
  NOT?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
}

export interface FoodCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  quantity: Int;
  inCart: Boolean;
  postedBy?: Maybe<UserCreateOneWithoutFoodsInput>;
  votes?: Maybe<VoteCreateManyWithoutFoodInput>;
}

export interface UserUpsertWithoutFoodsInput {
  update: UserUpdateWithoutFoodsDataInput;
  create: UserCreateWithoutFoodsInput;
}

export interface VoteCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  food: FoodCreateOneWithoutVotesInput;
}

export interface VoteUpdateManyWithoutFoodInput {
  create?: Maybe<VoteCreateWithoutFoodInput[] | VoteCreateWithoutFoodInput>;
  delete?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  set?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  disconnect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  update?: Maybe<
    | VoteUpdateWithWhereUniqueWithoutFoodInput[]
    | VoteUpdateWithWhereUniqueWithoutFoodInput
  >;
  upsert?: Maybe<
    | VoteUpsertWithWhereUniqueWithoutFoodInput[]
    | VoteUpsertWithWhereUniqueWithoutFoodInput
  >;
  deleteMany?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
}

export interface VoteUpdateInput {
  food?: Maybe<FoodUpdateOneRequiredWithoutVotesInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutVotesInput>;
}

export interface VoteUpdateWithWhereUniqueWithoutFoodInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutFoodDataInput;
}

export interface UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput;
  create: UserCreateWithoutVotesInput;
}

export interface FoodUpdateManyWithoutPostedByInput {
  create?: Maybe<
    FoodCreateWithoutPostedByInput[] | FoodCreateWithoutPostedByInput
  >;
  delete?: Maybe<FoodWhereUniqueInput[] | FoodWhereUniqueInput>;
  connect?: Maybe<FoodWhereUniqueInput[] | FoodWhereUniqueInput>;
  set?: Maybe<FoodWhereUniqueInput[] | FoodWhereUniqueInput>;
  disconnect?: Maybe<FoodWhereUniqueInput[] | FoodWhereUniqueInput>;
  update?: Maybe<
    | FoodUpdateWithWhereUniqueWithoutPostedByInput[]
    | FoodUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | FoodUpsertWithWhereUniqueWithoutPostedByInput[]
    | FoodUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<FoodScalarWhereInput[] | FoodScalarWhereInput>;
  updateMany?: Maybe<
    FoodUpdateManyWithWhereNestedInput[] | FoodUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpdateWithoutVotesDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  foods?: Maybe<FoodUpdateManyWithoutPostedByInput>;
}

export interface UserUpdateOneRequiredWithoutVotesInput {
  create?: Maybe<UserCreateWithoutVotesInput>;
  update?: Maybe<UserUpdateWithoutVotesDataInput>;
  upsert?: Maybe<UserUpsertWithoutVotesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface VoteUpdateWithoutFoodDataInput {
  user?: Maybe<UserUpdateOneRequiredWithoutVotesInput>;
}

export interface FoodScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
  inCart_not?: Maybe<Boolean>;
  AND?: Maybe<FoodScalarWhereInput[] | FoodScalarWhereInput>;
  OR?: Maybe<FoodScalarWhereInput[] | FoodScalarWhereInput>;
  NOT?: Maybe<FoodScalarWhereInput[] | FoodScalarWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface VoteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  food?: Maybe<FoodWhereInput>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  OR?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  NOT?: Maybe<VoteWhereInput[] | VoteWhereInput>;
}

export interface UserCreateWithoutFoodsInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  votes?: Maybe<VoteCreateManyWithoutUserInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface VotePreviousValues {
  id: ID_Output;
}

export interface VotePreviousValuesPromise
  extends Promise<VotePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface VotePreviousValuesSubscription
  extends Promise<AsyncIterator<VotePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface FoodEdge {
  node: Food;
  cursor: String;
}

export interface FoodEdgePromise extends Promise<FoodEdge>, Fragmentable {
  node: <T = FoodPromise>() => T;
  cursor: () => Promise<String>;
}

export interface FoodEdgeSubscription
  extends Promise<AsyncIterator<FoodEdge>>,
    Fragmentable {
  node: <T = FoodSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  foods: <T = FragmentableArray<Food>>(args?: {
    where?: FoodWhereInput;
    orderBy?: FoodOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  foods: <T = Promise<AsyncIterator<FoodSubscription>>>(args?: {
    where?: FoodWhereInput;
    orderBy?: FoodOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  foods: <T = FragmentableArray<Food>>(args?: {
    where?: FoodWhereInput;
    orderBy?: FoodOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateVote {
  count: Int;
}

export interface AggregateVotePromise
  extends Promise<AggregateVote>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVoteSubscription
  extends Promise<AsyncIterator<AggregateVote>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface FoodConnection {
  pageInfo: PageInfo;
  edges: FoodEdge[];
}

export interface FoodConnectionPromise
  extends Promise<FoodConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<FoodEdge>>() => T;
  aggregate: <T = AggregateFoodPromise>() => T;
}

export interface FoodConnectionSubscription
  extends Promise<AsyncIterator<FoodConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<FoodEdgeSubscription>>>() => T;
  aggregate: <T = AggregateFoodSubscription>() => T;
}

export interface VoteConnection {
  pageInfo: PageInfo;
  edges: VoteEdge[];
}

export interface VoteConnectionPromise
  extends Promise<VoteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VoteEdge>>() => T;
  aggregate: <T = AggregateVotePromise>() => T;
}

export interface VoteConnectionSubscription
  extends Promise<AsyncIterator<VoteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVoteSubscription>() => T;
}

export interface Vote {
  id: ID_Output;
}

export interface VotePromise extends Promise<Vote>, Fragmentable {
  id: () => Promise<ID_Output>;
  food: <T = FoodPromise>() => T;
  user: <T = UserPromise>() => T;
}

export interface VoteSubscription
  extends Promise<AsyncIterator<Vote>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  food: <T = FoodSubscription>() => T;
  user: <T = UserSubscription>() => T;
}

export interface VoteNullablePromise
  extends Promise<Vote | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  food: <T = FoodPromise>() => T;
  user: <T = UserPromise>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Food {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  quantity: Int;
  inCart: Boolean;
}

export interface FoodPromise extends Promise<Food>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  quantity: () => Promise<Int>;
  inCart: () => Promise<Boolean>;
  postedBy: <T = UserPromise>() => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface FoodSubscription
  extends Promise<AsyncIterator<Food>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  inCart: () => Promise<AsyncIterator<Boolean>>;
  postedBy: <T = UserSubscription>() => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface FoodNullablePromise
  extends Promise<Food | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  quantity: () => Promise<Int>;
  inCart: () => Promise<Boolean>;
  postedBy: <T = UserPromise>() => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface FoodPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  quantity: Int;
  inCart: Boolean;
}

export interface FoodPreviousValuesPromise
  extends Promise<FoodPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  quantity: () => Promise<Int>;
  inCart: () => Promise<Boolean>;
}

export interface FoodPreviousValuesSubscription
  extends Promise<AsyncIterator<FoodPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  inCart: () => Promise<AsyncIterator<Boolean>>;
}

export interface AggregateFood {
  count: Int;
}

export interface AggregateFoodPromise
  extends Promise<AggregateFood>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateFoodSubscription
  extends Promise<AsyncIterator<AggregateFood>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface VoteEdge {
  node: Vote;
  cursor: String;
}

export interface VoteEdgePromise extends Promise<VoteEdge>, Fragmentable {
  node: <T = VotePromise>() => T;
  cursor: () => Promise<String>;
}

export interface VoteEdgeSubscription
  extends Promise<AsyncIterator<VoteEdge>>,
    Fragmentable {
  node: <T = VoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface VoteSubscriptionPayload {
  mutation: MutationType;
  node: Vote;
  updatedFields: String[];
  previousValues: VotePreviousValues;
}

export interface VoteSubscriptionPayloadPromise
  extends Promise<VoteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VotePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VotePreviousValuesPromise>() => T;
}

export interface VoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VoteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VotePreviousValuesSubscription>() => T;
}

export interface FoodSubscriptionPayload {
  mutation: MutationType;
  node: Food;
  updatedFields: String[];
  previousValues: FoodPreviousValues;
}

export interface FoodSubscriptionPayloadPromise
  extends Promise<FoodSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = FoodPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = FoodPreviousValuesPromise>() => T;
}

export interface FoodSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<FoodSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = FoodSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = FoodPreviousValuesSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Food",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
