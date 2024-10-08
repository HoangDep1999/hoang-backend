import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from 'src/entity/role.entity';
import { RoleRepository } from './role.repository';

@Module({
    imports:[TypeOrmModule.forFeature([RoleEntity])],
    controllers: [RoleController],
    providers: [RoleService,
        {
            useClass: RoleRepository,
            provide: 'IRoleRepository'
          }
    ],
})
export class RoleModule {}