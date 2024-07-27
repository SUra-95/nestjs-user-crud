import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUser } from './dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUser } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  create(createUser: CreateUser) {
    const user = this.userRepo.create(createUser);
    return this.userRepo.save(user);
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async update(id: number, updateUser: UpdateUser) {
    const user = await this.findOne(id);

    return this.userRepo.save({ ...user, ...updateUser });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.userRepo.remove(user);
  }
}
