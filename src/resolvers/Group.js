function createdBy(parent, args, context) {
    console.log(parent, context);
    return context.prisma.group( { id: parent.id } ).createdBy();
}

module.exports = {
    createdBy
}