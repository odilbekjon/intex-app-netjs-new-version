import { IsString } from "class-validator";


export class CategoryDto {
    @IsString()
    nameRu:string;

    @IsString()
    nameUz:string;

    @IsString()
    catId:string;
}