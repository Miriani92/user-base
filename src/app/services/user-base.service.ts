import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user.model';
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
  deleteUser(id: string) {
    return this.http.delete(URL.base + `/${id}`);
  }
  addCategory(category: object) {
    return this.http.post(URL.category, category);
  }
  getCategories(): any {
    return this.http.get(URL.category);
  }

  // here we subscribe in the services and making the updated users global

  editCategory(edited: any) {
    return this.http.patch(URL.category, edited);
  }
}
