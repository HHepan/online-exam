import { Injectable } from '@angular/core';
import {Teacher} from "../entity/teacher";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map, Observable, tap} from "rxjs";
import {Page} from "../app/common/page";
import {Action, Store} from "@tethys/store";

/**
 * 教师管理存储状态
 * */
interface TeacherStatus extends Store<TeacherService> {
  pageData: Page<Teacher>;
  httpParams: { size: number; page: number; name?: string; phone?: string; };
  getById: Teacher;
}
@Injectable({
  providedIn: 'root'
})
export class TeacherService extends Store<TeacherStatus> {
  url=`${environment.apiUrl}/teacher`;

  constructor(private httpClient: HttpClient) {
    super({
      pageData: new Page<Teacher>(),
      httpParams: {size: 0, page: 0, name: '', phone: ''}
    });
  }

  static pageData(status: TeacherStatus): Page<Teacher> {
    return status.pageData;
  }

  @Action()
  page(param: { page: number; size: number; name?: string; phone?: string; }): Observable<Page<Teacher>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }
    if (param.phone) {
      httpParams = httpParams.append('phone', param.phone);
    }

    const state = this.getState();
    state.httpParams = param;


    return this.httpClient.get<Page<Teacher>>(`${this.url}/page`, {params: httpParams})
      .pipe(tap(data => {
        state.pageData = data as Page<Teacher>;
        this.next(state);
      }));
  }

  @Action()
  save(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(`${this.url}/add`, teacher)
      .pipe(tap(data => {
        const state = this.getState();
        state.pageData.content.unshift(data);
        this.next(state);
        this.page(state.httpParams);
      }));
  }

  @Action()
  deleteById(teacherId: number) {
    return this.httpClient.delete<boolean>(`${this.url}/${teacherId}`).pipe(tap(data => {
      const state = this.getState();
      state.pageData.content = state.pageData.content.filter((v => v.id !== teacherId));
      this.next(state);
      this.page(state.httpParams);
    }));
  }
}
