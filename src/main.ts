import * as applicationinsights from 'applicationinsights';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_LOGGER_SERVICE } from './logger';

async function bootstrap() {
  applicationinsights.setup().start();
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(WINSTON_LOGGER_SERVICE));

  await app.listen(3000);
}
bootstrap();
