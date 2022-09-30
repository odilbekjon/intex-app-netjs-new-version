import { Test, TestingModule } from "@nestjs/testing";
import { ConsultationsController } from "./consultations.controller";
import { ConsultationsService } from "./consultations.service"

describe('CategoryController', () => {
    let controller: ConsultationsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ ConsultationsController ],
            providers: [ ConsultationsService ],
        }).compile();

        controller = module.get<ConsultationsController>(ConsultationsController);
    })

    describe('root', () => {
        it('Should be defined', () => {
            expect(controller).toBeDefined();
        });
    });
});