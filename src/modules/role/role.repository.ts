import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoleEntity } from "src/entity/role.entity";
import { BaseRepository } from "src/repo/BaseRepository";
import { Repository } from "typeorm";

@Injectable()
export class RoleRepository extends BaseRepository<RoleEntity, Repository<RoleEntity>>{
    constructor(
        @InjectRepository(RoleEntity)
        protected readonly roleRepository: Repository<RoleEntity>
    ){
        super(roleRepository)
    }
}