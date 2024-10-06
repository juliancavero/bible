import { PaginatedResponse } from '@/common/paginatedResponse';
import { AllSaintsParamsDTO } from './dto/allSaintsParams.dto';
import { CreateSaintDTO } from './dto/createSaint.dto';
import { Saint } from './saint.entity';
import { SaintsService } from './saints.service';
import { MissingDatesType } from './types';
export declare class SaintsController {
    private saintsService;
    constructor(saintsService: SaintsService);
    getSaints(params: AllSaintsParamsDTO): Promise<PaginatedResponse<Saint>>;
    getMissingDates(): Promise<MissingDatesType[]>;
    getSaintDetails(id: number): Promise<Saint>;
    getBy(day: number, month: string): Promise<Saint[]>;
    getTodays(): Promise<Saint>;
    createSaint(createSaintDto: CreateSaintDTO, file: Express.Multer.File): Promise<Saint>;
    updateSaint(id: number, createSaintDto: CreateSaintDTO, file: Express.Multer.File): Promise<Saint>;
    deleteSaint(id: number): Promise<void>;
}
