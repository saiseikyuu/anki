import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUsersDto } from './dto/create-users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() dto: createUsersDto) {
    return this.usersService.create(dto);
  }

  @Delete(':id')
  delete(@Body('id') id: number) {
    return this.usersService.delete(id);
  }

  @Patch(':id')
  patch(@Body('id') id: number, @Body() dto: createUsersDto) {
    return this.usersService.update(id, dto);
  }
}
