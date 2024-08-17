import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"**", redirectTo: ''},
  {path:"produit/:id" , component: ProduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
