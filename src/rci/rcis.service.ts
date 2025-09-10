/* eslint-disable prettier/prettier */

import { Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateRciDto } from './dto/create-rci.dto';

export class RcisService extends PrismaClient implements OnModuleInit {
  private readonly logger = Logger;
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to the database');
  }

  async insertRci(payload: CreateRciDto) {
    try {
      const result = await this.rci.upsert({
        where: { id: payload.id },
        create: { ...payload },
        update: { ...payload },
      });
      this.logger.log('RCI inserted successfully', result);
      return result;
    } catch (error) {
      this.logger.error('Error inserting RCI', error);
    }
  }

  async getRcis() {
    return await this.rci.findMany();
  }
}
