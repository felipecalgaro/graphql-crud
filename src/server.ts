import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { SubjectsResolver } from './resolvers/subjects-resolver';
import path from 'node:path';

export const prisma = new PrismaClient();

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [SubjectsResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();

  console.log('server running on', url);
}

bootstrap();
