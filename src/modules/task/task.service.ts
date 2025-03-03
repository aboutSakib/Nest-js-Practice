import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable() 
export class TaskService {
  constructor(
    @InjectRepository(Task) private todoappRepository: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    const newTask = {
      task: createTaskDto.task,
      isCompleted: false,
    }; 
    return this.todoappRepository.save(newTask);
  }

  async findAll(page, perPage) {
    const skip = perPage * (page - 1);
    const [tasks, total] = await this.todoappRepository.findAndCount({
      select: ['id', 'task', 'createdAt'],
      skip: skip,
      take: perPage,
    });
    return {
      data: tasks,
      total: total,
      CurrentPage: page,
      perPage: perPage,
      totalPage: Math.ceil(total / perPage),
    };
  }

  findOne(id: number) {
    return this.todoappRepository.findOneBy({ id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.todoappRepository.update(id, {
      isCompleted: updateTaskDto.isCompleted,
    });
  }

  remove(id: number) {
    return this.todoappRepository.delete(id);
  }
}
