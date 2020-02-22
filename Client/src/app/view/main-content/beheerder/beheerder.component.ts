import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { productService } from 'src/app/service/producten.service';
import { httpService } from 'src/app/service/http.service';
import { NgForm } from '@angular/forms';
import { Bestelling } from 'src/app/model/bestelling.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-beheerder',
  templateUrl: './beheerder.component.html',
  styleUrls: ['./beheerder.component.css']
})
export class BeheerderComponent implements OnInit {

  private naam: string = 'naam';
  private beschrijving: string = 'beschrijving';
  private afbeeldinglink: string = 'afbeeldinglink';
  private prijs: string = 'prijs';
  private voorraad: string = 'voorraad';

  private currentProductsTabActive = true;
  private addProductsTabActive = false;
  private ordersTabActive = false;
  private customersTabActive = false;

  private productUpdated: Subscription;
  private products: Product[];
  private bestellingen: Bestelling[] = [];
  private users: User[];
  
  constructor(private http: httpService ,private productenService: productService) { }

  ngOnInit() {
    this.products = this.productenService.getProducts();

    this.http.getAllOrders().subscribe(
      (res: [Bestelling]) => {
        this.bestellingen = res;
      }
    )

    this.http.getAllUsers().subscribe(
      (res: [User]) => {
        this.users = res;
      }
    )

    if(!this.products){
      console.log("YEET")
      this.productUpdated = this.productenService.productsUpdated.subscribe(
        (res: Product[]) => {
          this.products = res;
          console.log(this.products)
        }
      )
    }

    
  }

  openCurrentTab(){
    this.closeAll()
    this.currentProductsTabActive = true;

  }

  openAddProductsTab(){
    this.closeAll()
    this.addProductsTabActive = true;

  }

  openOrdersTab(){
    this.closeAll()
    this.ordersTabActive = true;
  }

  openCustomersTab(){
    this.closeAll()
    this.customersTabActive = true;
  }

  closeAll(){
    this.currentProductsTabActive = false;
    this.addProductsTabActive = false;
    this.ordersTabActive = false;
    this.customersTabActive = false;
  }

  deleteProduct(productid){
    this.http.deleteProduct(productid).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  addNewProduct(form: NgForm){
    const information = form.value;
    var sortedInformation = [
      information.naam, 
      information.beschrijving,
      information.afbeeldinglink,
      information.prijs,
      information.voorraad,
    ];

    this.http.addNewProduct(sortedInformation).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}
