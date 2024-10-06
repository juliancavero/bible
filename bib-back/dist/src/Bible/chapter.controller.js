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
exports.ChapterController = void 0;
const common_1 = require("@nestjs/common");
const chapter_service_1 = require("./chapter.service");
const createChapter_dto_1 = require("./dto/createChapter.dto");
let ChapterController = class ChapterController {
    constructor(chapterService) {
        this.chapterService = chapterService;
    }
    getAllChapters(params) {
        return this.chapterService.getChapters(params);
    }
    getSaintDetails(id) {
        return this.chapterService.getById(id);
    }
    getMissingChapters() {
        return this.chapterService.getMissingChapters();
    }
    getChapterByBookAndChapter(book, chapter) {
        return this.chapterService.getByBookAndChapter(book, chapter);
    }
    createChapter(createChapterDTO) {
        return this.chapterService.createChapter(createChapterDTO);
    }
    updateChapter(id, createChapterDTO) {
        return this.chapterService.updateChapter(id, createChapterDTO);
    }
    deleteChapter(id) {
        return this.chapterService.deleteChapter(id);
    }
};
exports.ChapterController = ChapterController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "getAllChapters", null);
__decorate([
    (0, common_1.Get)('chapter/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "getSaintDetails", null);
__decorate([
    (0, common_1.Get)('missing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "getMissingChapters", null);
__decorate([
    (0, common_1.Get)('book-chapter/:book/:chapter'),
    __param(0, (0, common_1.Param)('book')),
    __param(1, (0, common_1.Param)('chapter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "getChapterByBookAndChapter", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createChapter_dto_1.CreateChapterDTO]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "createChapter", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createChapter_dto_1.CreateChapterDTO]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "updateChapter", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChapterController.prototype, "deleteChapter", null);
exports.ChapterController = ChapterController = __decorate([
    (0, common_1.Controller)('chapters'),
    __metadata("design:paramtypes", [chapter_service_1.ChapterService])
], ChapterController);
//# sourceMappingURL=chapter.controller.js.map