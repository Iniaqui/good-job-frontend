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
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserServices } from './services/UserServices';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatSelectModule } from '@angular/material/select';
import { TypeCompanyServices } from './services/TypeCompanyServices';
import { BordComponent } from './bord/bord.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormulaireOfferComponent } from './formulaire-offer/formulaire-offer.component';
import { MetierServices } from './services/MetierServices';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { CompanyServices } from './services/CompayServices';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiTokenInterceptor } from './services/ApiTokenInterceptor';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { BoxComponent } from './box/box.component';
import { OffersJobsComponent } from './offers-jobs/offers-jobs.component';
import { BoxOfferComponent } from './offers-jobs/box-offer/box-offer.component';
import { DetailsBoxOfferComponent } from './offers-jobs/details-box-offer/details-box-offer.component';
import { OfferServices } from './services/OfferServices';

const appRoutes: Routes = [
  { path: 'acceuil', component: DecouvrirComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'bord', component: BordComponent },
  { path: 'form_create', component: FormulaireOfferComponent },
  {
    path: 'offers',
    component: OffersJobsComponent,
    children: [
      {
        path: 'details',
        component: DetailsBoxOfferComponent,
      },
    ],
  },
  { path: '**', component: DecouvrirComponent },
];
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
    FileUploadComponent,
    BoxComponent,
    OffersJobsComponent,
    BoxOfferComponent,
    DetailsBoxOfferComponent,
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
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    WavesModule.forRoot(),
  ],
  providers: [
    UserServices,
    MetierServices,
    TypeCompanyServices,
    CompanyServices,
    OfferServices,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
