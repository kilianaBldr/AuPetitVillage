import { Component, OnInit } from '@angular/core';
import { produit, ProduitsService } from '../produits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  produit?: produit;

  constructor(
    private ProduitsService: ProduitsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const produitId = this.ProduitsService
    })
  }

}
