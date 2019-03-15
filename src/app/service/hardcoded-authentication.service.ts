import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if (username === 'in28minutes' && password == 'dummy') {
     sessionStorage.setItem('authenticatedUser',username);
     //console.log('After '+this.isUserLoggedIn());
     return true;
    }
    return false;
  }


  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
  return !(user === null);
  }


  
}
