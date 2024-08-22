import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { RoleService } from "./role.service";
import { RoleDto } from "src/dto/role.dto";
import { ResponseType } from "src/global/globalType";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Role } from "src/model/role.model";

@Controller('role')
export class RoleController{
    constructor(private readonly roleService: RoleService){
    }

    @Post()
    async createRole(@Body(new ValidationPipe()) role: RoleDto): Promise<ResponseType<Role>>{
        try {
            return new ResponseData(await this.roleService.create(role), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Get()
    async findAllRole(): Promise<ResponseType<Role>>{
        try {
            return new ResponseData(await this.roleService.findAll(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<ResponseType<Role>>{
        try {
            return new ResponseData(await this.roleService.findOne(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Put(':id')
    async updateRole(@Param('id') id: number, @Body(new ValidationPipe()) role: RoleDto): Promise<ResponseType<Role>>{
        try {
            return new ResponseData(await this.roleService.update(id, role), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<ResponseType<boolean>>{
        try {
            return new ResponseData(await this.roleService.remove(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
}