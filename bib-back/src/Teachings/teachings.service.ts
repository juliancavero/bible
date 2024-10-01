import { PaginatedResponse } from '@/common/paginatedResponse';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { AllTeachingsParams } from './dto/allTeachingsParams.dto';
import { CreateTeachingDTO } from './dto/createTeaching.dto';
import { Teaching } from './teaching.entity';

@Injectable()
export class TeachingsService {
  constructor(
    @InjectRepository(Teaching)
    private teachingRepository: Repository<Teaching>,
  ) {}

  async getAll(
    params: AllTeachingsParams,
  ): Promise<PaginatedResponse<Teaching>> {
    const {
      page = 1,
      limit = 10,
      search = '',
      order_by = 'month',
      order = 'asc',
    } = params;

    const [result, total] = await this.teachingRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        ...(search && { text: Like(`%${search}%`) }),
      },
      order: { [order_by]: order.toUpperCase() },
    });

    return {
      data: result,
      meta: {
        total: total,
        page: Number(page),
        limit: Number(limit),
      },
    };
  }

  async getLastOne(): Promise<Teaching> {
    return await this.teachingRepository
      .createQueryBuilder()
      .orderBy('createdAt', 'DESC')
      .getOne();
  }

  async getBy(book: string, chapter: number): Promise<Teaching[]> {
    return await this.teachingRepository.findBy({
      book: book,
      chapter: chapter,
    });
  }

  async createOne(body: CreateTeachingDTO): Promise<Teaching> {
    const teaching = new Teaching();
    teaching.book = body.book;
    teaching.chapter = body.chapter;
    teaching.text = body.text;

    return await this.teachingRepository.save(teaching);
  }
}
