import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUser } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUser } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/create-user')
  create(@Body() createUser: CreateUser) {
    return this.userService.create(createUser);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUser: UpdateUser) {
    return this.userService.update(parseInt(id), updateUser);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
