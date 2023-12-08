import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AnswerStatus} from "../entity/answerStatus";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerStatusService {
  url=`${environment.apiUrl}/answerStatus`;

  constructor(private httpClient: HttpClient) { }

  save(answerStatus: AnswerStatus): Observable<AnswerStatus> {
    return this.httpClient.post<AnswerStatus>(`${this.url}/add`, answerStatus)
  }
}
