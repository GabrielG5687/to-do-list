import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  const port = process.env.PORT || 3333


  await app.listen(port);

  app.enableCors();
  console.log(`Servidor rodando em: http://localhost:${port}`);
}
bootstrap();
