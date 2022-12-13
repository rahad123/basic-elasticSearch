const typeDef = require('./typeDef')
const resolver = require('./resolver')
// console.log("test")

const schema = {
  typeDefs: typeDef,
  resolvers: resolver,
};

module.exports = schema;