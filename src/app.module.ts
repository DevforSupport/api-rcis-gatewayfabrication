/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RcisModule } from './rci/rcis.module';

@Module({
  imports: [RcisModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
