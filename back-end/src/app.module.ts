import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
//for using env
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    MongooseModule.forRoot(process.env.mongo),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
