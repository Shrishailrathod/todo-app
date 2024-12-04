import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity'; 
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

 
  @Get()
  async getAllTodos(): Promise<Todo[]> {
    try {
      return await this.todoService.getAllTodos();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 
  @Get(':id')
  async getTodoById(@Param('id') id: number): Promise<Todo> {
    try {
      return await this.todoService.getTodoById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

 
  @Post()
  async createTodo(
    @Body() createTodoDto: CreateTodoDto,
  ): Promise<Todo> {
    try {
      return await this.todoService.createTodo(createTodoDto.name, createTodoDto.description);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    try {
      return await this.todoService.updateTodo(
        id,
        updateTodoDto.name,
        updateTodoDto.description,
        updateTodoDto.status,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

 
  @Delete(':id')
  async deleteTodoById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      return await this.todoService.deleteTodoById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
