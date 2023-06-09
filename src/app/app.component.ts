import { Component } from '@angular/core';
//import { DOMAIN_URL} from '@app/constant';
import {DOMAIN_URL} from '@app/constant';
import {environments} from '@src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngMix';
  constructor(){
    console.log("environments ", environments);
  }
  ngOnInit(){
    console.log(" DOMAIN_URL ", DOMAIN_URL);
  }
}
