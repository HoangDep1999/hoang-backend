import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entity/user.entity";
import { BaseRepository } from "src/repo/BaseRepository";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository extends BaseRepository<UserEntity, Repository<UserEntity>>{
    constructor(
        @InjectRepository(UserEntity)
        protected readonly userRepository: Repository<UserEntity>
    ){
        super(userRepository)
    }
}