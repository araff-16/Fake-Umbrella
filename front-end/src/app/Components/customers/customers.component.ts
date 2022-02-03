import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Customer } from 'src/app/Models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getRequest('http://localhost:3000/customers')
    .subscribe((data) => {
      this.customers = data
      console.log(this.customers)
    })
  }

}
