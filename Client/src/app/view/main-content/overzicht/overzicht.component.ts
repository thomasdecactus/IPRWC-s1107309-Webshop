import { Component, OnInit } from '@angular/core';
import { Bestelling } from 'src/app/model/bestelling.model';
import { httpService } from 'src/app/service/http.service';
import { localstorageService } from 'src/app/service/localstorage.service';
import { User } from 'src/app/model/user.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { productService } from 'src/app/service/producten.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.css']
})
export class OverzichtComponent implements OnInit {

  private bestellingMenuEnabled;
  private informatieMenuEnabled;
  private adminMenuEnabled = false;
  private bestellingen: Bestelling[] = [];
  private userIsLoggedIn = false;
  private userIsAdmin = false;
  private thisUser: User;
  private thisUserID: string;

  private firstname: string = 'Voornaam';
  private lastname: string = 'Achternaam';
  private email: string = 'Email';
  private streetname: string = 'Streetname';
  private housenumber: string = 'Housenumber';
  private zipcode: string = 'zipcode';
  private city: string = 'city';


  constructor(private auth: AuthService ,private http: httpService,private local: localstorageService) { 
    this.closeAll();
  }

  ngOnInit() {
    this.userIsLoggedIn = this.auth.getLogginStatus();
    this.userIsAdmin = this.auth.getIsAdmin(); 
    this.auth.loginStatusChanged.subscribe(
      (isLoggedIn: boolean) => {
        this.userIsLoggedIn = isLoggedIn;
        this.checkStatus();
      }
    );
    this.checkStatus();
  }

  checkStatus(){
    if(this.userIsLoggedIn){ 
      this.thisUser = this.local.getUser();
      this.thisUserID = this.thisUser.getKlantid();

      this.start();
    }
  }

  start(){
      this.userIsLoggedIn = true;

      this.http.getAllOrdersFromUser(this.thisUserID).subscribe(
        (res: [Bestelling]) => {
          this.bestellingen = res;
        }
      )


      this.http.getUserByID(this.thisUserID).subscribe(
        (res: User) => {
          this.thisUser = res;
          console.log(this.thisUser)

          this.firstname = Object.values(res)[3];
          this.lastname = Object.values(res)[4];
          this.email = Object.values(res)[1];
          this.streetname = Object.values(res)[5];
          this.housenumber = Object.values(res)[6];
          this.zipcode = Object.values(res)[8];
          this.city = Object.values(res)[7];
        }
      )

      if(this.thisUser.getUsertype() === "admin"){
        this.userIsAdmin = true;
      }
  }

  openBestellingen(){
    this.closeAll();
    this.bestellingMenuEnabled = true;
  }

  openInformatie(){
    this.closeAll();
    this.informatieMenuEnabled = true;
  }
  
  openAdmin(){
    this.closeAll();
    this.adminMenuEnabled = true;
  }

  closeAll(){
    this.bestellingMenuEnabled = false;
    this.informatieMenuEnabled = false;
    this.adminMenuEnabled = false;
  }

  onChangeInformation(form: NgForm){
    const information = form.value;
    var sortedInformation = [
      this.thisUserID,
      information.firstname, 
      information.lastname,
      information.email,
      information.streetname,
      information.housenumber,
      information.zipcode,
      information.city

    ];

    this.http.updateUserProfileData(sortedInformation).subscribe(
      (res) => {
        console.log(res);
        this.start();
      }
    );
  }

}
