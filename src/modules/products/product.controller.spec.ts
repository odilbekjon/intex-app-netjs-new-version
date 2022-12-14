import { Test, TestingModule } from "@nestjs/testing";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service"

describe('ProductController', () => {
    let controller: ProductController;

    const mockProductService = {
        AddProduct: jest.fn(dto => {
            return {
                id:Date.now(),
                ...dto
            }
        }),

        update: jest.fn().mockImplementation((id,dto) => ({
            id,
            ...dto
        }))
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ ProductController ],
            providers: [ ProductService ],
        }).overrideProvider(ProductService).useValue(mockProductService).compile();

        controller = module.get<ProductController>(ProductController);
    })

    describe('root', () => {
        it('Should be defined', () => {
            expect(controller).toBeDefined();
        });

        it('Should create a product', () => {
            expect(controller.AddProduct).toEqual({
                id: expect.any(Number),
                nameRu:'test',
                nameUz:'test',
                oldPrice:'test sum',
                newPrice:'test sum',
                count:7,
                frameRu:'testRu',
                frameUz:'testUz',
                size:'test size',
                depth:8,
                status:true,
                image:'',
                categoryId:2
            });

            expect(mockProductService.AddProduct).toHaveBeenCalled();
        });

        it('should update a user', () => {
            expect(controller.UpdateProduct).toEqual({
                nameRu:'test',
                nameUz:'test',
                oldPrice:'test',
                newPrice:'test',
                count:5,
                frameRu:'test',
                frameUz:'test',
                size:'test',
                depth:5,
                status:true,
                categoryId:'1',
                productId:1,
            })
        })
    });
});
