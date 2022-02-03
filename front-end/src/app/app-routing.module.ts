import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './Components/customers/customers.component';
import { RainingInfoComponent } from './Components/raining-info/raining-info.component';
import { TopFourComponent } from './Components/top-four/top-four.component';

const routes: Routes = [
  {path: "customers", component: CustomersComponent},
  {path: "raininginfo", component: RainingInfoComponent},
  {path: "topfour", component: TopFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
