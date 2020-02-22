import { Injectable } from '@angular/core';
import { httpService } from 'src/app/service/http.service';
import { Product } from '../model/product.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class productService{

    productsUpdated = new Subject<Product[]>();
    private products: Product[]
    newProduct: Product;

    constructor(private httpService: httpService){
        this.httpService.getAllProductData().subscribe(
            (res: [Product]) => {
                this.products = res
                this.productsUpdated.next(this.products.slice());
            } 
        );
    }

    getProducts(){
        return this.products;
    }

    getProductByID(productid: string){
        this.newProduct = null;

        for(var i = 0; i < this.products.length; i++){
            if(productid === this.products[i].productid){
                this.newProduct =  this.products[i]
            }
        }

        return this.newProduct
    }

}