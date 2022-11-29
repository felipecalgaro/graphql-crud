import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { SubjectResolver } from './resolvers/subject-resolver';
import path from 'node:path';
import { TeacherResolver } from './resolvers/teacher-resolver';

export const prisma = new PrismaClient();

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [SubjectResolver, TeacherResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();

  console.log('server running on', url);
}

bootstrap();
