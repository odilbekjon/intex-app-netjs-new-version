import { IsNumber, IsString } from "class-validator";

export class OrderDto {
    @IsNumber()
    productId:number;

    @IsString()
    userName:string;

    @IsString()
    userPhone:string;

    @IsString()
    userAddress:string;
}