import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
 
@Injectable()
export class CiteService {
    constructor(@InjectModel() private readonly knex:Knex ){}

    async GET() {
        const AllCite = await this.knex.table('intex_cite')
        return {
            message:'OK',
            data: { cite: AllCite }
        }
    }

    async PUT(phone,addressRu,addressUz,timeRu,timeUz,telegram,instagram,citeId:number) {

        const UpdateCite = await this.knex('intex_cite').where('cite_id', citeId).update({
            cite_phone:phone,
            cite_address_ru:addressRu,
            cite_address_uz:addressUz,
            cite_time_ru:timeRu,
            cite_time_uz:timeUz,
            cite_telegram:telegram,
            cite_instagram:instagram
        });

        return {
            message:"PUT",
            UpdateCite
        }
    }
}