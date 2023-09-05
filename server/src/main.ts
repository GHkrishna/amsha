import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const SERVER_PORT = process.env.SERVER_PORT;
  const CLIENT_PORT_FOR_CORS = process.env.CLIENT_PORT_FOR_CORS;
  const CLIENT_IP_FOR_CORS = process.env.CLIENT_IP_FOR_CORS;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: `${CLIENT_IP_FOR_CORS}:${CLIENT_PORT_FOR_CORS}`, // Replace with your React app's URL
  });
  await app.listen(SERVER_PORT);
}
bootstrap();
