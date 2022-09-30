import { Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'sfhdshfus',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy],
})
export class LoginModule {}
