// const User = require('./user.model')
const {
  app: { secret },
} = require("../config/config");
const {
  getPosts,
  getSinglePost,
  deletePost,
  createPost,
  updatePost,
} = require("./post.service");
const logger = require("../utils/logger");
const postResolvers = {
  Query: {
    getPosts: async (_, args, ctx) => {
      try {
        const posts = await getPosts(args);
        return posts;
      } catch (err) {
        logger.error(err);
        return errors.withApolloError("INTERNAL_SERVER_ERROR");
      }
    },
    getSinglePost: async (_, args, ctx, info) => { 
      try {
        const post = await getSinglePost(args);
        return post;
      } catch (err) {
        logger.error(err);
        return errors.withApolloError("INTERNAL_SERVER_ERROR"); 
      }
    },
  },

  Mutation: {
    createPost: async (_, args, context, info) => {
      try {
        const { createPostInput } = args;
        const post = await createPost(createPostInput);
        console.log('post', post);
        return post;
      } catch (err) {
        logger.error(err);
        // return errors.withApolloError("INTERNAL_SERVER_ERROR");
      }
    },
    deletePost: async (_, args, ctx) => {
      try {
        const removeUser = await deletePost(args);
        return removeUser;
      } catch (err) {
        logger.error(err);
        return errors.withApolloError("INTERNAL_SERVER_ERROR");
      }
    },
    updatePost: async (_, args, context, info) => {
      const { updatePostInput } = args;
      const user = await updatePost(updatePostInput);
      return user;
    },
  },
};

module.exports = postResolvers;