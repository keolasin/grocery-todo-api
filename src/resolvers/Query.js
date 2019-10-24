async function feed(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
          { name_contains: args.filter },
          { quantity_contains: args.filter },
          { inCart_contains: args.filter },
        ],
      } : {};
    
    const foods = await context.prisma.foods({
        where,
        skip: args.skip,
        first: args.first
    });
    return foods;
}

module.exports = {
    feed
};