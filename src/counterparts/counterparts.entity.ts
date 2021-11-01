import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @PrimaryGeneratedColumn({ name: 'counterpart_id', type: 'int' })
  id: number;
  @Column({ type: 'character varying', length: 10 })
  name: string;
  @Column({ type: 'character varying', length: 10 })
  code: string;
}
