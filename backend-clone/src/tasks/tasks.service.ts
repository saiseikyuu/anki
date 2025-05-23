import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateTasksDto } from './dto/create-tasks-dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  // Create findAll and toggle methods
  create(dto: CreateTasksDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  delete(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }

  async toggle(id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new Error('Task not found');
    }

    return this.prisma.task.update({
      where: { id },
      data: { completed: !task.completed },
    });
  }
}
