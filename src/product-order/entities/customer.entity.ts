import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn , OneToOne, Unique} from "typeorm";
// import { ProductOrder } from "../product-order.entity";
// import { Order } from "./order.entity";

@Entity()
export class Customer{
    
        @PrimaryGeneratedColumn()
        custid: string;
      
        @Column()
        username: string;

        @Column()
        address: string;

        @Column()
        number: string;

        // @OneToMany(type => ProductOrder, productOrder => productOrder.id, {cascade: true})
        // @JoinColumn()
        // productOrder: ProductOrder[]
     
        // @OneToOne(type => Order, order => order.id)
        // @JoinColumn()
        // order : Order;

}