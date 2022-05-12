import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {config} from './orm.config';
import { ProductOrderModule } from './product-order/product-order.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), ProductOrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
