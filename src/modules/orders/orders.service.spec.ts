import { Test, TestingModule } from "@nestjs/testing";
import { OrdersService } from "./orders.service";

describe('CategoryService',()=> {
    let service: OrdersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers:[OrdersService],
        }).compile();

        service = module.get<OrdersService>(OrdersService);
    });

    it('Should be defined',() => {
        expect(service).toBeDefined();
    })
})