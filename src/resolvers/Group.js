function createdBy(parent, args, context) {
    return context.prisma.group( { id: parent.id } ).createdBy();
}

function foods(parent, args, context) {
    return context.prisma.group( { id: parent.id } ).foods();
}

module.exports = {
    createdBy,
    foods
}