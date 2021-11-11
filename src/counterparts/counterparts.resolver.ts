import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CounterpartsEntity } from './counterparts.entity';
import { CounterpartsService } from './counterparts.service';
import { GetCounterpartDto } from './dto/get-counterpart.dto';
import { CreateCounterpartsDto } from './dto/create-counterparts.dto';
import { UpdateCounterpartsDto } from './dto/update-counterparts.dto';
import { DeleteCounterpartDto } from './dto/delete-counterpart.dto';

@Resolver(() => CounterpartsEntity)
export class CounterpartsResolver {
  constructor(private readonly counterpartsService: CounterpartsService) {}

  @Query(() => [CounterpartsEntity], { name: 'counterparts' })
  async getAll(): Promise<CounterpartsEntity[]> {
    return this.counterpartsService.getAll();
  }

  @Query(() => CounterpartsEntity, { name: 'counterpart' })
  async getOne(
    @Args() getCounterpartArgs: GetCounterpartDto,
  ): Promise<CounterpartsEntity> {
    return this.counterpartsService.getOne(getCounterpartArgs.id);
  }

  @Mutation(() => [CounterpartsEntity], { name: 'createCounterparts' })
  async create(
    @Args('createData') createCounterparts: CreateCounterpartsDto,
  ): Promise<CounterpartsEntity[]> {
    return this.counterpartsService.create(createCounterparts);
  }

  @Mutation(() => [CounterpartsEntity], { name: 'updateCounterparts' })
  async update(
    @Args('updateData') updateCounterparts: UpdateCounterpartsDto,
  ): Promise<CounterpartsEntity[]> {
    return this.counterpartsService.update(updateCounterparts);
  }

  @Mutation(() => CounterpartsEntity, { name: 'deleteCounterpart' })
  async delete(
    @Args('deleteData') deleteCounterparts: DeleteCounterpartDto,
  ): Promise<CounterpartsEntity> {
    return this.counterpartsService.delete(deleteCounterparts);
  }
}
