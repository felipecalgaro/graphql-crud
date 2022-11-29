import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { CreateTeacherInput } from '../dtos/inputs/create-teacher-input';
import { Subject } from '../dtos/models/subject-model';
import { Teacher } from '../dtos/models/teacher-model';
import { prisma } from '../server';

@Resolver(() => Teacher)
export class TeacherResolver {
  @Mutation(() => Teacher)
  async createTeacher(@Arg('data') data: CreateTeacherInput) {
    const teacher = await prisma.teacher.create({ data });

    return teacher;
  }

  @Query(() => [Teacher])
  async getTeachers() {
    const teachers = await prisma.teacher.findMany();

    return teachers;
  }

  @Query(() => Teacher)
  async getTeacherById(@Arg('id') id: string) {
    const teacher = await prisma.teacher.findUnique({
      where: {
        id
      }
    });

    return teacher;
  }

  @Query(() => Teacher)
  async getTeacherBySubjectId(@Arg('subjectId') subjectId: string) {
    const teacher = await prisma.teacher.findUnique({
      where: {
        subjectId
      },
    });

    return teacher;
  }

  @FieldResolver(() => Subject)
  async subject(@Root() teacher: Teacher) {
    const subject = await prisma.subject.findUnique({
      where: {
        id: teacher.subjectId
      }
    });

    return subject;
  }
}
