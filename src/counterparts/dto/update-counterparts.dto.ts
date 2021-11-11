import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
class UpdateCounterpartsElementDto {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @Field()
  @IsNotEmpty()
  readonly name: string;

  @Field()
  @IsNotEmpty()
  readonly code: string;
}

@InputType()
export class UpdateCounterpartsDto {
  @Field(() => [UpdateCounterpartsElementDto])
  readonly counterparts: [UpdateCounterpartsElementDto];
}
