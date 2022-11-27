import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Subject {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  teacher: string;

  @Field()
  grades: number;
}

