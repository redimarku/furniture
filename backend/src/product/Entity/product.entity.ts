import { CategoryEntity } from "src/categories/Entity/categories.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({ name: "product" })
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ nullable: true })
    material?: string;

    @Column({ nullable: true })
    color?: string;

    @Column("float", { nullable: true })
    width?: number;

    @Column("float", { nullable: true })
    height?: number;

    @Column({ nullable: true })
    imageUrl?: string;

    @Column("float")
    price!: number;

    @Column("float", { nullable: true })
    oldPrice?: number;

    @Column({ default: false })
    bestseller!: boolean;

    @Column({ default: 0 })
    stockQuantity!: number;

    @Column({ default: true })
    isAvailable!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => CategoryEntity, category => category.products)
    category!: CategoryEntity;
}