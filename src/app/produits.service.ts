import { Injectable } from '@angular/core';

export interface produit {
  id: number;
  name: string;
  image: string;
  description: string;
  details: string;
  prix: number
}

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {

  produits: produit[]= [
    { id: 1,
      name: "Obélix",
      image: "/assets/images/figurine Obelix.jpg",
      description: "Astérix de nature espiègle, il aime beaucoup taquiner ses ennemis.",
      details: "figurine faites main en bois et painte à la main",
      prix: 15.8,
    },
    { id: 2,
      name: "Idéfix",
      image:  "/assets/images/figurine Idéfix.jpg",
      description: "Idéfix est un très petit chiens Gaulois, Fidèle compagnon d'Obélix.",
      details: "figurine faites main en bois et painte à la main",
      prix: 9.99,
    },
    { id: 3, 
      name: "Bonemine",
      image:  "/assets/images/figurine-bonemine.jpg",
      description: "Femme du Chef du Village, Pratique avec brio le rouleau à pâtisserie.",
      details: "figurine faites main en bois et painte à la main",
      prix: 16.99,
    },
    { id: 4,
      name: "Panoramix",
      image:  "/assets/images/Figurine-Panoramix.jpg",
      description: "Druide, inventeur de potions en tous genres et détenteur de la sagesse Gauloise.",
      details: "figurine faites main en bois et painte à la main",
      prix: 18.20,
     },
    ]

  constructor() { }
  getProduits(): produit[]{
    return this.produits;
  }
  getProduit(id: number): produit | undefined {
    return this.produits.find((produits) => produits.id === id);
  }
}
