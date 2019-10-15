function foods(parent, args, context) {
    return context.prisma.user({ id: parent.id }).foods();
}

module.exports = {
    foods
}