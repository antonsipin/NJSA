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
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {
    this.configService.get('TEST');
  }

  @Post('find')
  async getByCategory(@Body() dto: FindTopPageDto): Promise<any[]> {}

  @Post('save')
  async save(@Body() dto: any): Promise<TopPageModel> {}

  @Delete('delete')
  async delete(@Body() dto: any): Promise<any> {}
  //   @Post('create')
  //   async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  //   @Get(':id')
  //   async get(@Param('id') id: string) {}

  //   @Delete(':id')
  //   async delete(@Param('id') id: string) {}

  //   @Patch(':id')
  //   async patch(@Body() dto: TopPageModel) {}

  //   @HttpCode(200)
  //   @Post()
  //   async find(@Body() dto: FindTopPageDto) {}
}
