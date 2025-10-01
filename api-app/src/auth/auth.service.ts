import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto, LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new HttpException('invalid email', HttpStatus.BAD_REQUEST);
    }

    const { password, ...rest } = user;
    if (await bcrypt.compare(dto.password, password)) {
      const token = this.jwtService.sign(rest);
      return token;
    } else {
      throw new HttpException('invalid password', HttpStatus.BAD_REQUEST);
    }
  }

  async getMyInfo(token: string) {
    const myInfo = this.jwtService.decode(token);
    return myInfo;
  }

  async signup(dto: CreateUserDto) {
    const { password, email, ...rest } = dto;
    const newUser = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (newUser) {
      throw new HttpException('email already exists', HttpStatus.BAD_REQUEST);
      // alert('email already exists')
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    return await this.prisma.user.create({
      data: { ...dto, password: hashedPassword },
    });
  }
}
