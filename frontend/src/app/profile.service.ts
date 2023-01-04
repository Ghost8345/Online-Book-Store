import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/components/profile/User'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private profileInfo = new BehaviorSubject<User>(new User(Number(localStorage.getItem("user_id")), "", "", "", "",localStorage.getItem("ismanager")=="true"));
  profileInfo$ = this.profileInfo.asObservable();
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  getProfileInfo(): User {
    return this.profileInfo.value;
  }

  setProfileInfo(user: User): void {
    this.profileInfo.next(user);
  }

  public getProfile(user_id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/user/getUser`,{params:{user_id}});
  }
  public editProfile(user: User): Observable<number> {
    return this.http.put<number>(`http://localhost:8080/user/edit`, JSON.stringify(user),this.requestOptions);
  }


}
