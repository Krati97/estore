// import { Controller, Post, Get, Request } from "@nestjs/common";
// import { Order } from "../entities/order.entity";
// import { OrderService } from "../services/order.service";


// @Controller('api/v1/order')
// export class OrderController {
//     //Placeorder, get Order

//     constructor(
//         private orderService: OrderService
//     ) {}

//     @Post()
//     async placeOrder(@Request() req) : Promise<Order> {
//         return this.orderService.placeOrder(req.user.id)
//     }
//     @Get()
//     async getOrders(@Request() req): Promise<Order[]> {
//         return await this.orderService.getOrders(req.user.id)
//     }

// }