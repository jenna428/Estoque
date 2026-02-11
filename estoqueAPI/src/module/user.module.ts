import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { UserRepository } from 'src/respository/user.repository';
import { UserService } from 'src/service/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export class UserModule {}
