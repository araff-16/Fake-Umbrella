import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/Services/http.service";

@Component({
  selector: "app-top-four",
  templateUrl: "./top-four.component.html",
  styleUrls: ["./top-four.component.scss"],
})
export class TopFourComponent implements OnInit {
  customers: any[];
  mbarChartLabels: string[];
  barChartData: any[];
  barChartType: string = "bar";
  barChartLegend: boolean = false;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Employees",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Company",
          },
        },
      ],
    },
  };

  loading = true;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    let labels = [];
    let numemply = [];
    let colors = [];
    this.httpService
      .getRequest("http://localhost:3000/customers/topfour")
      .subscribe((data) => {
        this.customers = data;

        for (let customer of this.customers) {
          labels.push(customer.company);
          numemply.push(customer.employees);
          if (customer.hasRainyDays) {
            colors.push("green");
          } else {
            colors.push("red");
          }
        }
        this.mbarChartLabels = labels;
        this.barChartData = [
          {
            data: numemply,
            backgroundColor: colors,
          },
        ];
        this.loading = false;
      });
  }
}
