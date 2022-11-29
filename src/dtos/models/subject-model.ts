import { ObjectType, Field, ID } from 'type-graphql';
import { Teacher } from './teacher-model';

@ObjectType()
export class Subject {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  grades: number;
}

