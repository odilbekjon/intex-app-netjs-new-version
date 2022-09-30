import { Body, Controller, Delete, Get, HttpException, HttpStatus, UseGuards, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { JwtAuthGuard } from "../LoginAdmin/jwt.guard";

@ApiTags('api/orders')
@Controller('api/orders')
export class OrdersController {
    constructor(private readonly ordersService:OrdersService ) {}

    @Get()
    async AllOrders() {
        try {
            const getOrder = await this.ordersService.GET();
            return getOrder
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Post()
    async PostOrder(
        @Body('productId') productId:number,
        @Body('userName') userName:string,
        @Body('userPhone') userPhone:string,
        @Body('userAddress') userAddress:string
    ){
        const addOrder = await this.ordersService.POST(productId, userName, userPhone, userAddress)

        return addOrder
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    async DELETE(
        @Body('id') id:number,
    ) {
        const deleteOrder = await this.ordersService.DELETE(id)
        
        return deleteOrder
    }
}
