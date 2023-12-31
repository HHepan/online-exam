import { Injectable } from '@angular/core';
import {Action, Store} from "@tethys/store";
import {Page} from "../app/common/page";
import {Exam} from "../entity/exam";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable, tap} from "rxjs";
import {Question} from "../entity/question";


/**
 * 考试管理存储状态
 * */
interface ExamStatus extends Store<ExamService> {
  pageData: Page<Exam>;
  pageDataForMyExam: Page<Exam>;
  httpParams: { size: number; page: number; name?: string; paramId?: number};
  getById: Exam;
}
@Injectable({
  providedIn: 'root'
})
export class ExamService extends Store<ExamStatus> {
  url=`${environment.apiUrl}/exam`;

  constructor(private httpClient: HttpClient) {
    super({
      pageData: new Page<Exam>(),
      pageDataForMyExam: new Page<Exam>(),
      httpParams: {size: 0, page: 0, name: '', paramId: 0}
    });
  }

  static pageData(status: ExamStatus): Page<Exam> {
    return status.pageData;
  }

  static pageDataForMyExam(status: ExamStatus): Page<Exam> {
    return status.pageDataForMyExam;
  }

  @Action()
  page(param: { page: number; size: number; name?: string; paramId?: number}): Observable<Page<Exam>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }

    const state = this.getState();
    state.httpParams = param;

    return this.httpClient.get<Page<Exam>>(`${this.url}/page/${param.paramId}`, {params: httpParams})
      .pipe(tap(data => {
        state.pageData = data as Page<Exam>;
        this.next(state);
      }));
  }

  @Action()
  pageForMyExam(param: { page: number; size: number; name?: string; paramId: number}): Observable<Page<Exam>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }

    const state = this.getState();
    state.httpParams = param;

    return this.httpClient.get<Page<Exam>>(`${this.url}/pageForMyExam/${param.paramId}`, {params: httpParams})
      .pipe(tap(data => {
        state.pageDataForMyExam = data as Page<Exam>;
        this.next(state);
      }));
  }

  @Action()
  save(exam: Exam): Observable<Exam> {
    return this.httpClient.post<Exam>(`${this.url}/add`, exam)
      .pipe(tap(data => {
        const state = this.getState();
        state.pageData.content.unshift(data);
        this.next(state);
        this.page(state.httpParams);
      }));
  }

  @Action()
  getById(examId: number): Observable<Exam>  {
    return this.httpClient.get<Exam>(`${this.url}/${examId}`).pipe(tap(data => {
      const state = this.getState();
      state.getById = data as Exam;
      this.next(state);
    }));
  }

  @Action()
  deleteById(examId: number) {
    return this.httpClient.delete<boolean>(`${this.url}/${examId}`).pipe(tap(data => {
      const state = this.getState();
      state.pageData.content = state.pageData.content.filter((v => v.id !== examId));
      this.next(state);
      this.page(state.httpParams);
    }));
  }

  saveExamQuestions(currentQuestions: Question[], examId: number | undefined) {
    return this.httpClient.post<any>(`${this.url}/saveExamQuestions/${examId}`, currentQuestions);
  }

  clearExamQuestionsById(examId: number) {
    return this.httpClient.get<Exam>(`${this.url}/clearExamQuestionsById/${examId}`);
  }

  @Action()
  publish(examId: number) {
    return this.httpClient.get<Exam>(`${this.url}/publish/${examId}`).pipe(tap(data => {
      const state = this.getState();
      this.page(state.httpParams);
    }));
  }


  @Action()
  back(examId: number) {
    return this.httpClient.get<Exam>(`${this.url}/back/${examId}`).pipe(tap(data => {
      const state = this.getState();
      this.page(state.httpParams);
    }));
  }

  @Action()
  refreshState() {
    return this.httpClient.get<boolean>(`${this.url}/refreshState`).pipe(tap(data => {
      const state = this.getState();
      this.page(state.httpParams);
    }));
  }
}
