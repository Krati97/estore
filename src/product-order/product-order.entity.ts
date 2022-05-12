import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Order} from "./entities/order.entity"
// import {Product} from "./entities/product.entity"


@Entity({name: 'productorder'})
export class ProductOrder{
    
        @PrimaryGeneratedColumn('uuid')
        id: string;

        @Column()
        productId: string

        @Column()
        quantity: number

        @Column()
        price: number

        @Column()
        total: number

        @Column()
        userId: number

        @ManyToOne(type => Order, order => order.id)
        products: Order

}