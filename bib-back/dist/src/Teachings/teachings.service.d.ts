import { PaginatedResponse } from '@/common/paginatedResponse';
import { Repository } from 'typeorm';
import { AllTeachingsParams } from './dto/allTeachingsParams.dto';
import { CreateTeachingDTO } from './dto/createTeaching.dto';
import { Teaching } from './teaching.entity';
export declare class TeachingsService {
    private teachingRepository;
    constructor(teachingRepository: Repository<Teaching>);
    getAll(params: AllTeachingsParams): Promise<PaginatedResponse<Teaching>>;
    getLastOne(): Promise<Teaching>;
    getBy(book: string, chapter: number): Promise<Teaching[]>;
    createOne(body: CreateTeachingDTO): Promise<Teaching>;
}
