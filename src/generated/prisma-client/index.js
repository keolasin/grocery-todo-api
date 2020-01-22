"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
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
  },
  {
    name: "Group",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://grocery-todo-api-ef8fbe9eab.herokuapp.com`
});
exports.prisma = new exports.Prisma();
