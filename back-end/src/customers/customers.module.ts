import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { HttpModule } from '@nestjs/axios';
import { CustomerSchema } from './customer.model';
import { CommandModule } from 'nestjs-command';
import { CustomerSeed } from './seed/customer.seeds';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
    CommandModule,
  ],
  controllers: [CustomersController],
  providers: [CustomersService, CustomerSeed],
})
export class CustomersModule {}
