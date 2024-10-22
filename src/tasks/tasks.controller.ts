import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundError } from 'rxjs';
import { STATUS_CODES } from 'http';

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
        try {
            const taskUdate= await this.tasksService.alterar(Number(id), body)
            return taskUdate
        }catch(error){
            console.error(error)
            throw new HttpException(
                {message: 'Essta tarefa não foi encontrada!'},
                HttpStatus.INTERNAL_SERVER_ERROR
            )
        }
    }

    //deleta tasks
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Task>{

        try {
            const taskRemoved = await this.tasksService.deletando(Number(id))
            return taskRemoved
        }
        catch(error){
            console.error(error)
            throw new HttpException(
                {message: 'Essta tarefa não foi encontrada!'},
                HttpStatus.INTERNAL_SERVER_ERROR
            )
        }        
    }
}
