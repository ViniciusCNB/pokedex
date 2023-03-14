import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './infra/database/database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const databaseService = app.get(DatabaseService);
  await databaseService.connectDatabase();
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
