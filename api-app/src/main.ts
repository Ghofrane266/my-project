import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Bootstrap the NestJS application
 * Set the global prefix to '/api/v1'
 * Enable CORS for all origins
 * Use the ValidationPipe as a global pipe
 * Listen on the port specified by the PORT environment variable or 5000 if not specified
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Product example')
    .setDescription('The Products API description')
    .setVersion('1.0')
    // .addApiKey({type:'apiKey',name:'Authorization',in:'header'},'apiKey')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
