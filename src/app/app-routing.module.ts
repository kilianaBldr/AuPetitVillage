import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { ProposComponent } from './propos/propos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"produit/:id" , component: ProduitComponent},
  {path:"propos", component: ProposComponent},
  {path:"**", redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
