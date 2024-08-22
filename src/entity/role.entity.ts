import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity()
export class RoleEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type:string;

    @OneToMany(()=>UserEntity, user => user.role)
    @JoinColumn({name: 'id_role', referencedColumnName: 'id'})
    user: UserEntity[]

}