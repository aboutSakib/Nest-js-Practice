import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class todoapp {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  task: string;
  @Column()
  isCompleted: boolean;
  @Column()
  CreateAt: string;
  @Column()
  updatedAt: string;
}
