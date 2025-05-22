import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { createTasksDto } from './dto/create-tasks-dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(dto: createTasksDto) {
    return this.prisma.tasks.create({
      data: {
        title: dto.title,
      },
    });
  }

  findAll() {
    return this.prisma.tasks.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async toggle(id: number) {
    const task = await this.prisma.tasks.findUnique({ where: { id } });
    if (!task) {
      throw new Error('Task not found');
    }
    return this.prisma.tasks.update({
      where: { id },
      data: { completed: !task.completed },
    });
  }

  delete(id: number) {
    return this.prisma.tasks.delete({
      where: { id },
    });
  }
}
