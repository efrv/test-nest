import { IsNotEmpty, IsNumber } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteCounterpartDto {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
