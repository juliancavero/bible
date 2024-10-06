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
exports.SaintsService = void 0;
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const saint_entity_1 = require("./saint.entity");
let SaintsService = class SaintsService {
    constructor(saintsRepository, cloudinaryService) {
        this.saintsRepository = saintsRepository;
        this.cloudinaryService = cloudinaryService;
    }
    async getAll(params) {
        const { page = 1, limit = 10, search = '', order_by = 'createdAt', order = 'desc', day = '', month = '', withoutImage = false, } = params;
        const [result, total] = await this.saintsRepository.findAndCount({
            take: limit,
            skip: (page - 1) * limit,
            where: {
                ...(search && { name: (0, typeorm_2.Like)(`%${search}%`) }),
                ...(day && { day: Number(day) }),
                ...(month && { month: Number(month) }),
                ...(withoutImage && { image: (0, typeorm_2.Like)('') }),
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
    async getMissingSaintDates() {
        const existingDates = (await this.saintsRepository.find({
            select: ['day', 'month'],
        }));
        return existingDates.filter((item, index, self) => index ===
            self.findIndex((t) => t.month === item.month && t.day === item.day));
    }
    async findAll() {
        return await this.saintsRepository.find();
    }
    async countAll() {
        return await this.saintsRepository.count();
    }
    async getById(id) {
        return await this.saintsRepository.findOneBy({
            id: id,
        });
    }
    async getLastOne() {
        return await this.saintsRepository.findOne({
            order: {
                createdAt: 'DESC',
            },
        });
    }
    async getBy(day, month) {
        return await this.saintsRepository.findBy({
            day: day,
            month: month,
        });
    }
    async createOne(body, file) {
        const { day, month, name, text, isMain } = body;
        const saint = new saint_entity_1.Saint();
        saint.day = day;
        saint.month = month;
        saint.text = text;
        saint.name = name;
        saint.isMain = isMain === 'true';
        if (file) {
            const cloudinaryResponse = await this.cloudinaryService.uploadFile(file);
            saint.image = cloudinaryResponse.secure_url;
        }
        if (isMain) {
            await this.unMainAllSaints(month, day);
        }
        return await this.saintsRepository.save(saint);
    }
    async unMainAllSaints(month, day) {
        await this.saintsRepository.update({
            day: day,
            month: month,
        }, {
            isMain: false,
        });
    }
    async updateOne(id, body, file) {
        const { day, month, name, text, isMain } = body;
        const saint = await this.saintsRepository.findOneBy({
            id: id,
        });
        saint.day = day;
        saint.month = month;
        saint.text = text;
        saint.name = name;
        saint.isMain = isMain === 'true';
        if (file) {
            const cloudinaryResponse = await this.cloudinaryService.uploadFile(file);
            saint.image = cloudinaryResponse.secure_url;
        }
        if (isMain) {
            await this.unMainAllSaints(month, day);
        }
        return await this.saintsRepository.save(saint);
    }
    async deleteOne(id) {
        await this.saintsRepository.delete({
            id: id,
        });
    }
};
exports.SaintsService = SaintsService;
exports.SaintsService = SaintsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(saint_entity_1.Saint)),
    __param(1, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cloudinary_service_1.CloudinaryService])
], SaintsService);
//# sourceMappingURL=saints.service.js.map