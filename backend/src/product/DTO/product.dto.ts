import { IsBoolean, IsNumber, IsOptional, IsString, IsInt, IsUrl } from 'class-validator';

export class ProductDto {

    @IsString()
    name!: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    material?: string;

    @IsOptional()
    @IsString()
    color?: string;

    @IsOptional()
    @IsNumber()
    width?: number;

    @IsOptional()
    @IsNumber()
    height?: number;

    @IsOptional()
    @IsUrl()
    imageUrl?: string;

    @IsNumber()
    price!: number;

    @IsOptional()
    @IsNumber()
    oldPrice?: number;

    @IsOptional()
    @IsBoolean()
    bestseller?: boolean;

    @IsOptional()
    @IsInt()
    stockQuantity?: number;

    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;

    @IsOptional()
    @IsInt()
    categoryId?: number;
}