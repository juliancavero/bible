import { PaginatedResponse } from '@/common/paginatedResponse';
import { Repository } from 'typeorm';
import { Chapter } from './chapter.entity';
import { AllChaptersParamsDTO } from './dto/allChaptersParams.dto';
import { CreateChapterDTO } from './dto/createChapter.dto';
import { MissingChaptersType } from './types';
export declare class ChapterService {
    private chapterRepository;
    constructor(chapterRepository: Repository<Chapter>);
    getChapters(params: AllChaptersParamsDTO): Promise<PaginatedResponse<Chapter>>;
    getMissingChapters(): Promise<MissingChaptersType[]>;
    countAll(): Promise<number>;
    getById(id: number): Promise<Chapter>;
    getByBookAndChapter(book: string, chapter: number): Promise<Chapter>;
    createChapter(body: CreateChapterDTO): Promise<Chapter>;
    updateChapter(id: number, body: CreateChapterDTO): Promise<Chapter>;
    deleteChapter(id: number): Promise<void>;
}
