import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class UserService{
    constructor(){}

    checkService(){
      console.log('I am USer service');
    }
}