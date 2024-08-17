import { Component, OnInit } from '@angular/core';
import { produit, ProduitsService } from '../produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produits: produit[] = [];
constructor (private ProduitsService: ProduitsService, private router: Router) {}

ngOnInit(): void {
  this.produits = this.ProduitsService.getProduits();
}
detailProduit(produitId: number) {
  this.router.navigate(['/produit', produitId])
}
}
