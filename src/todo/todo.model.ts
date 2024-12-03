export class Todo {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
  
    constructor(id: number, title: string, description: string, isCompleted: boolean = false) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.isCompleted = isCompleted;
    }
  }
  