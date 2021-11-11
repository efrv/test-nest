import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'counterparts' })
export class CounterpartsEntity {
  constructor();
  constructor(id: number);
  constructor(id: number, name: string, code: string);
  constructor(id?: number, name?: string, code?: string) {
    if (id !== undefined) {
      this.id = id;
    }
    if (name !== undefined) {
      this.name = name;
    }
    if (code !== undefined) {
      this.code = code;
    }
  }

  @Field()
  @PrimaryGeneratedColumn({ name: 'counterpart_id', type: 'int' })
  id: number;

  @Field()
  @Column({ type: 'character varying', length: 10 })
  name: string;

  @Field()
  @Column({ type: 'character varying', length: 10 })
  code: string;
}
