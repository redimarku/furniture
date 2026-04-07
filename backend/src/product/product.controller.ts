import {
    Body, Controller, Get, Param, Post,
    Res, UploadedFile, UseInterceptors,
    HttpException, HttpStatus,
    Put
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from './Entity/product.entity';
import { ProductDto } from './DTO/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join, basename } from 'path';
import { v4 as uuid } from 'uuid';
import type { Response } from 'express';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get('all')
    public async findAll(): Promise<ProductEntity[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    public async getOne(@Param('id') id: number): Promise<ProductEntity> {
        return this.productService.getOne(id);
    }

    @Post('create')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            // filename: (req, file, cb) => {
            //     cb(null, `${uuid()}${extname(file.originalname)}`);
            // },
            filename: (req, file, cb) => {
            cb(null, file.originalname);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/^image\/(jpg|jpeg|png|webp)$/)) {
                return cb(
                    new HttpException('Only image files are allowed', HttpStatus.BAD_REQUEST),
                    false,
                );
            }
            cb(null, true);
        },
        limits: { fileSize: 5 * 1024 * 1024 },
    }))
    public async create(
        @Body() productDto: ProductDto,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<ProductEntity> {
        if (!file) {
            throw new HttpException('Image is required', HttpStatus.BAD_REQUEST);
        }
        return this.productService.createProduct(productDto, file.filename);
    }

    @Put(':id')
    public async updateProduct(@Param('id') id: number, @Body() product: ProductDto) {
        return await this.productService.update(id, product);
    }

    @Get('uploads/:filename')
    public getImage(@Param('filename') filename: string, @Res() res: Response) {
        const safe = basename(filename);
        res.sendFile(join(process.cwd(), 'uploads', safe));
    }
}