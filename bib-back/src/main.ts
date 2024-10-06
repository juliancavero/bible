import { NestFactory } from '@nestjs/core';
import 'module-alias/register';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3100',
      'https://*.vercel.app',
    ],
    //origin: '*', // Permitir todos los orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //credentials: true, // Permitir credenciales como cookies
  });
  await app.listen(3200);
}
bootstrap();
