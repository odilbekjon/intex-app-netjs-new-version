import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Body,
  Post,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import * as fs from 'fs';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../LoginAdmin/jwt.guard';


@ApiTags('api/products')
@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // GET
  @Get()
  async AllProducts() {
    try {
      const getAll = await this.productService.GET();
      return getAll;
    } catch (error) {
      console.log(error);

      throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // POST
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async AddProduct(
    @Body('nameRu') nameRu: string,
    @Body('nameUz') nameUz: string,
    @Body('oldPrice') oldPrice: string,
    @Body('newPrice') newPrice: string,
    @Body('count') count: number,
    @Body('frameRu') frameRu: string,
    @Body('frameUz') frameUz: string,
    @Body('size') size: string,
    @Body('depth') depth: number,
    @Body('status') status: boolean,
    // @UploadedFile('file') file: Express.Multer.File,
    @Body('image') image:[],
    @Body('categoryId') categoryId: string,
  ) {
    // fs.writeFileSync(file.originalname, file.buffer);
    // const image =   '/assets' + file.originalname
    const postProduct = await this.productService.POST(
      nameRu,
      nameUz,
      oldPrice,
      newPrice,
      count,
      frameRu,
      frameUz,
      size,
      depth,
      status,
      image,
      categoryId
    );
    return postProduct;
  }

  // PUT
  @UseGuards(JwtAuthGuard)
  @Put()
  async UpdateProduct(
    @Body('nameRu') nameRu: string,
    @Body('nameUz') nameUz: string,
    @Body('oldPrice') oldPrice: string,
    @Body('newPrice') newPrice: string,
    @Body('count') count: number,
    @Body('frameRu') frameRu: string,
    @Body('frameUz') frameUz: string,
    @Body('size') size: string,
    @Body('depth') depth: number,
    @Body('status') status: boolean,
    @Body('categoryId') categoryId: string,
    @Body('productId') productId: number,
  ) {
    const updateProduct = await this.productService.PUT(
      nameRu,
      nameUz,
      oldPrice,
      newPrice,
      count,
      frameRu,
      frameUz,
      size,
      depth,
      status,
      categoryId,
      productId,
    );

    return updateProduct;
  }

  // DELETE
  @UseGuards(JwtAuthGuard)
  @Delete()
  async DeleteProduct(@Body('id') id: number) {
    const deleteProduct = await this.productService.DELETE(id);

    return deleteProduct;
  }
}
