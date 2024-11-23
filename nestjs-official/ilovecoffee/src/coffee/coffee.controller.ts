import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  getCoffee() {
    return 'get all coffees';
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
