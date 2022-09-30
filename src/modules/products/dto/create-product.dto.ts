import { IsString, IsNumber, IsBoolean, IsArray } from "class-validator";


export class CreateProductDto {
    @IsString()
    nameRu:string;

    @IsString()
    nameUz:string;

    @IsString()
    oldPrice:string;

    @IsString()
    newPrice:string;

    @IsNumber()
    count:number;

    @IsString()
    frameRu:string;

    @IsString()
    frameUz:string;

    @IsString()
    size:string;

    @IsNumber()
    depth:number;

    @IsBoolean()
    status:boolean;

    @IsArray()
    image:[];

    @IsString()
    categoryId:string;

}