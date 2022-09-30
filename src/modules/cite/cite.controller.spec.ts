import { Test, TestingModule } from "@nestjs/testing";
import { CiteController } from "./cite.controller";
import { CiteService } from "./cite.service"

describe('CiteController', () => {
    let controller: CiteController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ CiteController ],
            providers: [ CiteService ],
        }).compile();

        controller = module.get<CiteController>(CiteController);
    })

    describe('root', () => {
        it('Should be defined', () => {
            expect(controller).toBeDefined();
        });
    });
});