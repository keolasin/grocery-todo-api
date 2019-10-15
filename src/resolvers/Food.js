function postedBy(parent, args, context) {
    return context.prisma.food( { id: parent.id }).postedBy();
}

module.exports = {
    postedBy
}