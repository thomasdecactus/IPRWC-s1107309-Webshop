import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class configService{

    public defaulApiLocation = "http://localhost:8080/api/";
    public productApiLocation = this.defaulApiLocation + "product";
    public loginApiLocation = this.defaulApiLocation + "user/" + "login/";

    constructor(){

    }


}