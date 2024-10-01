import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teaching } from './teaching.entity';
import { TeachingsController } from './teachings.controller';
import { TeachingsService } from './teachings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teaching])],
  controllers: [TeachingsController],
  providers: [TeachingsService],
})
export class TeachingsModule {}
