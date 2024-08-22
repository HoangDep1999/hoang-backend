import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity('user')
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @ManyToOne(() => RoleEntity)
    @JoinColumn({name:'id_role', referencedColumnName: 'id'})
    role:RoleEntity;
    @Column()
    msnv:string;
    @Column()
    phone:string;
}