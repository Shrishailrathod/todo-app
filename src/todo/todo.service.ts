import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  createTodo(title: string, description: string): Todo {
    const newTodo = new Todo(this.idCounter++, title, description);
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id: number, title?: string, description?: string, isCompleted?: boolean): Todo {
    const todo = this.getTodoById(id);
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (isCompleted !== undefined) todo.isCompleted = isCompleted;
    return todo;
  }

  deleteTodoById(id: number): { message: string } {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    this.todos.splice(index, 1);
    return { message: `Todo with ID ${id} has been deleted successfully` };
  }
}
