import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { PaginatedResponse } from '@/common/paginatedResponse';
import { Repository } from 'typeorm';
import { AllSaintsParamsDTO } from './dto/allSaintsParams.dto';
import { CreateSaintDTO } from './dto/createSaint.dto';
import { Saint } from './saint.entity';
import { MissingDatesType } from './types';
export declare class SaintsService {
    private saintsRepository;
    private cloudinaryService;
    constructor(saintsRepository: Repository<Saint>, cloudinaryService: CloudinaryService);
    getAll(params: AllSaintsParamsDTO): Promise<PaginatedResponse<Saint>>;
    getMissingSaintDates(): Promise<MissingDatesType[]>;
    findAll(): Promise<Saint[]>;
    countAll(): Promise<number>;
    getById(id: number): Promise<Saint>;
    getLastOne(): Promise<Saint>;
    getBy(day: number, month: number): Promise<Saint[]>;
    createOne(body: CreateSaintDTO, file: Express.Multer.File): Promise<Saint>;
    unMainAllSaints(month: number, day: number): Promise<void>;
    updateOne(id: number, body: CreateSaintDTO, file: Express.Multer.File): Promise<Saint>;
    deleteOne(id: number): Promise<void>;
}
