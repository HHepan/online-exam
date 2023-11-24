import { Injectable } from '@angular/core';
import {Student} from "../entity/student";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url=`${environment.apiUrl}/student`;

  constructor(private httpClient: HttpClient) { }

  save(student: Student): Observable<Student>  {
    return this.httpClient.post<Student>(`${this.url}/add`, student)
  }
}
