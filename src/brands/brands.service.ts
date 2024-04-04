import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Nike',
      createdAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Adidas',
      createdAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Puma',
      createdAt: Date.now(),
    },
    {
      id: uuid(),
      name: 'Reebok',
      createdAt: Date.now(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: (this.brands.length + 1).toString(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: Date.now(),
    };

    this.brands.push(newBrand);
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.findIndex((brand) => brand.id === id.toString());

    if (brand < 0) throw new NotFoundException(`Brand with id ${id} not found`);

    return this.brands[brand];
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    Object.assign(brand, updateBrandDto);

    brand.updatedAt = Date.now();

    return brand;
  }

  remove(id: string) {
    const brand = this.findOne(id);

    this.brands.splice(this.brands.indexOf(brand), 1);

    return brand;
  }

  fillWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
