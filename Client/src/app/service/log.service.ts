import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class logService {
   
    constructor(){
    }

    logAny(log: any){     
        console.log(log);
    }


}