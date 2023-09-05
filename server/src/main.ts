import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const SERVER_PORT = process.env.SERVER_PORT;
  const CLIENT_PORT_FOR_CORS = process.env.CLIENT_PORT_FOR_CORS;
  const CLIENT_IP_FOR_CORS = process.env.CLIENT_IP_FOR_CORS;

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: `${CLIENT_IP_FOR_CORS}:${CLIENT_PORT_FOR_CORS}`, // Replace with your React app's URL
  });

  //This is config file for swagger interface
  const config = new DocumentBuilder()
    .setTitle('Amshah: An NFT fractionalization protocol')
    .setDescription(
      'This is the backend for a NFT fractionalization platform, you can view the code from <a target="_blank" href="https://github.com/GHkrishna/amshah" > the GitHub repository</a>',
    )
    .setVersion('v 0.0.0')
    // .addTag('API') //This is only necessary if we have multiple nested or heirarchical APIs
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(SERVER_PORT);
}

bootstrap();
