import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterController } from './chapter.controller';
import { Chapter } from './chapter.entity';
import { ChapterService } from './chapter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  providers: [ChapterService],
  controllers: [ChapterController],
})
export class BibleModule {}
