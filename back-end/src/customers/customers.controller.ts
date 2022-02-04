import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post()
  addCustomer(
    @Body('company') company: string,
    @Body('contact') contact: string,
    @Body('telephone') telephone: string,
    @Body('city') city: string,
    @Body('province') province: string,
    @Body('country') country: string,
    @Body('address') address: string,
    @Body('postal') postal: string,
    @Body('employees') employees: number,
  ) {
    return this.customersService.insertCustomer(
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
  }

  @Put(':id')
  updateCustomer(
    @Param('id') id: string,
    @Body('company') company: string,
    @Body('contact') contact: string,
    @Body('telephone') telephone: string,
    @Body('city') city: string,
    @Body('province') province: string,
    @Body('country') country: string,
    @Body('address') address: string,
    @Body('postal') postal: string,
    @Body('employees') employees: number,
  ) {
    return this.customersService.updateCustomer(
      parseInt(id),
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
  }

  @Get()
  getCustomers() {
    return this.customersService.getCustomers();
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customersService.deleteCustomer(parseInt(id));
  }
}
