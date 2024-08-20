import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UpdateUserDto } from "src/dto/update-user.dto";

@Injectable()
export class UsersService{
    create(createUserDto: CreateUserDto) {
        return 'this is a new user';
      }
    
      findAll() {
        return 'this actions returns all users';
      }
    
      findOne(id: number) {
        return `this actions returns all users #${id}`;
      }
    
      update(id: number,updateUserDto: UpdateUserDto) {
        return `this actions returns all users #${id}`;
      }
    
      remove(id: number) {
        return `this actions returns all users #${id}`;
      }
}