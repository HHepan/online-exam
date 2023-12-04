import { Injectable } from '@angular/core';
import {Student} from "../entity/student";
import {environment} from "../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Page} from "../app/common/page";
import {Action, Store} from "@tethys/store";


/**
 * 学生管理存储状态
 * */
interface StudentStatus extends Store<Student> {
  pageData: Page<Student>;
  httpParams: { size: number; page: number; name?: string; sno?: string};
  getById: Student;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService extends Store<StudentStatus> {
  url=`${environment.apiUrl}/student`;

  constructor(private httpClient: HttpClient) {
    super({
      pageData: new Page<Student>(),
      httpParams: {size: 0, page: 0, name: '', sno: ''}
    });
  }

  static pageData(status: StudentStatus): Page<Student> {
    return status.pageData;
  }

  @Action()
  page(param: { page: number; size: number; name?: string; sno?: string}): Observable<Page<Student>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }
    if (param.sno) {
      httpParams = httpParams.append('sno', param.sno);
    }

    const state = this.getState();
    state.httpParams = param;


    return this.httpClient.get<Page<Student>>(`${this.url}/page`, {params: httpParams})
      .pipe(tap(data => {
        state.pageData = data as Page<Student>;
        this.next(state);
      }));
  }

  @Action()
  save(student: Student): Observable<Student>  {
    return this.httpClient.post<Student>(`${this.url}/add`, student)
      .pipe(tap(data => {
        const state = this.getState();
        state.pageData.content.unshift(data);
        this.next(state);
        this.page(state.httpParams);
      }));
  }

  @Action()
  deleteById(studentId: number) {
    return this.httpClient.delete<boolean>(`${this.url}/${studentId}`).pipe(tap(data => {
      const state = this.getState();
      state.pageData.content = state.pageData.content.filter((v => v.id !== studentId));
      this.next(state);
      this.page(state.httpParams);
    }));
  }
}
