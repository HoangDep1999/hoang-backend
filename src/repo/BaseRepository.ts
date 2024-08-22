import { InjectRepository } from "@nestjs/typeorm";
import { BaseEntity, DeepPartial, DeleteResult, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";

export abstract class BaseRepository<Entity extends BaseEntity, Repo extends Repository<Entity>>{
    constructor(
        @InjectRepository(Repository<Entity>)
        protected readonly repository: Repo,
    ){}
    async create(data: Entity): Promise<Entity>{
        return await this.repository.save(data);
    }
    async findAll(): Promise<Entity[]>{
        return await this.repository.find();
    }
    async findById(id:number): Promise<Entity>{
        return await this.repository.findOne({where: {id} as FindOptionsWhere<BaseEntity>});
    }
    async update(id:number, data: Entity extends DeepPartial<ObjectLiteral> ? ObjectLiteral: {}): Promise<Entity>{
        await this.repository.update(id, data);
        return this.findById(id);
    }
    async delete(id:number): Promise<boolean>{
        try {
            const entity = await this.findById(id);
            if(!entity) return false;
            const isDelete: DeleteResult = await this.repository.delete(id);
            return isDelete.affected === 1;
        } catch (error) {
            console.log('Error delete entity: ', error);
            return false;
        }
    }
}