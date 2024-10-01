import { PaginatedResponse } from '@/common/paginatedResponse';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AllTeachingsParams } from './dto/allTeachingsParams.dto';
import { CreateTeachingDTO } from './dto/createTeaching.dto';
import { Teaching } from './teaching.entity';
import { TeachingsService } from './teachings.service';

@Controller('teachings')
export class TeachingsController {
  constructor(private teachingsService: TeachingsService) {}

  @Get('/')
  getTeachings(
    @Query() params: AllTeachingsParams,
  ): Promise<PaginatedResponse<Teaching>> {
    return this.teachingsService.getAll(params);
  }

  @Get('/by')
  getBy(@Query('book') book: string, @Query('chapter') chapter: string) {
    return this.teachingsService.getBy(book, Number(chapter));
  }

  @Get('/today')
  getTodays(): Promise<Teaching> {
    return this.teachingsService.getLastOne();
  }

  @Post('/')
  createTeaching(
    @Body() createTeachingDTo: CreateTeachingDTO,
  ): Promise<Teaching> {
    return this.teachingsService.createOne(createTeachingDTo);
  }
}
