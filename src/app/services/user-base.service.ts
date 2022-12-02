import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user.model';
import { HttpParams } from '@angular/common/http';
import { URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UserBaseService {
  public userList = {};
  constructor(private http: HttpClient) {}

  addUser(user: UserData) {
    return this.http
      .post<UserData>(URL.base, user)
      .subscribe((res) => console.log('usersAdded'));
  }

  getUserList(): Observable<UserData> {
    return this.http.get<UserData>(URL.base);
  }

  filterUserList(filterBy: object) {
    return this.http.post(URL.userList, filterBy);
  }
}
