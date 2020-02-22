import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { productService } from 'src/app/service/producten.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})
export class ProductenComponent implements OnInit{

  private productUpdated: Subscription;
  private products: Product[];

  constructor(private productenService: productService) { 
    
  }

  ngOnInit() {
    this.products = this.productenService.getProducts();

    if(!this.products){
      this.productUpdated = this.productenService.productsUpdated.subscribe(
        (res: Product[]) => {
          this.products = res;
        }
      )
    }
  }

  

}
