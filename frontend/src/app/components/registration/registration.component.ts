import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Registration} from './registration';
import {Login} from '../login/login';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent {
  constructor(private router: Router ,private route: ActivatedRoute,private http: HttpClient) {}

  registration = new Registration('', '', '', '');
  login =new Login('','')

  

  ValidateRequest(e:Event){
    e.preventDefault();
    var usermail=document.getElementById("userSignIn") as HTMLInputElement;
    var password=document.getElementById("passSignIn") as HTMLInputElement;
    if(usermail.value=="" ||password.value==""){
      alert("All fields should be filled out");

    }
    else{
      //this.router.navigate(['/registeduser']);
      console.log("Entered info : "+ usermail.value ,password.value);
    }
  }

  onSubmit() {
   
    var First=document.getElementById("FirstName") as HTMLInputElement;
      var Last=document.getElementById("LastName") as HTMLInputElement;
  
      var pass1=document.getElementById("passSignUp") as HTMLInputElement;
      var pass2=document.getElementById("passSignUp2") as HTMLInputElement;
      var mail=document.getElementById("mail") as HTMLInputElement;
    
  
       if(First.value=="" || Last.value==""||pass1.value=="" || pass2.value=="" ||mail.value==""){
         // Swal.fire({
              //   position: 'center',
              //   icon: 'error',
              //   title: 'All fields should be filled out',
              //   showConfirmButton: false,
              //   timer: 1500
              // })    
  
        alert("All fields should be filled out");
      }
      else if(pass1.value != pass2.value){
        alert("Passwords aren't identical ,Try Again!");
          // Swal.fire({
              //   position: 'center',
              //   icon: 'error',
              //   title: 'Passwords aren't identical ,Try Again!',
              //   showConfirmButton: false,
              //   timer: 1500
              // })    
      }else{         
        // this.signup() 
        //tmam
        console.log('email: ' + this.registration.email + ', fname: ' + this.registration.fname + ', lname: ' + this.registration.lname + ', pass: '+ this.registration.password);
      } 
  }

  signup(){
  //   const headerr=new HttpHeaders({'Content-Type': 'application/json' ,'authentication': 'key' });
  //   this.http.post('http://localhost:8080/signup', this.registration, { headers: headerr, responseType:'text'})
  //   .subscribe({
  //       next: (data: any) => {
  //           console.log("hii")
  //           console.log(data)
  //           if(data==='Registration Succeeded'){        
  //             // Swal.fire({
  //             //   position: 'center',
  //             //   icon: 'success',
  //             //   title: 'Registeration Succeeded, please login',
  //             //   showConfirmButton: false,
  //             //   timer: 1500
  //             // })
  //              //if there is token 
  //            // this.router.navigateByUrl('login')         
  //           }else{
  //             // Swal.fire({
  //             //   position: 'center',
  //             //   icon: 'error',
  //             //   title: 'his Email is already used',
  //             //   showConfirmButton: false,
  //             //   timer: 1500
  //             // })            
  //           }         
  //           },
  //           error: (error: any) => {
  //           console.error(error);
  //           }
  //       });
   }



  }
  

