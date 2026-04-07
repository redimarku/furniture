// product.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './Entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './DTO/product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly prodRep: Repository<ProductEntity>
    ) { }

    public async findAll(): Promise<ProductEntity[]> {
        try {
            return await this.prodRep.find();
        } catch (error) {
            throw new HttpException('Failed to find products', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public async getOne(id: number): Promise<ProductEntity> {
        const product = await this.prodRep.findOne({ where: { id } });
        if (!product) {
            throw new HttpException('No product found', HttpStatus.NOT_FOUND);
        }
        return product;
    }

    public async createProduct(productDto: ProductDto, image: string): Promise<ProductEntity> {
        try {
            return await this.prodRep.save({
                 ...productDto, 
                 imageUrl: image,
                 category: { id: productDto.categoryId }
                });
        } catch (error) {
            console.log(error);
            throw new HttpException('Failed to create this product', HttpStatus.BAD_REQUEST);
        }
    }

    public async update(id: number, product: ProductDto): Promise<ProductEntity> {
        try {
            const result = await this.prodRep.findOne({ where: { id } });
            if (!result) {
                throw new HttpException("Product with this id was not found", 404)
            }
            await this.prodRep.update(id, product );
            return result;
        } catch (error) {
            throw new HttpException("Product with this id was not found", 404);
        }
    }
}