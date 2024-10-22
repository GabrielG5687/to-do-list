import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  const port = process.env.PORT || 3333

  app.enableCors();
  await app.listen(port); 
  console.log(`Servidor rodando em: http://localhost:${port}`);
}
bootstrap();
