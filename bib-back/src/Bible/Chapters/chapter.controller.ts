import { PaginatedResponse } from '@/common/paginatedResponse';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MissingChaptersType } from '../types';
import { Chapter } from './chapter.entity';
import { ChapterService } from './chapter.service';
import { AllChaptersParamsDTO } from './dto/allChaptersParams.dto';
import { CreateChapterDTO } from './dto/createChapter.dto';

@Controller('chapters')
export class ChapterController {
  constructor(private chapterService: ChapterService) {}

  @Get('/')
  getAllChapters(
    @Query() params: AllChaptersParamsDTO,
  ): Promise<PaginatedResponse<Chapter>> {
    return this.chapterService.getChapters(params);
  }

  @Get('chapter/:id')
  getSaintDetails(@Param('id') id: number): Promise<Chapter> {
    return this.chapterService.getById(id);
  }

  @Get('missing')
  getMissingChapters(): Promise<MissingChaptersType[]> {
    return this.chapterService.getMissingChapters();
  }

  @Get('book-chapter/:book/:chapter')
  getChapterByBookAndChapter(
    @Param('book') book: string,
    @Param('chapter') chapter: number,
  ): Promise<Chapter> {
    return this.chapterService.getByBookAndChapter(book, chapter);
  }

  @Post('/')
  createChapter(@Body() createChapterDTO: CreateChapterDTO): Promise<Chapter> {
    return this.chapterService.createChapter(createChapterDTO);
  }

  @Put('/:id')
  updateChapter(
    @Param('id') id: number,
    @Body() createChapterDTO: CreateChapterDTO,
  ): Promise<Chapter> {
    return this.chapterService.updateChapter(id, createChapterDTO);
  }

  @Delete('/:id')
  deleteChapter(@Param('id') id: number): Promise<void> {
    return this.chapterService.deleteChapter(id);
  }
}
