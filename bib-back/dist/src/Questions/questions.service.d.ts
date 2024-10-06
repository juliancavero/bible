import { AIService } from '@/AI/ai.service';
import { Repository } from 'typeorm';
import { CreateQuestionDTO } from './dto/createQuestionDTO';
import { Question } from './question.entity';
export declare class QuestionsService {
    private questionsRepository;
    private aiService;
    constructor(questionsRepository: Repository<Question>, aiService: AIService);
    getById(id: number): Promise<Question>;
    createOne(body: CreateQuestionDTO): Promise<Question>;
    updateOne(id: number, body: CreateQuestionDTO): Promise<Question>;
    deleteOne(id: number): Promise<void>;
}
