const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

// resolvers
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const User = require('./resolvers/User');
const Group = require('./resolvers/Group');
const Food = require('./resolvers/Food');
const Vote = require('./resolvers/Vote');


const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Food,
    Vote,
    Group
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