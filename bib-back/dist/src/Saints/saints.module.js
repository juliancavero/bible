"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaintsModule = void 0;
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const saint_entity_1 = require("./saint.entity");
const saints_controller_1 = require("./saints.controller");
const saints_service_1 = require("./saints.service");
let SaintsModule = class SaintsModule {
};
exports.SaintsModule = SaintsModule;
exports.SaintsModule = SaintsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([saint_entity_1.Saint]), cloudinary_module_1.CloudinaryModule],
        controllers: [saints_controller_1.SaintsController],
        providers: [saints_service_1.SaintsService],
        exports: [saints_service_1.SaintsService],
    })
], SaintsModule);
//# sourceMappingURL=saints.module.js.map