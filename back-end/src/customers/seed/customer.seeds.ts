import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { customersData } from './customersDataSeeds';
import { CustomersService } from '../customers.service';

@Injectable()
export class CustomerSeed {
  constructor(private readonly customerService: CustomersService) {}

  allSeedData = customersData;

  @Command({
    command: 'create:customers',
    describe: 'seeds all customers',
  })
  async create() {
    await this.customerService.seedData(this.allSeedData);
    console.log('Seeding Complete');
  }
}
