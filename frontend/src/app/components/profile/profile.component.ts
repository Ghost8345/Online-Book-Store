import { Component } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';
import { User } from './User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private profileService: ProfileService) { }
  ngOnInit(): void {
    let id = localStorage.getItem("user_id");
    this.profileService.getProfile(Number(id)).subscribe((response) => {
      this.profileService.setProfileInfo(response);
    });

  }

}
