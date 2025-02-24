import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false, length: 255 })
  name: string;

  @Column({ name: 'room_number', nullable: true, length: 255 })
  roomNumber: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @OneToMany(() => Student, (student) => student.class)
  students: Student[];
}
