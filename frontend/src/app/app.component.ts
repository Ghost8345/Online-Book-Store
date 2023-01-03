import { Component } from '@angular/core';
import { RegistrationComponent } from './components/registration/registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore-front';
  openNav() {

    document.getElementById("mySidenav")!.style.width="250px";
  }
  closeNav() {
    document.getElementById("mySidenav")!.style.width="0";
  }
  submit(e:Event){
    document.getElementById("mySidenav")!.style.width="0";

  }

}
