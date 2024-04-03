import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CatsModule, CarsModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
