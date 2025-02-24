import * as dotenv from 'dotenv';
import { Student } from './src/modules/student/entities/student.entity';
import { DataSource } from 'typeorm';
import { Class } from './src/modules/class/entities/class.entity';
import { Task } from './src/modules/task/entities/task.entity';

dotenv.config();
export default new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Task, Class, Student],
  migrationsTableName: 'typeorm_migrations',
  migrations: ['src/database/migrations/*{.ts,.js}'],
});
