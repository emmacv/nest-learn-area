import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDTO {
  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsOptional()
  @IsNumber()
  readonly year?: number;
}
