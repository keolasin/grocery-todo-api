function newFoodSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.food({ mutation_in: ['CREATED'] }).node();
}

const newFood = {
    subscribe: newFoodSubscribe,
    resolve: payload => {
        return payload;
    }
}

function newVoteSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node();
}

const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => {
        return payload;
    }
}

function newGroupSubscribe(parent, args, context, info){
    return context.prisma$subscribe.group({ mutation_in: ['CREATED'] }).node();
}

const newGroup = {
    subscribe: newGroupSubscribe,
    resolve: payload => {
        return payload;
    }
}

module.exports = {
    newFood,
    newVote,
    newGroup
};