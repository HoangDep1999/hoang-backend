import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { RoleEntity } from './entity/role.entity';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'endy-coffee',
      entities: [UserEntity, RoleEntity],
      synchronize: true,
    }),
    UserModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
