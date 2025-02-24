import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsOptional()
  roll: number;
  @IsOptional()
  classId: number;
}
