function food(parent, args, context) {
    return context.prisma.vote({ id: parent.id }).food();
}

function user(parent, args, context) {
    return context.prisma.vote({ id: parent.id }).user();
}

module.exports = {
    food,
    user
}