import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './view/header/header.component';
import { NavComponent } from './view/nav/nav.component';
import { MainContentComponent } from './view/main-content/main-content.component';
import { LoginComponent } from './view/main-content/login/login.component';
import { WinkelmandComponent } from './view/main-content/winkelmand/winkelmand.component';
import { ProductComponent } from './view/main-content/product/product.component';
import { BestelComponent } from './view/main-content/bestel/bestel.component';
import { BeheerderComponent } from './view/main-content/beheerder/beheerder.component';
import { OverzichtComponent } from './view/main-content/overzicht/overzicht.component';
import { SuccesComponent } from './view/main-content/succes/succes.component';
import { ProductenComponent } from './view/main-content/producten/producten.component';
import { WelkomComponent } from './view/main-content/welkom/welkom.component';
import { ErrorComponent } from './view/main-content/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorNotLogedInComponent } from './view/main-content/error/error-not-loged-in/error-not-loged-in.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeaderComponent,
    NavComponent,
    MainContentComponent,
    LoginComponent,
    WinkelmandComponent,
    ProductComponent,
    BestelComponent,
    BeheerderComponent,
    OverzichtComponent,
    SuccesComponent,
    ProductenComponent,
    WelkomComponent,
    ErrorComponent,
    ErrorNotLogedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
