import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { localstorageService } from './localstorage.service';
import { productService } from './producten.service';

@Injectable({providedIn: 'root'})
export class winkelmandService {

    private products: Product[]
    private totaalAantalProducten: number = 0;
    private totaalprijs: number = 0;
   
    constructor(private localstorage: localstorageService){
        this.products = [];
    }

    getTotaalAantalProducten(){
        return this.totaalAantalProducten;
    }

    getTotaalprijs(){
        return this.totaalprijs;
    }

    addProduct(newProduct: Product){
        for(var i = 0; i < this.products.length; i++){
            if(newProduct.productid === this.products[i].productid){
                this.voegEenToeVanTotoaalAantal();
                this.voegToeAanTotaalPrijs(this.products[i].prijs);
                this.products[i].aantalInWinkelmand++;
                this.products[i].totaalprijs = this.products[i].prijs * this.products[i].aantalInWinkelmand
                this.products[i].inwinkelmand = true;
                newProduct.inwinkelmand = true;
                this.localstorage.tryRemoveLocal("shoppingcard");
                this.localstorage.setObjectLocal("shoppingcard", this.products);
            }
        }

        if(!newProduct.inwinkelmand){
            this.voegEenToeVanTotoaalAantal();
            this.voegToeAanTotaalPrijs(newProduct.prijs);
            newProduct.aantalInWinkelmand = 1;
            newProduct.totaalprijs = newProduct.prijs;
            this.products.push(newProduct);
            this.localstorage.tryRemoveLocal("shoppingcard");
            this.localstorage.setObjectLocal("shoppingcard", this.products);
        }
    }

    getCurrectSelectedProducts(){
        if(this.products.length <= 0){
            return this.localstorage.getObjectLocal("shoppingcard");
        }
        else{
            return this.products.slice() 
        }
    }

    removeAllProductsFromShoppingcard(){
        this.products = [];
        this.localstorage.tryRemoveLocal("shoppingcard");
        this.totaalAantalProducten = 0;
        this.totaalprijs = 0;
    }

    removeOneProduct(productid: string){
        for(var i = 0; i < this.products.length; i++){
            if(productid === this.products[i].productid){

                this.haalEenAfVanTotoaalAantal();
                this.haalAfVanTotaalPrijs(this.products[i].prijs);

                if(this.products[i].aantalInWinkelmand > 1){
                    this.products[i].aantalInWinkelmand--;
                    this.products[i].totaalprijs = this.products[i].totaalprijs - this.products[i].prijs;
                }  
                else{
                    this.removeProduct(productid);
                } 
            }
        }
    }

    removeProduct(productid: string){
        for(var i = 0; i < this.products.length; i++) {
            if(this.products[i].productid === productid) {
                this.products.splice(i, 1);
                this.localstorage.tryRemoveLocal("shoppingcard");
                this.localstorage.setObjectLocal("shoppingcard", this.products);
            }
        }  
    }

    haalEenAfVanTotoaalAantal(){
        this.totaalAantalProducten = this.totaalAantalProducten - 1;
    }

    voegEenToeVanTotoaalAantal(){
        this.totaalAantalProducten = this.totaalAantalProducten + 1;
    }

    haalAfVanTotaalPrijs(getal){
        this.totaalprijs = this.totaalprijs - getal;
    }

    voegToeAanTotaalPrijs(getal){
        this.totaalprijs = this.totaalprijs + getal;
    }


    

}