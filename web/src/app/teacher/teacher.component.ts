import {Component, OnInit} from '@angular/core';
import {Page} from "../common/page";
import {Teacher} from "../../entity/teacher";
import {FormControl, FormGroup} from "@angular/forms";
import {CommonService} from "../../service/common.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TeacherService} from "../../service/teacher.service";
import {environment} from "../../environments/environment";
import {SubjectsService} from "../../service/subjects.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  queryForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl()
  });

  pageData = new Page<Teacher>();

  keys = {
    page: 'page',
    size: 'size',
    name: 'name',
    phone: 'phone',
  };

  param = {
    page: 0,
    size: environment.size,
    name: '',
    phone: '',
  };


  constructor(private commonService: CommonService,
              private teacherService: TeacherService,
              private subjectsService: SubjectsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.teacherService.page(this.param).subscribe(data => {
      this.pageData = data;
    });
    this.teacherService.select(TeacherService.pageData).subscribe(data => {
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
    this.teacherService.page(this.param);
  }

  /**
   * 查询
   * */
  onQuery() {
    this.param.name = this.queryForm.get(this.keys.name)?.value;
    this.param.phone = this.queryForm.get(this.keys.phone)?.value;
    this.reload();
  }


  onDelete(teacher: Teacher) {
    const description = teacher.name;
    this.commonService.confirm(() => {
      this.teacherService.deleteById(teacher.id).subscribe({
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
