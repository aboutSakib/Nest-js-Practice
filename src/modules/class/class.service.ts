import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class) private classRepository: Repository<Class>,
  ) {}
  async create(createClassDto: CreateClassDto) {
    return await this.classRepository.save(createClassDto);
  }

  async findAll() {
    return await this.classRepository.find();
  }

  async findOne(id: number) {
    return await this.classRepository.findOne({
      where: { id },
      relations: ['students'],
    });
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
