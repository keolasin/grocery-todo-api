function postedBy(parent, args, context) {
    return context.prisma.food({ id: parent.id }).postedBy();
}

function votes(parent, args, context) {
    return context.prisma.food({ id: parent.id }).votes();
}

function group(parent, args, context) {
    return context.prisma.food({ id: parent.id }).group();
}

module.exports = {
    postedBy,
    votes,
    group
}