import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Subject } from './subject-model';

@ObjectType()
export class Teacher {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  subjectId: string;
}
