import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/Services/http.service";

@Component({
  selector: "app-raining-info",
  templateUrl: "./raining-info.component.html",
  styleUrls: ["./raining-info.component.scss"],
})
export class RainingInfoComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  rainingCustomers: any[];

  loading = true;

  ngOnInit() {
    this.httpService
      .getRequest("http://localhost:3000/customers/raining")
      .subscribe((data) => {
        this.rainingCustomers = data;
        this.loading = false;
      });
  }
}
