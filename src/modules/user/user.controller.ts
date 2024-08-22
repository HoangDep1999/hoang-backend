import { Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe } from "@nestjs/common";
import { UserDto } from "../../dto/user.dto";
import { UsersService } from "./user.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage,HttpStatus } from "src/global/globalEnum";
import { User } from "src/model/user.model";
import { ResponseType } from "src/global/globalType";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) user: UserDto ): Promise<ResponseType<User>> {
    try {
        return new ResponseData(await this.usersService.create(user), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
        return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);        
    }
  }
  

  @Get()
  async findAll(): Promise<ResponseType<User>> {
    try {
      return new ResponseData(await this.usersService.findAll(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return new ResponseData(await this.usersService.findOne(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UserDto) {
    try {
      return new ResponseData(await this.usersService.update(id, userDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      return new ResponseData(await this.usersService.remove(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
}