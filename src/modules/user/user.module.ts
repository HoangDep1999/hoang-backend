import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService,
    {
      useClass: UserRepository,
      provide: 'IUserRepository'
    }
  ],
})
export class UserModule {}
