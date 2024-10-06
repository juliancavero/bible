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
exports.TeachingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const teaching_entity_1 = require("./teaching.entity");
let TeachingsService = class TeachingsService {
    constructor(teachingRepository) {
        this.teachingRepository = teachingRepository;
    }
    async getAll(params) {
        const { page = 1, limit = 10, search = '', order_by = 'month', order = 'asc', } = params;
        const [result, total] = await this.teachingRepository.findAndCount({
            take: limit,
            skip: (page - 1) * limit,
            where: {
                ...(search && { text: (0, typeorm_2.Like)(`%${search}%`) }),
            },
            order: { [order_by]: order.toUpperCase() },
        });
        return {
            data: result,
            meta: {
                total: total,
                page: Number(page),
                limit: Number(limit),
            },
        };
    }
    async getLastOne() {
        return await this.teachingRepository
            .createQueryBuilder()
            .orderBy('createdAt', 'DESC')
            .getOne();
    }
    async getBy(book, chapter) {
        return await this.teachingRepository.findBy({
            book: book,
            chapter: chapter,
        });
    }
    async createOne(body) {
        const teaching = new teaching_entity_1.Teaching();
        teaching.book = body.book;
        teaching.chapter = body.chapter;
        teaching.text = body.text;
        return await this.teachingRepository.save(teaching);
    }
};
exports.TeachingsService = TeachingsService;
exports.TeachingsService = TeachingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teaching_entity_1.Teaching)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeachingsService);
//# sourceMappingURL=teachings.service.js.map