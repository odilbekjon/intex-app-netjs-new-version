import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
 
@Injectable()
export class CategoryService {
    constructor(@InjectModel() private readonly knex:Knex ){}

    async GET() {
        const AllCategories = await this.knex.table('intex_category')
        return {
            message:'OK',
            data: { categories: AllCategories }
        } 
    }

    async POST(nameRu, nameUz) {

        const PostCategory = await this.knex.table('intex_category').insert({
            category_name_ru:nameRu,
            category_name_uz:nameUz
        });

        return {
            message:"POST",
            data: { categories:PostCategory }
        }
    }

    async PUT(nameRu, nameUz, catId:string) {

        const UpdateCategory = await this.knex('intex_category').where('category_id', catId).update({
            category_name_ru:nameRu,
            category_name_uz:nameUz,
        });

        return {
            message:"PUT",
            UpdateCategory
        }
    }

    async DELETE(id:string){

        const DeleteCategory = await this.knex('intex_category').where('category_id', id).del()

        return {
            message:"DELETE",
            DeleteCategory
        }
    }
}