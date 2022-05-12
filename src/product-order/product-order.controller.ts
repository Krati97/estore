import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import {ProductOrderDTO} from './dto/product-order.dto';
import { ProductOrder } from './product-order.entity';
import { ProductOrderService } from './product-order.service';

@Controller('product-order')
export class ProductOrderController {
 constructor(private readonly productOrderService: ProductOrderService) {}

 @Post()
 async createOrder(@Body() body, @Request() req): Promise<void>  {
  const { productId, quantity } = body
   return this.productOrderService.createOrder(productId, quantity, req.user.id);
 }

 @Get()
 async getOrderedItems(@Request() req): Promise<ProductOrder[]> {
   return await this.productOrderService.getOrderedItems(req.user.id);
 }

}
