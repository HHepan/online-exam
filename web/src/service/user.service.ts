import { Injectable } from '@angular/core';
import {User} from "../entity/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User> {
    user = user as User;
    return this.httpClient.post<User>(`/user/login`, user);
  }

}
