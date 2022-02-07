import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersComponent } from "./Components/customers/customers.component";
import { NavComponent } from "./Components/nav/nav.component";
import { TopFourComponent } from "./Components/top-four/top-four.component";
import { RainingInfoComponent } from "./Components/raining-info/raining-info.component";
import { HttpService } from "./Services/http.service";
import { InputCustomerComponent } from "./Components/input-customer/input-customer.component";
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    NavComponent,
    TopFourComponent,
    RainingInfoComponent,
    InputCustomerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
