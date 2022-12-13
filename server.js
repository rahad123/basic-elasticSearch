const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { ApolloServer } = require("apollo-server-express");
const schema = require("./graphql/schema");

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({
    ...schema,
  });

  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

app.listen({ port: 3000 }, () => {
  console.info("Server running on port 3000");
});

module.exports = app;
