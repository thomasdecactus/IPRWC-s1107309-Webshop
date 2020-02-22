import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private auth: AuthService, private router: Router) { 
    this.isLoggedIn = auth.getLogginStatus();
  }

  ngOnInit() {
    this.auth.loginStatusChanged.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }

  logout(){
    this.auth.setUserNotLoggedIn();
  }



}
