import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user.model';
import { URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UserBaseService {
  constructor(private http: HttpClient) {}

  addUser(user: UserData) {
    return this.http
      .post<UserData>(URL.base, user)
      .subscribe((res) => console.log('data has been send'));
  }

  getUserList(): Observable<UserData> {
    return this.http.get<UserData>(URL.base);
  }

  filterUserList(filterBy: string): Observable<UserData> {
    console.log(filterBy);
    return this.http.get<UserData>(URL.base, {});
  }
}
