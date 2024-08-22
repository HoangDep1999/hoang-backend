import { Inject, Injectable } from "@nestjs/common";
import { IRoleRepository } from "src/interface/IRoleRepository";
import { Role } from "src/model/role.model";

@Injectable()
export class RoleService{
    constructor(
        @Inject('IRoleRepository')
        private readonly roleRepostory: IRoleRepository
    ){}

    async create(role: Role): Promise<Role> {
      return this.roleRepostory.create(role);
    }
  
    async findAll(): Promise<Role[]> {
      return this.roleRepostory.findAll();
    }
  
    async findOne(id: number): Promise<Role> {
      return this.roleRepostory.findById(id);
    }
  
    async update(id: number, role: Role): Promise<Role> {
      await this.roleRepostory.update(id, role);
      return this.findOne(id);
    }
  
    async remove(id: number): Promise<boolean> {
      return this.roleRepostory.delete(id);
    }
}