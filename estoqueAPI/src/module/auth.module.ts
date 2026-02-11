import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controller/auth.controller';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from 'src/guard/role.guard';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  imports: [
    UserModule, 
    PassportModule, 
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, RolesGuard],
  exports: [JwtModule, PassportModule]
})
export class AuthModule {}
