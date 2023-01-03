import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { Profile } from 'src/app/components/profile/profile'
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  constructor(private profileService: ProfileService) { }



  showPasswordFlag: boolean = false;
  passwordFieldType: string = "password";

  userdata: Profile = this.profileService.getProfileInfo();

  updatedata(fName: string, lName: string, email: string, password: string) {
    this.userdata.email = email;
    this.userdata.firstName = fName;
    this.userdata.lastName = lName;
    this.userdata.password = password;
  //  this.profileService.setProfileInfo(this.userdata);

     this.profileService.editProfile(this.userdata).subscribe(() => {
      this.profileService.setProfileInfo(this.userdata);
    });
  }
  showPassword(): void {
    this.showPasswordFlag = true;
    this.passwordFieldType = "text";

  }
  hidePassword(): void {
    this.showPasswordFlag = false;
    this.passwordFieldType = "password";
  }
 
  triggerPasswordButton() {
    if (this.showPasswordFlag) this.hidePassword();
    else this.showPassword();
    console.log("PasswordIsTriggered");
  }


}
