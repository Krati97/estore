import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductOrder } from "../product-order.entity";
// import {Customer} from "./customer.entity"

@Entity({name: 'orders'})
export class Order{
    
        @PrimaryGeneratedColumn('uuid')
        id: string;

        @OneToMany(type => ProductOrder, productorder => productorder.id)
        products: ProductOrder[];

        @Column()
        amount: number;

        @Column({ default: false })
        payed: boolean;

}