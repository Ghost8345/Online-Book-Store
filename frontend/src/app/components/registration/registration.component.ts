import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registration } from './registration';
import { Login } from './login'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

})
export class RegistrationComponent {
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  registration = new Registration('', '', '', '');
  login = new Login('', '')



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
    this.http.post('http://localhost:8080/login/', this.login, { headers: headerr, responseType: 'text' })
      .subscribe({
        next: (data: string) => {
          if (data === "-1") {
            // Swal.fire({
            //   position: 'center',
            //   icon: 'error',
            //   title: 'Email not Found',
            //   showConfirmButton: false,
            //   timer: 1500
            // })
            alert("wrong")

          // } else if (data === "Incorrect password") {
          //   // Swal.fire({
          //   //   position: 'center',
          //   //   icon: 'error',
          //   //   title: 'Incorrect password',
          //   //   showConfirmButton: false,
          //   //   timer: 1500
          //   // })

          }
          else {
            // from token store token & user id
            // localStorage.setItem("token", data.split(" ")[0]);
            console.log("hi" +data)
             localStorage.setItem("user_id", data);
             console.log(localStorage.getItem("user_id"))
             this.router.navigateByUrl('user')
          }
        },
        error: (error: any) => {
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

  signup() {
    const headerr = new HttpHeaders({ 'Content-Type': 'application/json', 'authentication': 'key' });
    this.http.post('http://localhost:8080/register/', this.registration, { headers: headerr, responseType: 'text' })
      .subscribe({
        next: (data: any) => {
          console.log("hii")
          console.log(data)
          if (data === 'succeeded') {           
            // Swal.fire({
            //   position: 'center',
            //   icon: 'success',
            //   title: 'Registeration Succeeded, please login',
            //   showConfirmButton: false,
            //   timer: 1500
            // })
            //if there is token 
            this.router.navigateByUrl('user')         
          } else {
            // Swal.fire({
            //   position: 'center',
            //   icon: 'error',
            //   title: 'his Email is already used',
            //   showConfirmButton: false,
            //   timer: 1500
            // })    
            alert("email already in use")        
          }
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }



}


