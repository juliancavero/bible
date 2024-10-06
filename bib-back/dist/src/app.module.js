"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const bible_module_1 = require("./Bible/bible.module");
const chapter_entity_1 = require("./Bible/chapter.entity");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const ai_module_1 = require("./AI/ai.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const questions_module_1 = require("./Questions/questions.module");
const saint_entity_1 = require("./Saints/saint.entity");
const saints_module_1 = require("./Saints/saints.module");
const stats_module_1 = require("./Stats/stats.module");
const teaching_entity_1 = require("./Teachings/teaching.entity");
const teachings_module_1 = require("./Teachings/teachings.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'dbdb',
                port: 3306,
                username: 'admin',
                password: 'admin',
                database: 'test',
                entities: [chapter_entity_1.Chapter, teaching_entity_1.Teaching, saint_entity_1.Saint],
                synchronize: true,
                autoLoadEntities: true,
            }),
            bible_module_1.BibleModule,
            teachings_module_1.TeachingsModule,
            saints_module_1.SaintsModule,
            questions_module_1.QuestionsModule,
            ai_module_1.AIModule,
            stats_module_1.StatsModule,
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map