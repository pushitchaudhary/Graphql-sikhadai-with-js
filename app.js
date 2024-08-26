// src/index.js or src/app.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schema/schema.js'); // Import your typeDefs
const userResolvers = require('./graphql/resolver/userResolvers.js'); // Import your resolvers

// Initialize Express app
const app = express();

// ENV File Configuring
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables


require('./database/connection.js')

// Initialize Apollo Server with typeDefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers: userResolvers, // Use your resolvers
  context: ({ req, res }) => ({ req, res }), // Pass context to resolvers
});

// Apply Apollo Server middleware to Express app
async function startServer() {
  await server.start(); // Ensure server is started before applying middleware
  server.applyMiddleware({ app });

  // Start the Express server
  app.listen({ port: 4000 }, () =>
    console.log(`Server is running at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
