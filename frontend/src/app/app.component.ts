import { Component } from '@angular/core';
import { RegistrationComponent } from './components/registration/registration.component';
import { Router } from '@angular/router';
import { global } from './global';
import { UploadItem } from './components/add-book/add-book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedin=JSON.parse(localStorage.getItem("loggedin")!)
  manager=false;
  constructor(private router:Router){
    this.manager=JSON.parse( localStorage.getItem('ismanager')!)
       this.router.routeReuseStrategy.shouldReuseRoute=function(){

        console.log("ccccccccccccccccc"+JSON.parse( localStorage.getItem('ismanager')!))


        return false
       }
    }
  title = 'bookstore-front';
  openNav() {
console.log("yaaaaaaaaaaa"+this.manager)
    document.getElementById("mySidenav")!.style.width="250px";
  }
  closeNav() {
    document.getElementById("mySidenav")!.style.width="0";
  }
  submit(e:Event){
    document.getElementById("mySidenav")!.style.width="0";

  }
  logout(){
    localStorage.clear();
    
            let p:UploadItem[]=[];
          localStorage.setItem("CartProducts",JSON.stringify(p))
          localStorage.setItem("subtotal","0")

    localStorage.setItem("loggedin","0");
    
    this.router.navigate(['/registration']);
  }
  change(){

  }
  ismanager(){
    this.loggedin=JSON.parse(localStorage.getItem("loggedin")!)
    this.manager=JSON.parse( localStorage.getItem('ismanager')!)
  }
  cart(){
    document.getElementById("itemsnum")!.style.display="none"

  }
  search(){
  let value= (<HTMLInputElement>document.getElementById("searchingFor")).value
  let option=(<HTMLInputElement>document.getElementById("search")).value
  localStorage.setItem("input",value);
  localStorage.setItem("option",option);
  this.router.navigate(['/search'])
  console.log("msh httl3-->"+option)
  }

}
