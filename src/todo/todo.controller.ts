import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): Todo {
    return this.todoService.getTodoById(Number(id));
  }

  @Post()
  createTodo(@Body() body: { title: string; description: string }): Todo {
    return this.todoService.createTodo(body.title, body.description);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: number,
    @Body() body: { title?: string; description?: string; isCompleted?: boolean },
  ): Todo {
    return this.todoService.updateTodo(
      Number(id),
      body.title,
      body.description,
      body.isCompleted,
    );
  }

  @Delete(':id')
deleteTodoById(@Param('id') id: number): { message: string } {
  return this.todoService.deleteTodoById(Number(id));
}
}
