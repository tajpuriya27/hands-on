import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entity/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Himalayan coffee',
      brand: 'Jhapali Tea',
      flavors: ['chocolate', 'strawberry'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee, index) => coffee.id === +id);
    if (!coffee) {
      throw new HttpException('no coffee is found', HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return this.coffees[this.coffees.length - 1];
  }

  update(id: string, updateCoffeeDto: any) {
    const isCoffee = this.findOne(id);
    if (!isCoffee?.id) {
      throw new NotFoundException('coffee not found');
    }
    this.coffees.map((coffee, index) => {
      if (coffee.id === +id) {
        coffee.name = updateCoffeeDto.name ? updateCoffeeDto.name : coffee.name;
        coffee.brand = updateCoffeeDto.brand
          ? updateCoffeeDto.brand
          : coffee.brand;
        coffee.flavors = updateCoffeeDto.flavors
          ? updateCoffeeDto.flavors
          : coffee.flavors;
      }
    });
  }

  remove(id: string) {
    const isCoffee = this.findOne(id);
    if (!isCoffee?.id) {
      throw new NotFoundException('coffee not found');
    }
    const newCoffees = this.coffees.map((coffee) => {
      if (coffee.id !== +id) {
        return coffee;
      }
    });
    this.coffees = newCoffees;
    return isCoffee;
  }
}
