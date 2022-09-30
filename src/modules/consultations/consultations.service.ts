import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
 
@Injectable()
export class ConsultationsService {
    constructor(@InjectModel() private readonly knex:Knex) { }

    async GET() {

        const AllConsultations = await this.knex('intex_consultations')
        
        return {
            message:"OK",
            data: { consultations: AllConsultations },
        };
    }

    async DELETE(id:string) {

        const DeleteConsultation = await this.knex('intex_consultations').where('consultation_id', id)

        return {
            message:'DELETE',
            DeleteConsultation
        }
    }
}
