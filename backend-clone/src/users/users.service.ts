import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { createUsersDto } from './dto/create-users-dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Create a new user

  create(dto: createUsersDto) {
    return this.prisma.user.create({
      data: {
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        number: dto.number,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  delete(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  // Update a user
  update(id: number, dto: createUsersDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        number: dto.number,
      },
    });
  }
}
