import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './Entity/categories.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './Dto/category.dto';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>) { }

    public async findAll(): Promise<CategoryEntity[]> {
        try {
            return await this.categoryRepository.find()
        } catch (error) {
            throw new HttpException('Failed to retreive categories', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    public async findOne(id: number): Promise<CategoryEntity> {
        try {
            const category = await this.categoryRepository.findOne({ where: { id } });
            if (!category) {
                throw new HttpException("This category does not exist", HttpStatus.NOT_FOUND);
            }
            return category;
        } catch (error) {
            throw new HttpException("Failed to find this category", HttpStatus.NOT_FOUND);
        }
    }

    public async create(categoryDto: CategoryDto): Promise<CategoryEntity> {
        try {
            const category = this.categoryRepository.save(categoryDto);
            return category;
        } catch (error) {
            throw new HttpException("Failed to create this category", HttpStatus.BAD_REQUEST);
        }
    }

    public async update(id: number, categoryDto: CategoryDto): Promise<CategoryEntity> {
        try {
            const category = await this.findOne(id);

            if (!category) {
                throw new HttpException("This category does not exist", HttpStatus.NOT_FOUND);
            }
            await this.categoryRepository.update(id, categoryDto);
            return category;
        } catch (error) {
            throw new HttpException("Failed to update category", HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    public async delete(id: number): Promise<void> {
        try {
            const category = await this.findOne(id);
            if (!category) {
                throw new HttpException("this category does not exists", HttpStatus.NOT_FOUND);
            }

            await this.categoryRepository.remove(category);
        } catch (error) {
            throw new HttpException("Failed to delete category", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public async getProductsOfCategory(id: number): Promise<any> {
        try {
            const result = await this.categoryRepository.findOne({ where: { id } });
            console.log("result----", result);
            if (!result) {
                throw new HttpException("Category with this id was not found", 404)
            }
            return await this.categoryRepository.find({ relations: ['products'] })
        } catch (error) {
            console.log("error----", error);
            throw new HttpException("Category with this id was not found", 404);
        }
    }
}