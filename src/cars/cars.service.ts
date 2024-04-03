import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
      id: uuid(),
    },
    {
      brand: 'Toyota',
      model: 'Yaris',
      year: 2020,
      id: uuid(),
    },
    {
      brand: 'Toyota',
      model: 'Camry',
      year: 2020,
      id: uuid(),
    },
  ];

  get allCars() {
    return this.cars;
  }

  getById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`car with id '${id}' not found`);

    return car;
  }

  create(createCarDTO: CreateCarDTO) {
    const newCar: Car = {
      ...createCarDTO,
      id: uuid(),
    };

    this.cars.push(newCar);

    return createCarDTO;
  }

  update(id: string, updateCarDTO: UpdateCarDTO): UpdateCarDTO {
    const car = this.getById(id);

    for (const key in updateCarDTO) {
      car[key] = updateCarDTO[key];
    }
    car.id = id;

    return car;
  }

  delete(id: string) {
    const car = this.getById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return car;
  }
}
