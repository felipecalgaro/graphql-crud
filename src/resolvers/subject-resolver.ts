import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { CreateSubjectInput } from '../dtos/inputs/create-subject-input';
import { UpdateGradesInput } from '../dtos/inputs/update-grades-input';
import { Subject } from '../dtos/models/subject-model';
import { Teacher } from '../dtos/models/teacher-model';
import { prisma } from '../server';

@Resolver(() => Subject)
export class SubjectResolver {
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
    try {
      const subject = await prisma.subject.delete({
        where: {
          id
        },
      });

      return subject;
    } catch (error) {
      console.log(error);
    }
  }

  @FieldResolver(() => Teacher)
  async teacher(@Root() subject: Subject) {
    const teacher = await prisma.teacher.findUnique({
      where: {
        subjectId: subject.id
      }
    });

    return teacher;
  }
}
