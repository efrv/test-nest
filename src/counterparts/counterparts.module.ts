import { Module } from '@nestjs/common';
import { CounterpartsService } from './counterparts.service';
import { CounterpartsController } from './counterparts.controller';
import { CounterpartsEntity } from './counterparts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CounterpartsEntity])],
  controllers: [CounterpartsController],
  providers: [CounterpartsService],
})
export class CounterpartsModule {}
