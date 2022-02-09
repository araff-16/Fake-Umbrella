import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/Models/Customer";
import { HttpService } from "src/app/Services/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-input-customer",
  templateUrl: "./input-customer.component.html",
  styleUrls: ["./input-customer.component.scss"],
})
export class InputCustomerComponent implements OnInit {
  customerModel = new Customer();
  id: string;
  error = false;

  constructor(private httpService: HttpService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.id = this.router.getCurrentNavigation().extras.state.customer._id;
      this.customerModel = {
        ...this.router.getCurrentNavigation().extras.state.customer,
      };
    }
  }

  ngOnInit() {}

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.id !== undefined) {
      this.httpService
        .putRequest(
          `http://localhost:3000/customers/${this.id}`,
          this.customerModel
        )
        .subscribe((good) => {
          console.log(good);
          if (good) {
            this.router.navigateByUrl("/customers");
          } else {
            this.error = true;
          }
        });
    } else {
      this.httpService
        .postRequest("http://localhost:3000/customers", this.customerModel)
        .subscribe((good) => {
          console.log(good);
          if (good) {
            this.router.navigateByUrl("/customers");
          } else {
            this.error = true;
          }
        });
    }
  }
}
