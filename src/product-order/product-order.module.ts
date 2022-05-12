import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrderController } from './product-order.controller';
import { ProductOrderService } from './product-order.service';
import { ProductOrder } from './product-order.entity'
import { Product } from './entities/product.entity';
import { Customer } from './entities/customer.entity';
import { ProductService } from './services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrder, Product, Customer])],
  controllers: [ProductOrderController],
  providers: [ProductOrderService, ProductService]
})
export class ProductOrderModule {}
