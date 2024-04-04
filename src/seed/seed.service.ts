import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populate() {
    this.carService.fillWithSeedData(CARS_SEED);
    this.brandsService.fillWithSeedData(BRANDS_SEED);

    console.log('Seed data populated successfully!');
  }
}
