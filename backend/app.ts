import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import 'module-alias/register';
import resolvers from '~gql/resolvers';
import schemas from '~gql/schemas';

import '~db/connectDb';

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
});


startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
  })
  .catch((error) => {
    console.error('Failed to start server', error);
  });
