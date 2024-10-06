import { CreateQuestionDTO } from './dto/createQuestionDTO';
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';
export declare class QuestionsController {
    private questionsService;
    constructor(questionsService: QuestionsService);
    getQuestionDetails(id: number): Promise<Question>;
    createQuestion(createQuestionDTO: CreateQuestionDTO): Promise<Question>;
    updateQuestion(id: number, createQuestionDTO: CreateQuestionDTO): Promise<Question>;
    deleteQuestion(id: number): Promise<void>;
}
