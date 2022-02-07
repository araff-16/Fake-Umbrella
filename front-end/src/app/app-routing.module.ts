import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomersComponent } from "./Components/customers/customers.component";
import { HomeComponent } from "./Components/home/home.component";
import { InputCustomerComponent } from "./Components/input-customer/input-customer.component";
import { RainingInfoComponent } from "./Components/raining-info/raining-info.component";
import { TopFourComponent } from "./Components/top-four/top-four.component";

const routes: Routes = [
  { path: "customers", component: CustomersComponent },
  { path: "raininginfo", component: RainingInfoComponent },
  { path: "topfour", component: TopFourComponent },
  { path: "customerform", component: InputCustomerComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
