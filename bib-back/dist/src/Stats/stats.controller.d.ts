import { StatsService } from './stats.service';
import { StatsType } from './types';
export declare class StatsController {
    private statsService;
    constructor(statsService: StatsService);
    getTeachings(): Promise<StatsType>;
}
