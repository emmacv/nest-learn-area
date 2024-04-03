import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.allCars;
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    const car = this.carsService.getById(id);

    if (!car) {
      throw new NotFoundException(`car with id '${id}' not found`);
    }

    return car;
  }

  @Post()
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDTO) {
    const resp = this.carsService.create(createCarDto);

    return {
      ok: true,
      ...resp,
    };
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDTO: UpdateCarDTO,
  ) {
    const result = this.carsService.update(id, updateCarDTO);

    return {
      ok: true,
      ...result,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
