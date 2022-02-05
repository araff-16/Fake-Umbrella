import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { HttpService } from 'src/app/Services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-customer',
  templateUrl: './input-customer.component.html',
  styleUrls: ['./input-customer.component.scss']
})
export class InputCustomerComponent implements OnInit {

  customerModel = new Customer
  id: string

  constructor(private httpService: HttpService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.id = this.router.getCurrentNavigation().extras.state.customer._id
      this.customerModel = { ...this.router.getCurrentNavigation().extras.state.customer }
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.id !== undefined) {
      this.httpService.putRequest(`http://localhost:3000/customers/${this.id}`, this.customerModel)
        .subscribe(() => {
          this.router.navigateByUrl('/customers')
        })
    }
    else {
      this.httpService.postRequest('http://localhost:3000/customers', this.customerModel)
        .subscribe(() => {
          this.router.navigateByUrl('/customers')
        })
    }
  }

}
