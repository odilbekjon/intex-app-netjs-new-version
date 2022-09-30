import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
 
@Injectable()
export class OrdersService {
    constructor(@InjectModel() private readonly knex:Knex) { }

    async GET() {

        const AllOrders = await this.knex('intex_zakas')
        
        return {
            message:"OK",
            data: { orders: AllOrders },
        };
    }

    async POST(productId, userName, userPhone, userAddress){

        const AddOrder = await this.knex('intex_zakas').insert({
            product_id:productId,
            zakas_client:userName,
            zakas_cl_phone:userPhone,
            zakas_address:userAddress
        });

        return {
            message:"POST",
            AddOrder
        }
    }
    
    async DELETE(id:number) {

        const deleteOrder = await this.knex('intex_zakas').where('zakas_id', id).del()

        return {
            message:'DELETE',
            deleteOrder
        }
    }
}
