import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateCounterpartsDto } from './dto/create-counterparts.dto';
import { UpdateCounterpartsDto } from './dto/update-counterparts.dto';
import { DeleteCounterpartDto } from './dto/delete-counterpart.dto';
import { CounterpartsService } from './counterparts.service';

@Controller('counterparts')
export class CounterpartsController {
  constructor(private readonly counterpartsService: CounterpartsService) {}

  @Get()
  getAll() {
    return this.counterpartsService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCounterparts(@Body() createCounterpartsDto: CreateCounterpartsDto) {
    return this.counterpartsService.create(createCounterpartsDto);
  }

  @Patch()
  @HttpCode(HttpStatus.ACCEPTED)
  updateCounterparts(@Body() updateCounterpartsDto: UpdateCounterpartsDto) {
    return this.counterpartsService.update(updateCounterpartsDto);
  }

  @Delete()
  @HttpCode(HttpStatus.ACCEPTED)
  deleteCounterpart(@Body() deleteCounterpartDto: DeleteCounterpartDto) {
    return this.counterpartsService.delete(deleteCounterpartDto);
  }
}
