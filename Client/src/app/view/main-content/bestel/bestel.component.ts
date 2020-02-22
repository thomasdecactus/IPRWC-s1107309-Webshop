import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { httpService } from 'src/app/service/http.service';
import { localstorageService } from 'src/app/service/localstorage.service';
import { WinkelmandComponent } from '../winkelmand/winkelmand.component';
import { winkelmandService } from 'src/app/service/winkelmand.service';

@Component({
  selector: 'app-bestel',
  templateUrl: './bestel.component.html',
  styleUrls: ['./bestel.component.css']
})

export class BestelComponent implements OnInit {

  private thisUser;
  private userid: string;
  private naam: string = 'Voornaam Achternaam';
  private adres: string = 'Streetname Housenumber zipcode city';
  private totaalbedrag: string = 'Totaalbedrag';
  private gegevensKloppen: boolean = false;
  private totaalprijs;
  private totaalaantal;

  constructor(private http: httpService, private local: localstorageService, private winkelmand: winkelmandService) { }

  ngOnInit() {
    this.loadUserData();
    this.gegevensKloppen = false;
  }

  loadUserData(){
    this.userid = this.local.getUser().getKlantid();
    this.totaalprijs = this.winkelmand.getTotaalprijs();
    this.totaalaantal = this.winkelmand.getTotaalAantalProducten();

      this.http.getUserByID(this.userid).subscribe(
        (res: User) => {
          this.thisUser = res;

          var firstname = Object.values(res)[3];
          var lastname = Object.values(res)[4];
          var email = Object.values(res)[1];
          var streetname = Object.values(res)[5];
          var housenumber = Object.values(res)[6];
          var zipcode = Object.values(res)[8];
          var city = Object.values(res)[7];

          this.naam = firstname + " " + lastname;
          this.adres = streetname + " " + housenumber + ", " + zipcode + ", " + city
        }
      )
  }

  gegevensKloppenZeker(){
    this.gegevensKloppen = true;
    this.winkelmand.removeAllProductsFromShoppingcard();
    this.http.addOrder(this.totaalprijs, this.totaalaantal, this.userid).subscribe(
      (res) => {
        console.log("RES");
        console.log(res);
      }, (err) => {
        console.log("ERR");
        console.log(err);
      }
    );
  }

}
