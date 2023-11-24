import { Injectable } from '@angular/core';
import {Teacher} from "../entity/teacher";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url=`${environment.apiUrl}/teacher`;

  constructor(private httpClient: HttpClient) { }

  save(teacher: Teacher): Observable<Teacher> {
    console.log('teacher save s', teacher);
    return this.httpClient.post<Teacher>(`${this.url}/add`, teacher);
  }

  deleteById(teacherId: number) {

  }
}
