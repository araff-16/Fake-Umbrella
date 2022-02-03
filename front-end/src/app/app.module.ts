import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { NavComponent } from './Components/nav/nav.component';
import { TopFourComponent } from './Components/top-four/top-four.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    NavComponent,
    TopFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
