import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registration } from './registration';
import { Login } from './login'
import { UserInfo } from './login';
import { global } from 'src/app/global';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

})
export class RegistrationComponent {
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,private app:AppComponent) { }

  registration = new Registration('', '', '', '');
  login = new Login('', '')
   userInfo =new UserInfo(0,false)


  ValidateRequest(e: Event) {
    e.preventDefault();
    var usermail = (document.getElementById("userSignIn") as HTMLInputElement).value;
    var password = (document.getElementById("passSignIn") as HTMLInputElement).value;
    this.login.email = usermail
    this.login.password = password
    if (usermail == "" || password == "") {
      alert("All fields should be filled out");

    }
    else {
      //this.router.navigate(['/registeduser']);

      console.log("Entered info : " + this.login.email, this.login.password);
      this.loginn();
    }

  }
 

  loginn() {
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'authentication': 'key' });
    this.http.post('http://localhost:8080/login/', this.login, { headers: headerr, responseType: 'json'  })
      .subscribe({
        next: (data: any) => {
          console.log(data)
          if (data=== null) {       
            alert("wrong")
          }
          else {
            // from token store token & user id
            // localStorage.setItem("token", data.split(" ")[0]);
             
             localStorage.setItem("user_id", data.id);
             localStorage.setItem("ismanager",data.ismanager);
             localStorage.setItem("loggedin","1");
             this.app.ismanager();
             console.log(localStorage.getItem("user_id"))
             console.log(localStorage.getItem("ismanager"))
            global.ismanager=data.ismanager;
            console.log("check"+global.ismanager)
            if(data.ismanager===true){
                 this.router.navigate(['/app'])
                 this.router.navigateByUrl('user')
            }

            else{
              this.router.navigate(['/app'])
              this.router.navigateByUrl('user')

            }
          
          }
        },
        error: (error: any) => {
          alert("wrong information")
          console.error(error);
        }
      });
      

  }
  /******************************************************Registration***********************************************************/
  onSubmit() {
    var First = document.getElementById("FirstName") as HTMLInputElement;
    var Last = document.getElementById("LastName") as HTMLInputElement;
    var pass1 = document.getElementById("passSignUp") as HTMLInputElement;
    var pass2 = document.getElementById("passSignUp2") as HTMLInputElement;
    var mail = document.getElementById("mail") as HTMLInputElement;


    if (First.value == "" || Last.value == "" || pass1.value == "" || pass2.value == "" || mail.value == "") {
      // Swal.fire({
      //   position: 'center',
      //   icon: 'error',
      //   title: 'All fields should be filled out',
      //   showConfirmButton: false,
      //   timer: 1500
      // })    

      alert("All fields should be filled out");
    }
    else if (pass1.value != pass2.value) {
      alert("Passwords aren't identical ,Try Again!");
      // Swal.fire({
      //   position: 'center',
      //   icon: 'error',
      //   title: 'Passwords aren't identical ,Try Again!',
      //   showConfirmButton: false,
      //   timer: 1500
      // })    
    } else {
      console.log('email: ' + this.registration.email + ', fname: ' + this.registration.firstName + ', lname: ' + this.registration.lastName + ', pass: ' + this.registration.password);
       this.signup() 
      //tmam
      
    }
  }
datareq:Number=0
  signup() {
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'authentication': 'key' });
    this.http.post('http://localhost:8080/register/', this.registration, { headers: headerr, responseType: 'text' })
      .subscribe({
        next: (data: any) => {
         
          console.log(data)
           this.datareq=data
          
         
            // id of user 
            localStorage.setItem("user_id", data);
            if(data==='1'){
              localStorage.setItem("ismanager",JSON.stringify(true));  
             
            }else{
              localStorage.setItem("ismanager",JSON.stringify(false));    
             
            }
           // localStorage.setItem("ismanager",JSON.stringify(false));
           localStorage.setItem("loggedin","1");
           this.app.ismanager();
           this.router.navigateByUrl('app')         
           this.router.navigateByUrl('user') 
          
        
        },
        error: (error: any) => {
          alert("email already in use")      
          console.error(error);
        }
      });


      
  }



}


