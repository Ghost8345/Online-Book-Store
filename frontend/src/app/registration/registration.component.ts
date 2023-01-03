import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private router: Router ) {}

  ValidateRequest(e:Event){
    e.preventDefault();
    var usermail=document.getElementById("userSignIn") as HTMLInputElement;
    var password=document.getElementById("passSignIn") as HTMLInputElement;
    if(usermail.value=="" ||password.value==""){
      alert("All fields should be filled out");

    }
    else{
      this.router.navigate(['/registeduser']);
      console.log("Entered info : "+ usermail.value ,password.value);
    }
  }
  register(e:Event){

    var First=document.getElementById("FirstName") as HTMLInputElement;
    var Last=document.getElementById("LastName") as HTMLInputElement;

    var pass1=document.getElementById("passSignUp") as HTMLInputElement;
    var pass2=document.getElementById("passSignUp2") as HTMLInputElement;
    var mail=document.getElementById("mail") as HTMLInputElement;
    var userphone=document.getElementById("phone") as HTMLInputElement;

    var date=document.getElementById("birthdate") as HTMLInputElement;
    var address=document.getElementById("address") as HTMLInputElement;
    console.log("Registeration info :"+ First.value ,Last.value,pass1.value ,pass2.value ,mail.value,userphone.value,date.value,address.value)

     if(First.value=="" || Last.value==""||pass1.value=="" || pass2.value=="" ||mail.value==""||userphone.value==""||date.value==""||address.value==""){

      alert("All fields should be filled out");
    }
    else if(pass1.value != pass2.value){
      alert("Passwords aren't identical ,Try Again!");
    }
  



    }


  }
  

