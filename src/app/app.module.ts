import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';
import { DecouvrirComponent } from './decouvrir/decouvrir.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClient, HttpClientModule} from  "@angular/common/http";
import { UserServices } from './services/UserServices';
import { InscriptionComponent } from './inscription/inscription.component';
import {MatSelectModule} from '@angular/material/select';
import { TypeCompanyServices } from './services/TypeCompanyServices';
import { BordComponent } from './bord/bord.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FormulaireOfferComponent } from './formulaire-offer/formulaire-offer.component';
import { MetierServices } from './services/metierServices';
import {MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';


const appRoutes: Routes =[
{path:"acceuil", component:DecouvrirComponent},
{path:"connexion", component:ConnexionComponent},
{path:"inscription", component:InscriptionComponent},
{path:"bord", component:BordComponent},
{path:"form_create" , component:FormulaireOfferComponent},
{path:"**", component:DecouvrirComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    MenuComponent,
    DecouvrirComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    BordComponent,
    FormulaireOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule.forRoot()
    ],
  providers: [
    UserServices,
    MetierServices,
    TypeCompanyServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
