import { NestFactory } from '@nestjs/core';
import 'module-alias/register';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3100',
      'https://bible-tawny.vercel.app',
      'https://bible-office.vercel.app',
      // '*',
    ],
    //origin: '*', // Permitir todos los orígenes
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permitir todos los métodos
    //credentials: true, // Permitir credenciales como cookies
  });
  await app.listen(3200);
}
bootstrap();
