import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  name: string;  //name should be in string

  @IsString()
  description: string;  //description also  should be in string

  @IsOptional()
  @IsBoolean()
  status?: boolean;   //status will be either true or false
}
