"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
require("module-alias/register");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:3100'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
    await app.listen(3200);
}
bootstrap();
//# sourceMappingURL=main.js.map