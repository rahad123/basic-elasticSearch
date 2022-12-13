const { merge } = require('lodash')
const postResolvers = require('../posts/post.resolver')

const resolver = postResolvers;

module.exports = resolver;