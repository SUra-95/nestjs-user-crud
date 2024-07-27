import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUser {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  name: string;
}
