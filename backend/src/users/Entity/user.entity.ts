import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../common/enums/role.enum";


@Entity('users')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type: 'enum', enum: Role, default: Role.USER})
    role: Role;

}