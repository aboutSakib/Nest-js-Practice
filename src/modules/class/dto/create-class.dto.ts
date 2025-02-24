import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateClassDto {
  @IsNotEmpty()
  name: string;
  @IsOptional()
  roomNumber: string;
}
