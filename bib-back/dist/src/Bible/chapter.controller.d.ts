import { PaginatedResponse } from '@/common/paginatedResponse';
import { Chapter } from './chapter.entity';
import { ChapterService } from './chapter.service';
import { AllChaptersParamsDTO } from './dto/allChaptersParams.dto';
import { CreateChapterDTO } from './dto/createChapter.dto';
import { MissingChaptersType } from './types';
export declare class ChapterController {
    private chapterService;
    constructor(chapterService: ChapterService);
    getAllChapters(params: AllChaptersParamsDTO): Promise<PaginatedResponse<Chapter>>;
    getSaintDetails(id: number): Promise<Chapter>;
    getMissingChapters(): Promise<MissingChaptersType[]>;
    getChapterByBookAndChapter(book: string, chapter: number): Promise<Chapter>;
    createChapter(createChapterDTO: CreateChapterDTO): Promise<Chapter>;
    updateChapter(id: number, createChapterDTO: CreateChapterDTO): Promise<Chapter>;
    deleteChapter(id: number): Promise<void>;
}
