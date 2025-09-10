/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { RcisService } from "./rcis.service";
import { RcisController } from "./rcis.controller";

@Module({
    imports: [],
    providers: [RcisService],
    controllers: [RcisController],
})
export class RcisModule {}