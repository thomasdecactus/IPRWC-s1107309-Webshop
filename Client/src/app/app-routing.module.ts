import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BeheerderComponent } from './view/main-content/beheerder/beheerder.component';
import { BestelComponent } from './view/main-content/bestel/bestel.component';
import { ErrorComponent } from './view/main-content/error/error.component';
import { OverzichtComponent } from './view/main-content/overzicht/overzicht.component';
import { LoginComponent } from './view/main-content/login/login.component';
import { ProductComponent } from './view/main-content/product/product.component';
import { ProductenComponent } from './view/main-content/producten/producten.component';
import { SuccesComponent } from './view/main-content/succes/succes.component';
import { WinkelmandComponent } from './view/main-content/winkelmand/winkelmand.component';
import { WelkomComponent } from './view/main-content/welkom/welkom.component';

const appRoutes: Routes = [
    {path: 'beheerder', component: BeheerderComponent },
    {path: 'bestel', component: BestelComponent },
    {path: 'error', component: ErrorComponent },
    {path: 'overzicht', component: OverzichtComponent },
    {path: 'login', component: LoginComponent },
    {path: 'product/:productid', component: ProductComponent },
    {path: 'producten', component: ProductenComponent },
    {path: '', component: ProductenComponent },
    {path: 'succes', component: SuccesComponent },
    {path: 'winkelmand', component: WinkelmandComponent },
    {path: 'welkom', component: WelkomComponent },
    {path: 'error', component: ErrorComponent },
    {path: '**', redirectTo: "/error" }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
  
}
  