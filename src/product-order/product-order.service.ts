import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOrder } from './product-order.entity'
import { Repository } from 'typeorm';
import { ProductOrderDTO } from './dto/product-order.dto';
import { Customer } from './entities/customer.entity';
import { ProductService } from './services/product.service'

@Injectable()
export class ProductOrderService {
  constructor(
    @InjectRepository(ProductOrder)
    private productOrderRepository: Repository<ProductOrder>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    private productService: ProductService    
  ) {}

  async createOrder(productId: string, quantity: number, user: number): Promise<any> {
      const productorder = await this.productOrderRepository.find({relations: ['item','user'] })
      const product = await this.productService.getOne(productId)

      //If Product exists
      if(product){
        const ordered = productorder.filter(
            (item) => item.productId === productId && item.userId === user
        );

        if(ordered.length < 1) {
            const newItem = {
                productId!: product.id,
                price: product.price,
                quantity: quantity,
                total: product.price * quantity,
                userId: user
                
            };

            return await this.productOrderRepository.save(newItem)
        } else {
            //update item quantity if already persent
            const quantity = (ordered[0].quantity += 1);
            const total = ordered[0].price * quantity;

            return await this.productOrderRepository.update(ordered[0].id, { quantity, total });
        }
      }

      return null;
  }

  async getOrderedItems(user: number): Promise<ProductOrder[]> {
    const userOrder = await this.productOrderRepository.find({ relations: ["item",'user'] });
    return (await userOrder).filter(item => item.userId === user)
}

}
