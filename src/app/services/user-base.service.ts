import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../modules/userBaseApi/userBaseApi.module';

const url = {
  user: 'http://localhost:5000/api/v1/users',
  category: 'http://localhost:5000/api/v1/users/category',
  status: 'http://localhost:5000/api/v1/users/status',
};

@Injectable({
  providedIn: 'root',
})
export class UserBaseService {
  constructor(private http: HttpClient) {}
  getUserList(): Observable<UserData> {
    return this.http.get<UserData>(url.user);
  }
}