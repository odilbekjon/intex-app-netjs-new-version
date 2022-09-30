import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@ApiTags('api/login')
@Controller('api')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  // POST LOGIN
  @Post('login')
  async Login(@Body() loginDto: LoginDto) {
    const { name, password } = loginDto;

    const { login } = await this.loginService.POST(name, password);

    if (!login) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign(login, { expiresIn: '30m' });

    return { token };
  }
}
