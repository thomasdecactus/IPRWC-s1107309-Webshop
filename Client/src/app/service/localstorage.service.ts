import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({providedIn: 'root'})
export class localstorageService {
   
    constructor(){
    }

    setUser(user) {
        user = JSON.stringify(user)
        return localStorage.setItem("user", user);
    }

    getUser() {
        var userinterface: UserInterface = JSON.parse(localStorage.getItem("user"));
        var usermodel = new User(userinterface.token, userinterface.klantid, userinterface.email, userinterface.wachtwoord, userinterface.voornaam, userinterface.achternaam, userinterface.straat, userinterface.huisnummer, userinterface.stad, userinterface.postcode,userinterface.userType);
        return usermodel;
    }

    setLocal(key, value) {
        return localStorage.setItem(key, value);
    }

    getLocal(key) {
        return localStorage.getItem(key);
    }

    setObjectLocal(key, value) {
        value = JSON.stringify(value)
        return localStorage.setItem(key, value);
    }

    getObjectLocal(key) {
        var object = JSON.parse(localStorage.getItem(key));
        return object;
    }

    resetLocal() {
        return localStorage.clear();
    }

    tryRemoveLocal(key) {
        if(key){
            return localStorage.removeItem(key);
        }
        else{
            console.log('noting with keyname: ' + key + "found.")
        }
    }

    removeLocal(key) {
        return localStorage.removeItem(key);
    }

}