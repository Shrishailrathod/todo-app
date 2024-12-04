import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

 
  async getAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.find(); 
  }

  
  async getTodoById(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  
  async createTodo(name: string, description: string): Promise<Todo> {
    const newTodo = this.todoRepository.create({
      name, // Use 'name' instead of 'title'
      description,
      status: false, 
    });
    return await this.todoRepository.save(newTodo);
  }

  async updateTodo(
    id: number,
    name?: string,
    description?: string,
    status?: boolean,
  ): Promise<Todo> {
    const todo = await this.getTodoById(id);

    if (name !== undefined) todo.name = name; 
    if (description !== undefined) todo.description = description;
    if (status !== undefined) todo.status = status; 
    return await this.todoRepository.save(todo);
  }


  async deleteTodoById(id: number): Promise<{ message: string }> {
    const result = await this.todoRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return { message: `Todo with ID ${id} has been deleted successfully` };
  }
}
