import { Injectable } from '@angular/core';
import {Action, Store} from "@tethys/store";
import {Observable, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Course} from "../entity/course";
import {Page} from "../app/common/page";


/**
 * 课程管理存储状态
 * */
interface CourseStatus extends Store<CourseService> {
  pageData: Page<Course>;
  httpParams: { size: number; page: number; name?: string;};
  getById: Course;
}
@Injectable({
  providedIn: 'root'
})
export class CourseService extends Store<CourseStatus> {
  url=`${environment.apiUrl}/course`;

  constructor(private httpClient: HttpClient) {
    super({
      pageData: new Page<Course>(),
      httpParams: {size: 0, page: 0, name: ''}
    });
  }

  static pageData(status: CourseStatus): Page<Course> {
    return status.pageData;
  }

  @Action()
  page(param: { page: number; size: number; name?: string;}): Observable<Page<Course>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }

    const state = this.getState();
    state.httpParams = param;


    return this.httpClient.get<Page<Course>>(`${this.url}/page`, {params: httpParams})
      .pipe(tap(data => {
        state.pageData = data as Page<Course>;
        this.next(state);
      }));
  }

  @Action()
  save(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${this.url}/add`, course)
      .pipe(tap(data => {
        const state = this.getState();
        state.pageData.content.unshift(data);
        this.next(state);
        this.page(state.httpParams);
      }));
  }

  @Action()
  deleteById(courseId: number) {
    return this.httpClient.delete<boolean>(`${this.url}/${courseId}`).pipe(tap(data => {
      const state = this.getState();
      state.pageData.content = state.pageData.content.filter((v => v.id !== courseId));
      this.next(state);
      this.page(state.httpParams);
    }));
  }
}
