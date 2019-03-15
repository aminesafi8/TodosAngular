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
  name = '';
  welcomeMessageFromService:string;

  //ActivatedRoute
  constructor(
    private service: WelcomeDataService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];

  }


  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)

    );
    console.log('last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService=response.message;
    //console.log(response);
    //console.log(response.message);
  }


}
