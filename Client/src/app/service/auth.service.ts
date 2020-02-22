import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { configService } from './config.service';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService{

    loginApiLocation: string;
    loginStatusChanged = new Subject<boolean>();
    isLoggedIn: boolean = false;
    isLoggedAsAdmin: boolean = false;

    constructor(private http: HttpClient, private config: configService){
        this.loginApiLocation = config.loginApiLocation;
    }

    userLogin(email: string, password: string){

        const body  = new HttpParams().set('email', email).set('wachtwoord', password)
    
        return this.http.post(
            this.loginApiLocation, 
            body.toString(),
            {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
        );
    }

    getLogginStatus(){
        return this.isLoggedIn;
    }

    setUserLoggedIn(){
        this.isLoggedIn = true;
        this.loginStatusChanged.next(this.isLoggedIn);
    }

    setUserNotLoggedIn(){
        this.isLoggedIn = false;
        this.loginStatusChanged.next(this.isLoggedIn);
    }

    getIsAdmin(){
        return this.isLoggedAsAdmin;
    }

    setIsAdmin(){
        this.isLoggedAsAdmin = true;
    }

    setIsNotAdmin(){
        this.isLoggedAsAdmin = false;
    }


}