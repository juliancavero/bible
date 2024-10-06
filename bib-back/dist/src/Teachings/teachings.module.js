"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const teaching_entity_1 = require("./teaching.entity");
const teachings_controller_1 = require("./teachings.controller");
const teachings_service_1 = require("./teachings.service");
let TeachingsModule = class TeachingsModule {
};
exports.TeachingsModule = TeachingsModule;
exports.TeachingsModule = TeachingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([teaching_entity_1.Teaching])],
        controllers: [teachings_controller_1.TeachingsController],
        providers: [teachings_service_1.TeachingsService],
    })
], TeachingsModule);
//# sourceMappingURL=teachings.module.js.map