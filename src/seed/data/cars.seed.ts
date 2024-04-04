import { Car } from 'src/cars/cars.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
    year: 2019,
  },
  {
    id: uuid(),

    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
  },
  {
    id: uuid(),

    brand: 'Honda',
    model: 'Civic',
    year: 2018,
  },
  {
    id: uuid(),

    brand: 'Honda',
    model: 'Accord',
    year: 2019,
  },
  {
    id: uuid(),

    brand: 'Ford',
    model: 'Fusion',
    year: 2017,
  },
  {
    id: uuid(),

    brand: 'Ford',
    model: 'Focus',
    year: 2018,
  },
  {
    id: uuid(),

    brand: 'Chevrolet',
    model: 'Malibu',
    year: 2016,
  },
  {
    id: uuid(),

    brand: 'Chevrolet',
    model: 'Impala',
    year: 2017,
  },
  {
    id: uuid(),

    brand: 'Nissan',
    model: 'Altima',
    year: 2016,
  },
  {
    id: uuid(),

    brand: 'Nissan',
    model: 'Maxima',
    year: 2017,
  },
];
