import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Bestelling } from '../model/bestelling.model';
import { User } from '../model/user.model';

@Injectable({providedIn: 'root'})
export class httpService {

    private apiLocation = "http://localhost:8080/api";
   
    constructor(private http: HttpClient){
    }

    getAllProductData(){     
        return this.http.get<Product[]>(this.apiLocation + "/"+ "product");
    }

    getSpecificProduct(productid: string){     
        return this.http.get<Product>(this.apiLocation + "/"+ "product" + "/"+ "id" + "/" + productid);
    }

    getUserByID(user_id: string){
        return this.http.get<User>(this.apiLocation + "/" + "user" + "/" + "id" + "/" + user_id);
    }

    getAllUsers(){
      return this.http.get<User[]>(this.apiLocation + "/" + "user");
    }

    updateUserProfileData(updatedInformation: string[]){
        console.log(updatedInformation);
        const apiPoint = this.apiLocation  + "/" + "user" + "/" + 'update';
    
        const body  = new HttpParams()
          .set('klantid', updatedInformation[0])
          .set('voornaam', updatedInformation[1])
          .set('achternaam', updatedInformation[2])
          .set('email', updatedInformation[3])
          .set('straat', updatedInformation[4])
          .set('postcode', updatedInformation[5])
          .set('stad', updatedInformation[6])
        
        return this.http.post(apiPoint, body.toString(),
          {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          }
        );
    }

    deleteProduct(productid){
      const apiPoint = this.apiLocation  + "/" + "product" + "/" + 'delete';
  
      const body  = new HttpParams()
        .set('productid', productid)
      
        return this.http.post(apiPoint, body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }
      );
    }

    addNewProduct(updatedInformation: string[]){
      console.log(updatedInformation);
      const apiPoint = this.apiLocation  + "/" + "product" + "/" + 'add';
  
      const body  = new HttpParams()
        .set('naam', updatedInformation[0])
        .set('beschrijving', updatedInformation[1])
        .set('afbeeldinglink', updatedInformation[2])
        .set('prijs', updatedInformation[3])
        .set('voorraad', updatedInformation[4])
      
      return this.http.post(apiPoint, body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }
      );
  }

  getAllOrdersFromUser(user_id: string){
      return this.http.get<Bestelling[]>(this.apiLocation + "/" + "order" + "/" + "user" + "/" + user_id);
  }

  getAllOrders(){
    return this.http.get<Bestelling[]>(this.apiLocation + "/" + "order");
  }

  addOrder(totaalprijs, aantalstuks,klantid){
    const apiPoint = this.apiLocation  + "/" + "order" + "/" + 'createOrder';
    const date = new Date().getDate().toString();

    const body  = new HttpParams()
      .set('totaalprijs', totaalprijs)
      .set('aantalstuks', aantalstuks)
      .set('klantid', klantid)
      .set('datum', date)
    
    return this.http.post(apiPoint, body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

    


}