import { Injectable } from '@nestjs/common';
import { customersData } from './customersData';
import { Customer } from './customer.model';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
@Injectable()
export class CustomersService {
  constructor(private http: HttpService) {}

  customers: Customer[] = customersData;

  getCustomers() {
    return [...this.customers];
  }
  deleteCustomer(id: number) {
    this.customers = this.customers.filter((customer, i) => i !== id);
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
  async getRaining() {
    const rainycompanies = [];
    for (const customer of this.customers) {
      const weather = await lastValueFrom(
        this.http
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${customer.city},${customer.province},${customer.country}&appid=${process.env.apikeyweather}`,
          )
          .pipe(map((res) => res.data)),
      );
      const rainydays = [];
      for (const datapoint of weather.list) {
        const day = new Date(datapoint.dt_txt).toDateString();
        if (datapoint.weather[0].main === 'Rain' && !rainydays.includes(day)) {
          rainydays.push(day);
        }
      }

      if (rainydays.length > 0) {
        rainycompanies.push({
          company: customer.company,
          contact: customer.contact,
          telephone: customer.telephone,
          rainydays: rainydays,
        });
      }
    }
    return rainycompanies;
  }
  async getTopFour() {
    const mostEmployeesRain = [];
    const topFourcompanies = this.customers
      .sort((a, b) => b.employees - a.employees)
      .slice(0, 4);

    for (const customer of topFourcompanies) {
      const weather = await lastValueFrom(
        this.http
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${customer.city},${customer.province},${customer.country}&appid=${process.env.apikeyweather}`,
          )
          .pipe(map((res) => res.data)),
      );

      let hasRainyDays = false;
      for (const datapoint of weather.list) {
        if (datapoint.weather[0].main === 'Rain') {
          hasRainyDays = true;
          break;
        }
      }

      mostEmployeesRain.push({
        company: customer.company,
        employees: customer.employees,
        hasRainyDays: hasRainyDays,
      });
    }
    return mostEmployeesRain;
  }
}
