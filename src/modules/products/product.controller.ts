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
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import * as fs from 'fs';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../LoginAdmin/jwt.guard';
import * as path from 'path';
import { CreateProductDto } from './dto/create-product.dto'; 

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
    @UploadedFile('file') file: Express.Multer.File,
    @Body('categoryId') categoryId: string,
  ) {
    const image_path = '/images/' + file.originalname;
    fs.writeFileSync(
      path.join(__dirname, '..', '..', '..', 'public', image_path),
      file.buffer,
    );
  
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
      image_path,
      categoryId,
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
    @Body('image') image:string,
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
      image,
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