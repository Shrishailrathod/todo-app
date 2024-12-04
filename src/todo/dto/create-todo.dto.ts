import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  name: string;  //name should be in string

  @IsString()
  description: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;  
}
