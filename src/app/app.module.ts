import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { OrdreTriPipe } from './ordre-tri.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProduitComponent,
    FooterComponent,
    FilterPipe,
    OrdreTriPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
