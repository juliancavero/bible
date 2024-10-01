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
import { AllSaintsParamsDTO } from './dto/allSaintsParams.dto';
import { CreateSaintDTO } from './dto/createSaint.dto';
import { Saint } from './saint.entity';
import { SaintsService } from './saints.service';
import { MissingDatesType } from './types';

@Controller('saints')
export class SaintsController {
  constructor(private saintsService: SaintsService) {}

  @Get('/')
  getSaints(
    @Query() params: AllSaintsParamsDTO,
  ): Promise<PaginatedResponse<Saint>> {
    return this.saintsService.getAll(params);
  }

  @Get('/missing')
  getMissingDates(): Promise<MissingDatesType[]> {
    return this.saintsService.getMissingSaintDates();
  }

  @Get('/:id')
  getSaintDetails(@Param('id') id: number): Promise<Saint> {
    return this.saintsService.getById(id);
  }

  @Get('/date/:month/:day')
  getBy(@Param('day') day: number, @Param('month') month: string) {
    return this.saintsService.getBy(Number(day), Number(month));
  }

  @Get('/last')
  getTodays(): Promise<Saint> {
    return this.saintsService.getLastOne();
  }

  @Post('/')
  createSaint(@Body() createSaintDto: CreateSaintDTO): Promise<Saint> {
    return this.saintsService.createOne(createSaintDto);
  }

  @Put('/:id')
  updateSaint(
    @Param('id') id: number,
    @Body() createSaintDto: CreateSaintDTO,
  ): Promise<Saint> {
    return this.saintsService.updateOne(id, createSaintDto);
  }

  @Delete('/:id')
  deleteSaint(@Param('id') id: number): Promise<void> {
    return this.saintsService.deleteOne(id);
  }
}
