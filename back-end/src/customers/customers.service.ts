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
  insertCustomer(
    company: string,
    contact: string,
    telephone: string,
    city: string,
    province: string,
    country: string,
    address: string,
    postal: string,
    employees: number,
  ) {
    const newCustomer = new Customer(
      company,
      contact,
      telephone,
      city,
      province,
      country,
      address,
      postal,
      employees,
    );
    this.customers.push(newCustomer);
    return newCustomer;
  }
  updateCustomer(
    id: number,
    company: string,
    contact: string,
    telephone: string,
    city: string,
    province: string,
    country: string,
    address: string,
    postal: string,
    employees: number,
  ) {
    const updateCustomer = new Customer(
      company,
      contact,
      telephone,
      city,
      province,
      country,
      address,
      postal,
      employees,
    );
    this.customers[id] = updateCustomer;
    return updateCustomer;
  }
}
