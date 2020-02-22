import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welkom',
  templateUrl: './welkom.component.html',
  styleUrls: ['./welkom.component.css']
})
export class WelkomComponent implements OnInit {

  soortGebruiker = "Klant";

  constructor() { }

  ngOnInit() {
  }

}
