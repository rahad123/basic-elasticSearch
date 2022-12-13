const Post = require("./post.model");

module.exports = {
  getPosts: async () => {
    return Post.find({});
  },
  getSinglePost: async ({ id: _id }) => {
    return Post.findById({ _id });
  },
  deletePost: async ({ id: _id }) => {
    return Post.findByIdAndDelete({ _id });
  },
  createPost: async (post) => {
    const value = await Post.create(post);
    console.log(value);
  },
  updatePost: async ({ id: userId, ...args }) => {
    return Post.findByIdAndUpdate(userId, args, { new: true });
  },
};