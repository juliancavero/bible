import { ChapterService } from '@/Bible/chapter.service';
import { SaintsService } from '@/Saints/saints.service';
import { StatsType } from './types';
export declare class StatsService {
    private readonly saintsService;
    private readonly chapterService;
    constructor(saintsService: SaintsService, chapterService: ChapterService);
    getStats(): Promise<StatsType>;
}
