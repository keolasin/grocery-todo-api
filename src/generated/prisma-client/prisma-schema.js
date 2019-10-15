module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFood {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Food {
  id: ID!
  createdAt: DateTime!
  name: String!
  quantity: Int!
  inCart: Boolean!
  postedBy: User
}

type FoodConnection {
  pageInfo: PageInfo!
  edges: [FoodEdge]!
  aggregate: AggregateFood!
}

input FoodCreateInput {
  id: ID
  name: String!
  quantity: Int!
  inCart: Boolean!
  postedBy: UserCreateOneWithoutFoodsInput
}

input FoodCreateManyWithoutPostedByInput {
  create: [FoodCreateWithoutPostedByInput!]
  connect: [FoodWhereUniqueInput!]
}

input FoodCreateWithoutPostedByInput {
  id: ID
  name: String!
  quantity: Int!
  inCart: Boolean!
}

type FoodEdge {
  node: Food!
  cursor: String!
}

enum FoodOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  quantity_ASC
  quantity_DESC
  inCart_ASC
  inCart_DESC
}

type FoodPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  quantity: Int!
  inCart: Boolean!
}

input FoodScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  inCart: Boolean
  inCart_not: Boolean
  AND: [FoodScalarWhereInput!]
  OR: [FoodScalarWhereInput!]
  NOT: [FoodScalarWhereInput!]
}

type FoodSubscriptionPayload {
  mutation: MutationType!
  node: Food
  updatedFields: [String!]
  previousValues: FoodPreviousValues
}

input FoodSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FoodWhereInput
  AND: [FoodSubscriptionWhereInput!]
  OR: [FoodSubscriptionWhereInput!]
  NOT: [FoodSubscriptionWhereInput!]
}

input FoodUpdateInput {
  name: String
  quantity: Int
  inCart: Boolean
  postedBy: UserUpdateOneWithoutFoodsInput
}

input FoodUpdateManyDataInput {
  name: String
  quantity: Int
  inCart: Boolean
}

input FoodUpdateManyMutationInput {
  name: String
  quantity: Int
  inCart: Boolean
}

input FoodUpdateManyWithoutPostedByInput {
  create: [FoodCreateWithoutPostedByInput!]
  delete: [FoodWhereUniqueInput!]
  connect: [FoodWhereUniqueInput!]
  set: [FoodWhereUniqueInput!]
  disconnect: [FoodWhereUniqueInput!]
  update: [FoodUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [FoodUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [FoodScalarWhereInput!]
  updateMany: [FoodUpdateManyWithWhereNestedInput!]
}

input FoodUpdateManyWithWhereNestedInput {
  where: FoodScalarWhereInput!
  data: FoodUpdateManyDataInput!
}

input FoodUpdateWithoutPostedByDataInput {
  name: String
  quantity: Int
  inCart: Boolean
}

input FoodUpdateWithWhereUniqueWithoutPostedByInput {
  where: FoodWhereUniqueInput!
  data: FoodUpdateWithoutPostedByDataInput!
}

input FoodUpsertWithWhereUniqueWithoutPostedByInput {
  where: FoodWhereUniqueInput!
  update: FoodUpdateWithoutPostedByDataInput!
  create: FoodCreateWithoutPostedByInput!
}

input FoodWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  inCart: Boolean
  inCart_not: Boolean
  postedBy: UserWhereInput
  AND: [FoodWhereInput!]
  OR: [FoodWhereInput!]
  NOT: [FoodWhereInput!]
}

input FoodWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFood(data: FoodCreateInput!): Food!
  updateFood(data: FoodUpdateInput!, where: FoodWhereUniqueInput!): Food
  updateManyFoods(data: FoodUpdateManyMutationInput!, where: FoodWhereInput): BatchPayload!
  upsertFood(where: FoodWhereUniqueInput!, create: FoodCreateInput!, update: FoodUpdateInput!): Food!
  deleteFood(where: FoodWhereUniqueInput!): Food
  deleteManyFoods(where: FoodWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  food(where: FoodWhereUniqueInput!): Food
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food]!
  foodsConnection(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  foods: FoodCreateManyWithoutPostedByInput
}

input UserCreateOneWithoutFoodsInput {
  create: UserCreateWithoutFoodsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFoodsInput {
  id: ID
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  foods: FoodUpdateManyWithoutPostedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneWithoutFoodsInput {
  create: UserCreateWithoutFoodsInput
  update: UserUpdateWithoutFoodsDataInput
  upsert: UserUpsertWithoutFoodsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFoodsDataInput {
  name: String
  email: String
  password: String
}

input UserUpsertWithoutFoodsInput {
  update: UserUpdateWithoutFoodsDataInput!
  create: UserCreateWithoutFoodsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  foods_every: FoodWhereInput
  foods_some: FoodWhereInput
  foods_none: FoodWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    