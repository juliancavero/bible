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
exports.StatsService = void 0;
const chapter_service_1 = require("../Bible/chapter.service");
const saints_service_1 = require("../Saints/saints.service");
const common_1 = require("@nestjs/common");
let StatsService = class StatsService {
    constructor(saintsService, chapterService) {
        this.saintsService = saintsService;
        this.chapterService = chapterService;
    }
    async getStats() {
        const totalSaints = await this.saintsService.countAll();
        const existingSaintsDates = await this.saintsService.getMissingSaintDates();
        const allSaints = await this.saintsService.findAll();
        const saintsWithImage = allSaints.filter((saint) => saint.image).length;
        const totalChapters = await this.chapterService.countAll();
        return {
            saints: {
                total: totalSaints,
                withImage: saintsWithImage,
                completedDays: ((existingSaintsDates.length || 0) * 100) / 365,
            },
            chapters: {
                total: totalChapters,
                completed: (totalChapters * 100) / 1189,
            },
        };
    }
};
exports.StatsService = StatsService;
exports.StatsService = StatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)()),
    __param(1, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [saints_service_1.SaintsService,
        chapter_service_1.ChapterService])
], StatsService);
//# sourceMappingURL=stats.service.js.map