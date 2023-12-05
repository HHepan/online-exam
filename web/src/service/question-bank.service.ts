import { Injectable } from '@angular/core';
import {QuestionBank} from "../entity/questionBank";
import {Action, Store} from "@tethys/store";
import {Page} from "../app/common/page";
import {environment} from "../environments/environment";
import {Observable, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

/**
 * 题库管理存储状态
 * */
interface QuestionBankStatus extends Store<QuestionBank> {
  pageData: Page<QuestionBank>;
  httpParams: { size: number; page: number; name?: string;};
  getById: QuestionBank;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionBankService extends Store<QuestionBankStatus>  {
  url=`${environment.apiUrl}/questionBank`;

  constructor(private httpClient: HttpClient) {
    super({
      pageData: new Page<QuestionBank>(),
      httpParams: {size: 0, page: 0, name: '',}
    });
  }

  static pageData(status: QuestionBankStatus): Page<QuestionBank> {
    return status.pageData;
  }

  static getById(status: QuestionBankStatus): QuestionBank {
    return status.getById;
  }

  @Action()
  page(param: { page: number; size: number; name?: string;}): Observable<Page<QuestionBank>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }

    const state = this.getState();
    state.httpParams = param;

    return this.httpClient.get<Page<QuestionBank>>(`${this.url}/page`, {params: httpParams})
      .pipe(tap(data => {
        state.pageData = data as Page<QuestionBank>;
        this.next(state);
      }));
  }

  @Action()
  save(questionBank: QuestionBank): Observable<QuestionBank>  {
    console.log('QuestionBank sava', questionBank);
    return this.httpClient.post<QuestionBank>(`${this.url}/add`, questionBank)
      .pipe(tap(data => {
        const state = this.getState();
        state.pageData.content.unshift(data);
        this.next(state);
        this.page(state.httpParams);
      }));
  }

  @Action()
  deleteById(questionBankId: number) {
    return this.httpClient.delete<boolean>(`${this.url}/${questionBankId}`).pipe(tap(data => {
      const state = this.getState();
      state.pageData.content = state.pageData.content.filter((v => v.id !== questionBankId));
      this.next(state);
      this.page(state.httpParams);
    }));
  }

  @Action()
  getById(questionBankId: number): Observable<QuestionBank>  {
    return this.httpClient.get<QuestionBank>(`${this.url}/${questionBankId}`).pipe(tap(data => {
      const state = this.getState();
      state.getById = data as QuestionBank;
      this.next(state);
    }));

  }
}
