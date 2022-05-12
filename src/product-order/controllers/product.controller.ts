// import { Controller, Get, Param } from "@nestjs/common";
// import { Product } from "../entities/product.entity";
// import { ProductService } from "../services/product.service";


// @Controller('api/v1/products')
// export class ProductController {
//     constructor (
//         private productService: ProductService
//     ){}

//     @Get(':id')
//     async GetOne(@Param() id: string): Promise<Product> {
//       return await this.productService.getOne(id);
//     }
// }