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
  createOne(@Body() body) {
    return this.coffeeSerivce.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeeSerivce.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeSerivce.remove(id);
  }
}
