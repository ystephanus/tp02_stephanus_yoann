import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { FormsModule } from '@angular/forms';
import { AdresseComponent } from './adresse/adresse.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulationComponent } from './recapitulation/recapitulation.component';
import { ErrorsDirective } from './errors.directive';
import { PhoneNumberPipe } from './phone-number.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaisieClientComponent,
    AdresseComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireComponent,
    RecapitulationComponent,
    ErrorsDirective,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
