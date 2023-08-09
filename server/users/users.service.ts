import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> { const user = await this.userRepository.findOne({ where: { id } }); if (!user) { throw new Error('User not found'); } return user; }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Partial<User>): Promise<User> { 
    await this.userRepository.update(id, user); 
    const updatedUser = await this.userRepository.findOne({ where: { id } }); 
    if (!updatedUser) { throw new Error('User not found'); } 
    return updatedUser; 
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}