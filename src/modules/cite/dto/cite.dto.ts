import { IsNumber, IsString } from "class-validator";

export class CiteDto {
    @IsString()
    phone:string;

    @IsString()
    addressRu:string;

    @IsString()
    addressUz:string;

    @IsString()
    timeRu:string;

    @IsString()
    timeUz:string;

    @IsString()
    telegram:string;

    @IsString()
    instagram:string;

    @IsNumber()
    citeId:number;
}