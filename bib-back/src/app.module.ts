import { BibleModule } from '@/Bible/bible.module';
import { Chapter } from '@/Bible/chapter.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AIModule } from './AI/ai.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { QuestionsModule } from './Questions/questions.module';
import { Saint } from './Saints/saint.entity';
import { SaintsModule } from './Saints/saints.module';
import { StatsModule } from './Stats/stats.module';
import { Teaching } from './Teachings/teaching.entity';
import { TeachingsModule } from './Teachings/teachings.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    /* TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql102.infinityfree.com',
      //port: 3306,
      username: 'if0_37457602',
      password: 'uSj9HXn8iwDUzK',
      database: 'if0_37457602_test',
      entities: [Chapter, Teaching, Saint],
      synchronize: false,
      autoLoadEntities: false,
    }), */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Chapter, Teaching, Saint],
      synchronize: false,
      autoLoadEntities: false,
    }),
    BibleModule,
    TeachingsModule,
    SaintsModule,
    QuestionsModule,
    AIModule,
    StatsModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
