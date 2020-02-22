import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { localstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('f', {static: false})
  form: NgForm;
  loginStatus: boolean;
  userInfo: User;
  
  constructor(private auth: AuthService, private router: Router, private local: localstorageService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return
    }
    else{
      console.log(form.value);  
      const email = form.value.email
      const password = form.value.password
      this.login(email, password);
      form.reset();
    }
  }

  login(email: string, password: string){
    this.auth.userLogin(email, password).subscribe(
      (res: User) => {
        console.log("RESPONSE");

        this.userInfo = new User(
          Object.values(res)[10],
          Object.values(res)[0],
          Object.values(res)[9],
          Object.values(res)[3],
          Object.values(res)[7],
          Object.values(res)[1],
          Object.values(res)[4],
          Object.values(res)[5],
          Object.values(res)[2],
          Object.values(res)[6],
          Object.values(res)[8]
        );

        this.local.setUser(this.userInfo);

        this.auth.setUserLoggedIn();
        this.router.navigate(["/overzicht"]);
      }, (err) => {
        console.log("ERROR");
        console.log(err);
      }
    );
  }


}
