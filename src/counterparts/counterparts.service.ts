import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CounterpartsEntity } from './counterparts.entity';
import { Connection, Repository } from 'typeorm';
import { CreateCounterpartsDto } from './dto/create-counterparts.dto';
import { UpdateCounterpartsDto } from './dto/update-counterparts.dto';
import { DeleteCounterpartDto } from './dto/delete-counterpart.dto';

@Injectable()
export class CounterpartsService {
  constructor(
    @InjectRepository(CounterpartsEntity)
    private counterpartRepository: Repository<CounterpartsEntity>,
    private connection: Connection,
  ) {}

  getAll(): Promise<CounterpartsEntity[]> {
    return this.counterpartRepository.find({ order: { id: 'DESC' } });
  }

  getOne(id: number): Promise<CounterpartsEntity> {
    return this.counterpartRepository.findOne({ where: { id } });
  }
  async create(
    createCounterpartsDto: CreateCounterpartsDto,
  ): Promise<CounterpartsEntity[]> {
    const toCreatItems: CounterpartsEntity[] = [];
    for (const c of createCounterpartsDto.counterparts) {
      toCreatItems.push(new CounterpartsEntity(undefined, c.name, c.code));
    }

    return await this.batchSave(toCreatItems);
  }

  async update(
    updateCounterpartsDto: UpdateCounterpartsDto,
  ): Promise<CounterpartsEntity[]> {
    const toUpdateItems: CounterpartsEntity[] = [];
    for (const c of updateCounterpartsDto.counterparts) {
      toUpdateItems.push(new CounterpartsEntity(c.id, c.name, c.code));
    }

    return await this.batchSave(toUpdateItems);
  }
  async delete(
    deleteCounterpartsDto: DeleteCounterpartDto,
  ): Promise<CounterpartsEntity> {
    const result = await this.counterpartRepository.findOne({
      where: { id: deleteCounterpartsDto.id },
    });
    await this.counterpartRepository.delete({ id: deleteCounterpartsDto.id });
    return result;
  }

  private async batchSave(
    counterparts: CounterpartsEntity[],
  ): Promise<CounterpartsEntity[]> {
    const result: CounterpartsEntity[] = [];
    await this.connection.transaction(async (manager) => {
      for (const item of counterparts) result.push(await manager.save(item));
    });
    return result;
  }
}
