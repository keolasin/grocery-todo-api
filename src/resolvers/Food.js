function postedBy(parent, args, context) {
    return context.prisma.food( { id: parent.id }).postedBy();
}

function votes(parent, args, context) {
    return context.prisma.food({ id: parent.id }).votes();
}

module.exports = {
    postedBy,
    votes
}