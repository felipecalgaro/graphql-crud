import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateSubjectInput } from '../dtos/inputs/create-subject-input';
import { UpdateGradesInput } from '../dtos/inputs/update-grades-input';
import { Subject } from '../dtos/models/subject-model';
import { prisma } from '../server';

@Resolver()
export class SubjectsResolver {
  @Query(() => [Subject])
  async getSubjects() {
    const subjects = await prisma.subject.findMany();

    return subjects;
  }

  @Query(() => Subject)
  async getSubjectById(@Arg('id') id: string) {
    const subject = await prisma.subject.findUnique({
      where: {
        id
      }
    });

    return subject;
  }

  @Mutation(() => Subject)
  async createSubject(@Arg('data') data: CreateSubjectInput) {
    const subject = await prisma.subject.create({ data });

    return subject;
  }

  @Mutation(() => Subject)
  async updateGrades(@Arg('data') data: UpdateGradesInput) {
    const subject = await prisma.subject.update({
      where: {
        id: data.id
      },
      data: {
        grades: data.grades
      }
    });

    return subject;
  }

  @Mutation(() => Subject)
  async deleteSubject(@Arg('id') id: string) {
    const subject = await prisma.subject.delete({
      where: {
        id
      }
    });

    return subject;
  }
}
