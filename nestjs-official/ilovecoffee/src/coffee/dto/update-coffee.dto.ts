import { CreateCoffeeDto } from './create-coffee.dto';
// import { PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

/**
 * 
 (alias) function PartialType<T>(classRef: Type<T>, options?: {
    skipNullProperties?: boolean;
}): Type<Partial<T>>
import PartialType

----

(alias) function PartialType<T>(classRef: Type<T>, options?: {
    skipNullProperties?: boolean;
}): MappedType<RemoveFieldsWithType<Partial<T>, Function>>
import PartialType
 */
