import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../LoginAdmin/jwt.guard';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@ApiTags('api/categories')
@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // GET
  @Get()
  async GetAll() {
    try {
      const getAll = await this.categoryService.GET();
      return getAll;
    } catch (error) {
      console.log(error);

      throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // // POST
  @UseGuards(JwtAuthGuard)
  @Post()
  async AddCategory(
    @Body() CategoryDto:CategoryDto
  ) {
    const post = await this.categoryService.POST(CategoryDto.nameRu, CategoryDto.nameUz);

    return post;
  }

  // // UPDATE
  @Put()
  @UseGuards(JwtAuthGuard)
  UpdateCategory(
    @Body() CategoryDto:CategoryDto
  ) {
    const update = this.categoryService.PUT(CategoryDto.nameRu, CategoryDto.nameUz, CategoryDto.catId);

    return update;
  }

  // // DELETE
  @Delete()
  @UseGuards(JwtAuthGuard)
  DeleteCategory(@Body('id') id: string) {
    const deleteCategory = this.categoryService.DELETE(id);

    return deleteCategory;
  }
}
