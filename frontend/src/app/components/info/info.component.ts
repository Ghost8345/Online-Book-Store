import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/components/profile/User'
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor(private profileService: ProfileService) { };

  userdata$: Observable<User> = this.profileService.profileInfo$;


  showPasswordFlag: boolean = false;
  passwordButton: string = "Show Password";

  getHiddenPassword(userPasswrod: string): string {
    let len = userPasswrod.length;
    let output: string = "";
    for (let index = 0; index < len; index++) {
      output += "*";
    }
    return output;
  }
  showPassword(): void {
    this.showPasswordFlag = true;
    this.passwordButton = "Hide Password";
    console.log("PasswordIsShown");

  }
  hidePassword(): void {
    this.showPasswordFlag = false;
    this.passwordButton = "Show Password";
    console.log("PasswordIsHidden");

  }
  getPassword(userPasswrod: string | undefined): string {
    if(!userPasswrod) return "";
    if (this.showPasswordFlag) return userPasswrod;
    return this.getHiddenPassword(userPasswrod);
  }
  triggerPasswordButton() {
    if (this.showPasswordFlag) this.hidePassword();
    else this.showPassword();
    console.log("PasswordIsTriggered");
  }
}
