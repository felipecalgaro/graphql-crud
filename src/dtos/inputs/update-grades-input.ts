import { Field, InputType } from 'type-graphql';

@InputType()
export class UpdateGradesInput {
  @Field()
  id: string;

  @Field()
  grades: number;
}
