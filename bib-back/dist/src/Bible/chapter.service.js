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
exports.ChapterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chapter_entity_1 = require("./chapter.entity");
let ChapterService = class ChapterService {
    constructor(chapterRepository) {
        this.chapterRepository = chapterRepository;
    }
    async getChapters(params) {
        const { page = 1, limit = 10, search = '', order_by = 'book', order = 'desc', book = '', } = params;
        const [result, total] = await this.chapterRepository.findAndCount({
            take: limit,
            skip: (page - 1) * limit,
            where: {
                ...(book && { book }),
                ...(search && { text: (0, typeorm_2.Like)(`%${search}%`) }),
            },
            order: { [order_by]: order },
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
    async getMissingChapters() {
        const existingChapters = await this.chapterRepository.find({
            select: ['book', 'chapter'],
        });
        const result = [];
        for (let i = 0; i < existingChapters.length; i++) {
            const chapter = existingChapters[i];
            const inArray = result.find((item) => item.book === chapter.book);
            if (!inArray) {
                result.push({
                    book: chapter.book,
                    chapters: [chapter.chapter],
                });
            }
            else {
                inArray.chapters.push(chapter.chapter);
            }
        }
        return result;
    }
    async countAll() {
        return await this.chapterRepository.count();
    }
    async getById(id) {
        return await this.chapterRepository.findOne({
            where: { id },
        });
    }
    async getByBookAndChapter(book, chapter) {
        return await this.chapterRepository.findOne({
            where: { book, chapter },
        });
    }
    async createChapter(body) {
        const chapter = new chapter_entity_1.Chapter();
        chapter.book = body.book;
        chapter.chapter = body.chapter;
        chapter.text = body.text;
        return await this.chapterRepository.save(chapter);
    }
    async updateChapter(id, body) {
        const chapter = await this.chapterRepository.findOne({
            where: { id },
        });
        chapter.book = body.book;
        chapter.chapter = body.chapter;
        chapter.text = body.text;
        return await this.chapterRepository.save(chapter);
    }
    async deleteChapter(id) {
        await this.chapterRepository.delete(id);
    }
};
exports.ChapterService = ChapterService;
exports.ChapterService = ChapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chapter_entity_1.Chapter)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChapterService);
//# sourceMappingURL=chapter.service.js.map