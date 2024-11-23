import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

interface PaginationQuery {
  limit: string;
  offset: string;
  test: string;
}
@Controller('coffee')
export class CoffeeController {
  @Get()
  getCoffee(@Query() paginationQuery: PaginationQuery) {
    const { limit, offset, test } = paginationQuery;
    return `get all coffees with limit ${limit} and offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param() params) {
    console.log('params', params);
    return `here is ${params.id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  createOne(@Body() body) {
    console.log('here it comes ', body);
    return `heeloo`;
  }
}
