import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Page} from "../common/page";
import {Teacher} from "../../entity/teacher";
import {environment} from "../../environments/environment";
import {CommonService} from "../../service/common.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TeacherService} from "../../service/teacher.service";
import {StudentService} from "../../service/student.service";
import {Student} from "../../entity/student";
import {SubjectsService} from "../../service/subjects.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  queryForm = new FormGroup({
    name: new FormControl(),
    sno: new FormControl()
  });

  pageData = new Page<Student>();

  keys = {
    page: 'page',
    size: 'size',
    name: 'name',
    sno: 'sno',
  };

  param = {
    page: 0,
    size: environment.size,
    name: '',
    sno: '',
  };


  constructor(private commonService: CommonService,
              private studentService: StudentService,
              private subjectsService: SubjectsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studentService.page(this.param).subscribe(data => {
      this.pageData = data;
    });
    this.studentService.select(StudentService.pageData).subscribe(data => {
      this.pageData = data;
    });
    const route = this.router.url;
    this.subjectsService.sentRootMessage(route);
  }

  /**
   * 点击分页
   * @param page 当前页
   */
  onPageChange(page: number): void {
    this.param.page = page;
    this.reload();
  }

  /**
   * 点击改变每页大小
   * @param size 每页大小
   */
  onSizeChange(size: number): void {
    this.param.size = size;
    this.reload();
  }

  /**
   * 查询
   */
  reload(): void {
    this.studentService.page(this.param);
  }

  /**
   * 查询
   * */
  onQuery() {
    this.param.name = this.queryForm.get(this.keys.name)?.value;
    this.param.sno = this.queryForm.get(this.keys.sno)?.value;
    this.reload();
  }


  onDelete(student: Student) {
    const description = student.name;
    this.commonService.confirm(() => {
      this.studentService.deleteById(student.id).subscribe({
          next: () => {
            this.commonService.success(() => {
            }, '删除成功');
          },
          error: () => {
            this.commonService.error(() => {
            }, '删除失败');
          }
        }
      );
    }, '即将删除' + description);
  }
}
