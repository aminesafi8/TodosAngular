import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
  message = 'some welcome message ';
  welcomeMessageFromService: string;
  name = '';


  //ActivatedRoute
  constructor(private service: WelcomeDataService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];

  }


  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }


  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  //this function to handle the Successful Response
  handleSuccessfulResponse(response) {
    //Defining the structure of the expected Response in the Service!
    this.welcomeMessageFromService = response.message;

  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }


}
