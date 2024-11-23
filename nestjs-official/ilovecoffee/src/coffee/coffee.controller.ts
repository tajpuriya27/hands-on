import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

interface PaginationQuery {
  limit: string;
  offset: string;
  test: string;
}
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeSerivce: CoffeeService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQuery) {
    return this.coffeeSerivce.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeSerivce.findOne(id);
  }

  @Post()
  createOne(@Body() createCoffeedto: CreateCoffeeDto) {
    return this.coffeeSerivce.create(createCoffeedto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeSerivce.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeSerivce.remove(id);
  }
}
