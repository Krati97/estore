import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Customer } from "../entities/customer.entity";
import { Order } from "../entities/order.entity";
import { ProductOrderService } from "../product-order.service";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,

        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
        private productOrderService: ProductOrderService
    ){}

    //Place Order created in DB
    async placeOrder(user: number): Promise<Order> {
        const orderedItems = await this.productOrderService.getOrderedItems(user)
        const itemsOrderedByUser = orderedItems.filter( item => item.userId === user)
        const amount = orderedItems.map( item => item.total).reduce((acc,next) => acc + next);
        const order = {
            products: itemsOrderedByUser,
            amount: amount
        }
        return this.orderRepository.create(order)
    }


    async getOrders(user: number): Promise<Order[]> {
        const orders = await this.orderRepository.find();
        return orders.filter(item => item.products[0].userId === user)
    }
}