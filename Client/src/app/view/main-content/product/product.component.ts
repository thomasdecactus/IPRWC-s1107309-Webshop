import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { httpService } from 'src/app/service/http.service';
import { winkelmandService } from 'src/app/service/winkelmand.service';
import { productService } from 'src/app/service/producten.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  productid: string;
  product: Product;

  constructor(private productenService: productService, private httpService: httpService,private winkelmand: winkelmandService,private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.productid = this.route.snapshot.params['productid'];

    this.product = this.productenService.getProductByID(this.productid);

    if(!this.product){
      this.httpService.getSpecificProduct(this.productid)
        .subscribe(
          (res) => {
            this.product = res
          } 
      );
    }
  }

  addProductToShoppingcard(){
    this.winkelmand.addProduct(this.product);
  }

}
