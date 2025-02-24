import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Class } from '../../class/entities/class.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false, length: 255 })
  name: string; // Corrected to string

  @Column({ name: 'age', nullable: false })
  age: number; // Corrected to number

  @Column({ name: 'roll', nullable: true, type: 'int' })
  roll: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @ManyToOne(() => Class, (item) => item.students, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @Column({ name: 'class_id', nullable: true, type: 'bigint' })
  classId: number;
}
