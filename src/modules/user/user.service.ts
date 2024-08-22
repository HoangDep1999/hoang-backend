import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/interface/IUserRepository';
import { User } from 'src/model/user.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepo: IUserRepository

  ){}
  async create(user: User): Promise<User> {
    return this.userRepo.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepo.findById(id);
  }

  async update(id: number, user: User): Promise<User> {
    await this.userRepo.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    return this.userRepo.delete(id);
  }
}
