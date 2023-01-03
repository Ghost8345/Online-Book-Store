import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from 'src/app/components/profile/profile'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private profileInfo = new BehaviorSubject<Profile>(new Profile(NaN, "", "", "", ""));
  profileInfo$ = this.profileInfo.asObservable();

  getProfileInfo(): Profile {
    return this.profileInfo.value;
  }

  setProfileInfo(profile: Profile): void {
    this.profileInfo.next(profile);
  }

  public getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(`http://localhost:8080/getProfileData?id=${id}`);
  }
  public editProfile(profile: Profile): Observable<number> {
    return this.http.post<number>(`http://localhost:8080/editProfile`, profile);
  }


}
