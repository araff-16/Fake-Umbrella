import { Injectable } from '@nestjs/common';
import { customersData } from './customersData';
import { Customer } from './customer.model';

@Injectable()
export class CustomersService {
  constructor() {}

  customers: Customer[] = customersData;

  getCustomers() {
    return [...this.customers];
  }
}
