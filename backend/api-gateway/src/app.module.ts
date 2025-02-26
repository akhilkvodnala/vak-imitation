import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { InventoryModule } from './inventory/inventory.module';
import { PaymentModule } from './payment/payment.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    OrderModule,
    InventoryModule,
    PaymentModule,
    NotificationModule,
  ],
})
export class AppModule {}