import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
//for using env
import { ConfigModule } from '@nestjs/config';
import { CustomerSeed } from './customers/seed/customer.seeds';
import { CustomersService } from './customers/customers.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    MongooseModule.forRoot(process.env.mongo),
    CommandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
