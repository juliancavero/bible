import { PaginatedResponse } from '@/common/paginatedResponse';
import { AllTeachingsParams } from './dto/allTeachingsParams.dto';
import { CreateTeachingDTO } from './dto/createTeaching.dto';
import { Teaching } from './teaching.entity';
import { TeachingsService } from './teachings.service';
export declare class TeachingsController {
    private teachingsService;
    constructor(teachingsService: TeachingsService);
    getTeachings(params: AllTeachingsParams): Promise<PaginatedResponse<Teaching>>;
    getBy(book: string, chapter: string): Promise<Teaching[]>;
    getTodays(): Promise<Teaching>;
    createTeaching(createTeachingDTo: CreateTeachingDTO): Promise<Teaching>;
}
