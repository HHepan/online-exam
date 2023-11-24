import { Injectable } from '@angular/core';
import {Page} from "../app/common/page";
import {Clazz} from "../entity/clazz";
import {Action, Store} from "@tethys/store";
import {Observable, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";

/**
 * 班级管理存储状态
 * */
interface ClazzStatus extends Store<ClazzService> {
  pageData: Page<Clazz>;
  httpParams: { size: number; page: number; name?: string;};
  getById: Clazz;
}

@Injectable({
  providedIn: 'root'
})
export class ClazzService extends Store<ClazzStatus>  {
  url=`${environment.apiUrl}/clazz`;

  constructor(private httpClient: HttpClient) {
    super({
      pageData: new Page<Clazz>(),
      httpParams: {size: 0, page: 0, name: ''}
    });
  }

  static pageData(status: ClazzStatus): Page<Clazz> {
    return status.pageData;
  }

  @Action()
  page(param: { page: number; size: number; name?: string;}): Observable<Page<Clazz>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }

    const state = this.getState();
    state.httpParams = param;


    return this.httpClient.get<Page<Clazz>>(`${this.url}/page`, {params: httpParams})
      .pipe(tap(data => {
        state.pageData = data as Page<Clazz>;
        this.next(state);
      }));
  }

  @Action()
  save(clazz: Clazz): Observable<Clazz> {
    return this.httpClient.post<Clazz>(`${this.url}/add`, clazz)
      .pipe(tap(data => {
        const state = this.getState();
        state.pageData.content.unshift(data);
        this.next(state);
        this.page(state.httpParams);
      }));
  }

  @Action()
  deleteById(clazzId: number) {
    return this.httpClient.delete<boolean>(`${this.url}/${clazzId}`).pipe(tap(data => {
      const state = this.getState();
      state.pageData.content = state.pageData.content.filter((v => v.id !== clazzId));
      this.next(state);
      this.page(state.httpParams);
    }));
  }

  getAll(): Observable<Clazz[]> {
    return this.httpClient.get<Clazz[]>(`${this.url}/getAll`);
  }
}
