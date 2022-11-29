import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateSubjectInput {
  @Field()
  name: string;

  @Field()
  grades: number;
}
