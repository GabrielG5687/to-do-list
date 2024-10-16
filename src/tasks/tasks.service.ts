import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: { title: string; description?: string }): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });
  }

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }


  async deletando(id: number): Promise<Task>{
    return this.prisma.task.delete({
      where: {id},
    });
  }

  async alterar(id:number, data: Partial<{title: string; description?: string; status:string }>): Promise<Task>{
    return this.prisma.task.update({
      where: {id},
      data,
    });
  }

  
}