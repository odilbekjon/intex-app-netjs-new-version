import { IsString, IsNumber, IsBoolean } from "class-validator";

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

    @IsString()
    image_path:string;

    @IsString()
    categoryId:string;

}