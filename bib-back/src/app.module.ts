import { BibleModule } from '@/Bible/bible.module';
import { Chapter } from '@/Bible/chapter.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AIModule } from './AI/ai.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './Questions/questions.module';
import { Saint } from './Saints/saint.entity';
import { SaintsModule } from './Saints/saints.module';
import { Teaching } from './Teachings/teaching.entity';
import { TeachingsModule } from './Teachings/teachings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'dbdb',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'test',
      entities: [Chapter, Teaching, Saint],
      synchronize: true,
      autoLoadEntities: true,
    }),
    BibleModule,
    TeachingsModule,
    SaintsModule,
    QuestionsModule,
    AIModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
