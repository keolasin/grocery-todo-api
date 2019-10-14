const { GraphQLServer } = require('graphql-yoga');

let dummy = [{ // dummy data
    id: 'foodItem-0',
    name: 'Apples',
    quantity: 1,
    inCart: false
}]

// resolver functions for implementation
let idCount = dummy.length; // dummy data, starting idCount from the length of the dummy data provided
const resolvers = {
    Query: {
        info: () => {
            return 'This is the API for the grocery-todo app';
        },
        feed: () => {
            return dummy
        },
    },
    Mutation: {
        post: (parent, args) => {
            const foodItem = {
                id: `foodItem-${idCount++}`,
                name: args.name,
                quantity: args.quantity,
                inCart: args.inCart
            }
            dummy.push(foodItem);
            return foodItem;
        }
    },
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});

server.start(() => {
    console.log(`Server is started and running on http://localhost:4000`);
});