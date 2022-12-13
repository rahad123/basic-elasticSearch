const { gql } = require("apollo-server-express");

const postsTypeDefs = gql`
  type Post {
    id: ID!
    title: String!
    excerpt: String
    content: String
    slug: String
  }

  input createPostInput {
    title: String!
    slug: String
    excerpt: String
    content: String
  }

  input updatePostInput {
    id: ID!
    title: String
    excerpt: String
    slug: String
    content: String
  }

  #Queries
  type Query {
    getPosts: [Post!]
    getSinglePost(id: ID): Post!
  }

  #Mutations
  type Mutation {
    createPost(createPostInput: createPostInput): Post!
    updatePost(updatePostInput: updatePostInput): Post!
    deletePost(id: ID!): Boolean!
  }
`;

module.exports = postsTypeDefs;
