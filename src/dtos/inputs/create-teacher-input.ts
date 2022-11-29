import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CreateTeacherInput {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  subjectId: string;
}
