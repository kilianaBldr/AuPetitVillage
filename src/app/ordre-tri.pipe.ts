import { Pipe, PipeTransform } from '@angular/core';
import { produit } from './produits.service';

@Pipe({
  name: 'ordreTri'
})
export class OrdreTriPipe implements PipeTransform {

  transform(produits: produit[], ordreTri: string = 'Croissant'): produit[] {
    return produits.slice().sort((a, b) => ordreTri === 'Croissant' ? a.prix - b.prix : b.prix - a.prix
    );
  }
}
