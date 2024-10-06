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
exports.SaintsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const createSaint_dto_1 = require("./dto/createSaint.dto");
const saints_service_1 = require("./saints.service");
let SaintsController = class SaintsController {
    constructor(saintsService) {
        this.saintsService = saintsService;
    }
    getSaints(params) {
        return this.saintsService.getAll(params);
    }
    getMissingDates() {
        return this.saintsService.getMissingSaintDates();
    }
    getSaintDetails(id) {
        return this.saintsService.getById(id);
    }
    getBy(day, month) {
        return this.saintsService.getBy(Number(day), Number(month));
    }
    getTodays() {
        return this.saintsService.getLastOne();
    }
    createSaint(createSaintDto, file) {
        return this.saintsService.createOne(createSaintDto, file);
    }
    updateSaint(id, createSaintDto, file) {
        return this.saintsService.updateOne(id, createSaintDto, file);
    }
    deleteSaint(id) {
        return this.saintsService.deleteOne(id);
    }
};
exports.SaintsController = SaintsController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SaintsController.prototype, "getSaints", null);
__decorate([
    (0, common_1.Get)('/missing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaintsController.prototype, "getMissingDates", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaintsController.prototype, "getSaintDetails", null);
__decorate([
    (0, common_1.Get)('/date/:month/:day'),
    __param(0, (0, common_1.Param)('day')),
    __param(1, (0, common_1.Param)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], SaintsController.prototype, "getBy", null);
__decorate([
    (0, common_1.Get)('/last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaintsController.prototype, "getTodays", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSaint_dto_1.CreateSaintDTO, Object]),
    __metadata("design:returntype", Promise)
], SaintsController.prototype, "createSaint", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createSaint_dto_1.CreateSaintDTO, Object]),
    __metadata("design:returntype", Promise)
], SaintsController.prototype, "updateSaint", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaintsController.prototype, "deleteSaint", null);
exports.SaintsController = SaintsController = __decorate([
    (0, common_1.Controller)('saints'),
    __metadata("design:paramtypes", [saints_service_1.SaintsService])
], SaintsController);
//# sourceMappingURL=saints.controller.js.map