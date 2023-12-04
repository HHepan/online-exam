import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Question} from "../entity/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url=`${environment.apiUrl}/question`;
  constructor(private httpClient: HttpClient) { }

  save(question: Question): Observable<Question> {
    console.log('question', question);
    return this.httpClient.post<Question>(`${this.url}/add`, question);
  }

  deleteById(id: number) {
    return this.httpClient.delete<boolean>(`${this.url}/${id}`);
  }
}
