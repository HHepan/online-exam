import { Injectable } from '@angular/core';
import {User} from "../entity/user";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=`${environment.apiUrl}/user`;

  currentLoginUser: User | null | undefined;

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User> {
    user = user as User;
    return this.httpClient.post<User>(`${this.url}/login`, user)
      .pipe(tap(data => {
        this.currentLoginUser = data;
      }));
  }

  setCurrentLoginUserNull() {
    this.currentLoginUser = null;
    window.sessionStorage.setItem('currentLoginUserId', '');
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }

  /**
   * 获取当前登录用户
   */
  getCurrentLoginUser(): Observable<User> {
    let currentLoginUserId = window.sessionStorage.getItem('currentLoginUserId');
    if (currentLoginUserId === null) {
      currentLoginUserId = '';
    }
    return this.getById(+currentLoginUserId);
  }
}
