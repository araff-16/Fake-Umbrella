import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { NavComponent } from './Components/nav/nav.component';
import { TopFourComponent } from './Components/top-four/top-four.component';
import { RainingInfoComponent } from './Components/raining-info/raining-info.component';
import { HttpService } from './Services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    NavComponent,
    TopFourComponent,
    RainingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
