const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

// resolvers
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Food = require('./resolvers/Food');

const resolvers = {
    Query,
    Mutation,
    User,
    Food
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    },
});

server.start(() => {
    console.log(`Server is started and running on http://localhost:4000`);
});