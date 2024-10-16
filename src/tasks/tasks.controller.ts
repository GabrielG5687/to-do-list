import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Controller('/tasks')
export class TasksController {

    constructor(private readonly tasksService:TasksService, private prisma: PrismaService){}

    //cria as tasks
    @Post()
    async create(@Body() body: {title: string; description?: string }): Promise<Task>{
        return this.tasksService.createTask(body);
    }

    //lista as tasks
    @Get()
    async findAll(): Promise<Task[]>{
        return this.tasksService.getAllTasks()
    }

    //altra tasks
    @Put(':id')
    async update(@Param('id') id:string, @Body() body: Partial<{title: string; description?: string; status:string }>): 
    Promise <Task>{
        return this.tasksService.alterar(Number(id), body)
    }

    //deleta tasks
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Task>{
        return this.tasksService.deletando(Number(id))
    }
}
