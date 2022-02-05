import { Injectable } from '@nestjs/common';
import { Customer } from './customer.model';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
    private http: HttpService,
  ) {}

  async getCustomers() {
    //exec actually return a real promise
    const customers = await this.customerModel.find().exec();
    return customers;
  }
  async deleteCustomer(id: string) {
    await this.customerModel.deleteOne({ _id: id });
  }
  async insertCustomer(
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
    const newCustomer = new this.customerModel({
      company,
      contact,
      telephone,
      city,
      province,
      country,
      address,
      postal,
      employees,
    });
    const result = await newCustomer.save();
    return result;
  }
  async updateCustomer(
    id: string,
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
    const updatedCustomer = await this.customerModel.findById(id);
    updatedCustomer.company = company;
    updatedCustomer.contact = contact;
    updatedCustomer.telephone = telephone;
    updatedCustomer.city = city;
    updatedCustomer.province = province;
    updatedCustomer.country = country;
    updatedCustomer.address = address;
    updatedCustomer.postal = postal;
    updatedCustomer.employees = employees;
    updatedCustomer.save();
  }
  async getRaining() {
    const rainycompanies = [];
    const allCustomers = await this.getCustomers();
    for (const customer of allCustomers) {
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
  // async getTopFour() {
  //   const mostEmployeesRain = [];
  //   const topFourcompanies = this.customers
  //     .sort((a, b) => b.employees - a.employees)
  //     .slice(0, 4);

  //   for (const customer of topFourcompanies) {
  //     const weather = await lastValueFrom(
  //       this.http
  //         .get(
  //           `https://api.openweathermap.org/data/2.5/forecast?q=${customer.city},${customer.province},${customer.country}&appid=${process.env.apikeyweather}`,
  //         )
  //         .pipe(map((res) => res.data)),
  //     );

  //     let hasRainyDays = false;
  //     for (const datapoint of weather.list) {
  //       if (datapoint.weather[0].main === 'Rain') {
  //         hasRainyDays = true;
  //         break;
  //       }
  //     }

  //     mostEmployeesRain.push({
  //       company: customer.company,
  //       employees: customer.employees,
  //       hasRainyDays: hasRainyDays,
  //     });
  //   }
  //   return mostEmployeesRain;
  // }
}
