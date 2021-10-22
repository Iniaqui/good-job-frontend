import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';
import { DecouvrirComponent } from './decouvrir/decouvrir.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes =[
{path:"acceuil", component:DecouvrirComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    MenuComponent,
    DecouvrirComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
