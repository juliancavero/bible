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
exports.TeachingsController = void 0;
const common_1 = require("@nestjs/common");
const createTeaching_dto_1 = require("./dto/createTeaching.dto");
const teachings_service_1 = require("./teachings.service");
let TeachingsController = class TeachingsController {
    constructor(teachingsService) {
        this.teachingsService = teachingsService;
    }
    getTeachings(params) {
        return this.teachingsService.getAll(params);
    }
    getBy(book, chapter) {
        return this.teachingsService.getBy(book, Number(chapter));
    }
    getTodays() {
        return this.teachingsService.getLastOne();
    }
    createTeaching(createTeachingDTo) {
        return this.teachingsService.createOne(createTeachingDTo);
    }
};
exports.TeachingsController = TeachingsController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeachingsController.prototype, "getTeachings", null);
__decorate([
    (0, common_1.Get)('/by'),
    __param(0, (0, common_1.Query)('book')),
    __param(1, (0, common_1.Query)('chapter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TeachingsController.prototype, "getBy", null);
__decorate([
    (0, common_1.Get)('/today'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeachingsController.prototype, "getTodays", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTeaching_dto_1.CreateTeachingDTO]),
    __metadata("design:returntype", Promise)
], TeachingsController.prototype, "createTeaching", null);
exports.TeachingsController = TeachingsController = __decorate([
    (0, common_1.Controller)('teachings'),
    __metadata("design:paramtypes", [teachings_service_1.TeachingsService])
], TeachingsController);
//# sourceMappingURL=teachings.controller.js.map