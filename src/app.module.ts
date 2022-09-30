import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { CategoryModule } from './modules/category/category.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ConsultationsModule } from './modules/consultations/consultations.module';
import { CiteModule } from './modules/cite/cite.module';
import { LoginModule } from './modules/LoginAdmin/login.module';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [

    KnexModule.forRoot({
      config:{
        client:'pg',
        version:'12',
        useNullAsDefault:true,
        connection: {
          host:'127.0.0.1',
          user:'postgres',
          password:'odil',
          database:'support',
        },
      },
    }),

    ProductModule,
    CategoryModule,
    OrdersModule,
    ConsultationsModule,
    CiteModule,
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
