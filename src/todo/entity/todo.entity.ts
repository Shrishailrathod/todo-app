import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('todo') 
export class Todo {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column() 
  name: string;

  @Column() 
  description: string;

  @Column({ default: false }) 
  status: boolean;
}
