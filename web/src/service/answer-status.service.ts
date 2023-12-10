import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
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

  getAllByExamIdAndStudentId(examId: number, studentId: number) {
    let httpParams = new HttpParams()
      .append('examId', examId.toString())
      .append('studentId', studentId.toString());
    return this.httpClient.get<AnswerStatus[]>(`${this.url}/getAllByExamIdAndStudentId`, {params: httpParams})
  }
}
