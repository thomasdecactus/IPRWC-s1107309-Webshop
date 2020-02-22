import { Component, OnInit } from '@angular/core';
import { winkelmandService } from 'src/app/service/winkelmand.service';
import { logService } from 'src/app/service/log.service';
import { Product } from 'src/app/model/product.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-winkelmand',
  templateUrl: './winkelmand.component.html',
  styleUrls: ['./winkelmand.component.css']
})
export class WinkelmandComponent implements OnInit {

  public products: Product[];
  isLoggedIn: boolean = false;

  constructor(private auth: AuthService,private router: Router, private winkelmand: winkelmandService, private logservice: logService) { }

  ngOnInit() {
    this.products = this.winkelmand.getCurrectSelectedProducts();
    this.isLoggedIn = this.auth.getLogginStatus();
    this.auth.loginStatusChanged.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }


  addOneProductToShoppingcard(productid: string){
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i].productid = productid){
        this.winkelmand.addProduct(this.products[i]);
        this.products = this.winkelmand.getCurrectSelectedProducts();
      }
    }
  }

  removeOneProductToShoppingcard(productid: string){
    this.winkelmand.removeOneProduct(productid);
    this.products = this.winkelmand.getCurrectSelectedProducts();
  }

  removeProduct(productid: string){
    this.winkelmand.removeProduct(productid);
    this.products = this.winkelmand.getCurrectSelectedProducts();
  }

  emptyShoppingcard(){
    this.winkelmand.removeAllProductsFromShoppingcard();
    this.products = [];
  }

}
