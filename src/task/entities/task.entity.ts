import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  task: string;
  @Column({ name: 'is_completed' })
  isCompleted: boolean;
  @Column({ name: 'created_at' })
  CreateAt: string;
  @Column({ name: 'updated_at' })
  updatedAt: string;
}

