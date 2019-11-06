function createdBy(parent, args, context) {
    return context.prisma.group( { id: parent.id } ).createdBy();
}

module.exports = {
    createdBy
}