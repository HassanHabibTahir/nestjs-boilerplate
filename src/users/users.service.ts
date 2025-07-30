import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async createUser(user: CreateUserDto): Promise<User> {
    const existingUser = await this.usersRepository.findOne({
      where: { email: user.email },
    });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    const newUser = this.usersRepository.create(user);

    return await this.usersRepository.save(newUser);
  }
  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
