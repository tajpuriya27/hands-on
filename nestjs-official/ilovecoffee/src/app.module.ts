import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeeController],
  providers: [AppService, CoffeeService],
})
export class AppModule {}
