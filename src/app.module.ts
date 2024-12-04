import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entity/todo.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Rathod',
      database: 'todo',
      entities: [Todo],
      synchronize: true, 
      logging:true,
    }),
    TypeOrmModule.forFeature([Todo]),
    TodoModule, 
  ],
})
export class AppModule {}
