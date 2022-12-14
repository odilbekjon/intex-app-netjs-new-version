import { Module, NestModule } from "@nestjs/common";
import { ConsultationsController } from "./consultations.controller";
import { ConsultationsService } from "./consultations.service";


@Module({
    controllers:[ConsultationsController],
    providers:[ConsultationsService],
})

export class ConsultationsModule {}