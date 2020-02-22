import { Component } from '@angular/core';
import { winkelmandService } from './service/winkelmand.service';
import { httpService } from './service/http.service';
import { logService } from './service/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [winkelmandService,httpService, logService]
})

export class AppComponent {

  title = 'Client';

  constructor(private winkelmand: winkelmandService, private httpService: httpService, private logService: logService){

  }
}
