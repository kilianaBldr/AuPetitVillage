import { Pipe, PipeTransform } from '@angular/core';
import { produit, ProduitsService } from './produits.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Produits: produit[], FilterPipe: string): produit[] {
    if (!Produits) return[];
    if (!FilterPipe) return Produits;

    FilterPipe = FilterPipe.toLowerCase();
    
    return Produits.filter((Produits) => {
      return Produits.name.toLowerCase().includes(FilterPipe.toLowerCase());
    })
    ;
  }

}
