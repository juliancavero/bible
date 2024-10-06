"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsService = void 0;
const ai_service_1 = require("../AI/ai.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_entity_1 = require("./question.entity");
let QuestionsService = class QuestionsService {
    constructor(questionsRepository, aiService) {
        this.questionsRepository = questionsRepository;
        this.aiService = aiService;
    }
    async getById(id) {
        return await this.questionsRepository.findOneBy({
            id: id,
        });
    }
    async createOne(body) {
        const { text } = body;
        const question = new question_entity_1.Question();
        question.text = text;
        question.answer = await this.aiService.answerQuestion(text);
        return await this.questionsRepository.save(question);
    }
    async updateOne(id, body) {
        const { text } = body;
        const question = await this.questionsRepository.findOne({
            where: {
                id: id,
            },
        });
        question.text = text;
        return await this.questionsRepository.save(question);
    }
    async deleteOne(id) {
        await this.questionsRepository.delete({
            id: id,
        });
    }
};
exports.QuestionsService = QuestionsService;
exports.QuestionsService = QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(question_entity_1.Question)),
    __param(1, (0, common_1.Inject)(ai_service_1.AIService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ai_service_1.AIService])
], QuestionsService);
//# sourceMappingURL=questions.service.js.map