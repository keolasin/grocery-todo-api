const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function signup(parent, args, context, info){
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({...args, password});
    const token = jwt.sign({userId: user.id }, APP_SECRET);

    return {
        token,
        user
    }
}

async function login(parent, args, context, info){
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
        throw new Error('No user found');
    };

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
        throw new Error('Invalid password');
    };

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
        token,
        user
    }
}

function post(parent, args, context, info){
    const userId = getUserId(context);
    return context.prisma.createFood({
        name: args.name,
        quantity: args.quantity,
        inCart: args.inCart,
        postedBy: { connect: { id: userId } }
    });
}

async function updateFood(parent, args, context, info){
    return context.prisma.updateFood({
        data: {
            name: args.name,
            quantity: args.quantity,
            inCart: args.inCart
        },
        where: {
            id: args.id
        }
    });
}

async function deleteFood(parent, args, context, info){
    return context.prisma.deleteFood({
        id: args.id
    })
}

async function vote(parent, args, context, info){
    const userId = getUserId(context);
    const foodExists = await context.prisma.$exists.vote({
        user: { id: userId },
        food: { id: args.foodId },
    });

    if (foodExists) {
        throw new Error(`Already voted for food: ${args.foodId}`);
    }

    return context.prisma.createVote({
        user: { connect: { id: userId } },
        food: { connect: { id: args.foodId } },
    });
}

async function createGroup(parent, args, context, info) {
    const userId = getUserId(context);
    return context.prisma.createGroup({
        name: args.name,
        createdBy: { connect: { id: userId } },
        members: null,
        isPrivate: args.isPrivate,
        foods: null
    });
}

module.exports = {
    signup,
    post,
    vote,
    login,
    createGroup,
    updateFood,
    deleteFood
}