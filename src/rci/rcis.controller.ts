/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Headers, Inject, Post } from '@nestjs/common';
import { RcisService } from './rcis.service';
import { CreateRciDto } from './dto/create-rci.dto';

@Controller('rcis')
export class RcisController {
  constructor(@Inject(RcisService) private readonly rciService: RcisService) {}

  @Post()
  async createUpdateRci(
    @Headers('x-api-key') apiKey: string,
    @Body() payload: CreateRciDto,
  ) {
    if (apiKey !== process.env.API_KEY) {
      throw new Error('Invalid API Key');
    }
    return await this.rciService.insertRci(payload);
  }

  @Get()
  async getRcis(@Headers('x-api-key') apiKey: string) {
    if (apiKey !== process.env.API_KEY) {
      throw new Error('Invalid API Key');
    }
    return await this.rciService.getRcis();
  }

}
