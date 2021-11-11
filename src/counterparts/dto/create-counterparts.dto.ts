import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
class CreateCounterpartsElementDto {
  @Field()
  @IsNotEmpty()
  readonly name: string;

  @Field()
  @IsNotEmpty()
  readonly code: string;
}

@InputType()
export class CreateCounterpartsDto {
  @Field(() => [CreateCounterpartsElementDto])
  readonly counterparts: [CreateCounterpartsElementDto];
}
