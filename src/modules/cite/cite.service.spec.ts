import { Test, TestingModule } from "@nestjs/testing";
import { CiteService } from "./cite.service";

describe('CiteService',()=> {
    let service: CiteService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers:[CiteService],
        }).compile();

        service = module.get<CiteService>(CiteService);
    });

    it('Should be defined',() => {
        expect(service).toBeDefined();
    })
})