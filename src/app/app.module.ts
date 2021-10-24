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




const appRoutes: Routes =[
{path:"acceuil", component:DecouvrirComponent},
{path:"connexion", component:ConnexionComponent},
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
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
