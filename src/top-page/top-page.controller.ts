import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Patch,
  HttpCode,
  Param,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model/top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}