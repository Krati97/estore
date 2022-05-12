import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'product'})
export class Product{
    
        @PrimaryGeneratedColumn('uuid')
        id: string;
      
        @Column()
        name: string;

        @Column()
        description: string;

        @Column()
        price: number;

        @Column()
        quantity: string

}