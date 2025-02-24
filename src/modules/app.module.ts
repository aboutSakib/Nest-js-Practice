import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ClassModule } from './class/class.module';
import { StudentModule } from './student/student.module';
import { TaskModule } from './task/task.module';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      // entities: [Task,Class],
      autoLoadEntities: true,
      synchronize: false,
    }),
    TaskModule,
    ClassModule,
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
