import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  task: string;
  @Column({ name: 'is_completed' })
  isCompleted: boolean;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
