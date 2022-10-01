import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
 
@Injectable()
export class ProductService {
    constructor(@InjectModel() private readonly knex:Knex) { }

    async GET() {

        const AllProducts = await this.knex('intex_products')
        
        return {
            message:"OK",
            data: { products: AllProducts },
        };
    }

    async POST(nameRu,nameUz, oldPrice, newPrice, count, frameRu,frameUz, size, depth, status, image,  categoryId ) {

        const AddProduct = await this.knex('intex_products').insert({
            product_name_ru:nameRu,
            product_name_uz:nameUz,
            product_price_old:oldPrice,
            product_price_new:newPrice,
            product_count:count,
            product_frame_ru:frameRu,
            product_frame_uz:frameUz,
            product_size:size,
            product_depth:depth,
            product_status:status,
            product_image:image,
            category_id:categoryId
        });
        
        return {
            message:'POST',
            AddProduct
        }
    }

    async PUT(nameRu,nameUz, oldPrice, newPrice, count, frameRu,frameUz, size, depth, status, image, categoryId, productId:number) {

        const UpdateProduct = await this.knex('intex_products').where('product_id', productId).update({
            product_name_ru:nameRu,
            product_name_uz:nameUz,
            product_price_old:oldPrice,
            product_price_new:newPrice,
            product_count:count,
            product_frame_ru:frameRu,
            product_frame_uz:frameUz,
            product_size:size,
            product_depth:depth,
            product_status:status,
            product_image:image,
            category_id:categoryId
        })    

        return {
            message:'UPDATE',
            UpdateProduct
        }
    }

    async DELETE(id:number) {

        const DeleteCategory = await this.knex('intex_products').where('product_id', id).del()

        return {
            message:'DELETE',
            DeleteCategory
        }
    }
}
