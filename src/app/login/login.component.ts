import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticaionService: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticaionService.authenticate(this.username, this.password)) {
      //redirect to Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;

    }
    else {
      this.invalidLogin = true;
    }
  }

}
