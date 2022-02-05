import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Customer } from 'src/app/Models/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.getRequest('http://localhost:3000/customers')
    .subscribe((data) => {
      this.customers = data
    })
  }

  deleteCustomer (id:string) {
    this.httpService.deleteRequest(`http://localhost:3000/customers/${id}`).subscribe(() => {
      this.customers = this.customers.filter((customer) => customer._id !== id)
    })
  }

  updateCustomer (customer){
    this.router.navigateByUrl('/customerform', { state: { customer } });
  }

}
