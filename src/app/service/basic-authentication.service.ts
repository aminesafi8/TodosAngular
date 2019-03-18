import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if (username === 'in28minutes' && password == 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('After '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }


  executeBasicAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization:
        basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth',
      { headers });
  }





  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
export class AuthenticationBean {

  constructor(public message: string) { }
}
