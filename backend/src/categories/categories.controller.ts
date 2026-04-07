import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './Dto/category.dto';
import { CategoryEntity } from './Entity/categories.entity';
import { ProductService } from 'src/product/product.service';

@Controller('categories')
export class CategoriesController {

    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly productService: ProductService
    ) { }

    @Get('all')
    public async findAll(): Promise<CategoryEntity[]> {
        return await this.categoriesService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id') id: number): Promise<CategoryEntity> {
        return await this.categoriesService.findOne(id);
    }

    @Get(':id/products')
    public async getOne(@Param('id') id: number): Promise<any> {
        return this.categoriesService.getProductsOfCategory(id);
    }

    @Post('create')
    public async create(@Body() categoryDto: CategoryDto): Promise<CategoryEntity> {
        return this.categoriesService.create(categoryDto);
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() categoryDto: CategoryDto): Promise<CategoryEntity> {
        return this.categoriesService.update(id, categoryDto);
    }

    @Delete(':id')
    public async delete(@Param("id") id: number): Promise<void> {
        return this.categoriesService.delete(id);
    }
}
