import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks-dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //  Create a task methods

  @Post()
  create(@Body() dto: CreateTasksDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Patch(':id')
  toggle(@Param('id') id: number) {
    return this.tasksService.toggle(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}
