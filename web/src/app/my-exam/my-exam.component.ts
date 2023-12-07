import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Student} from "../../entity/student";
import {ExamService} from "../../service/exam.service";
import {environment} from "../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";
import {Page} from "../common/page";
import {Exam} from "../../entity/exam";
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-my-exam',
  templateUrl: './my-exam.component.html',
  styleUrls: ['./my-exam.component.css']
})
export class MyExamComponent implements OnInit {
  student: Student | undefined;

  queryForm = new FormGroup({
    name: new FormControl()
  });

  pageData = new Page<Exam>();

  keys = {
    page: 'page',
    size: 'size',
    name: 'name'
  };

  param = {
    page: 0,
    size: environment.size,
    name: '',
    paramId: 0
  };

  constructor(private userService: UserService,
              private examService: ExamService,
              private commonService: CommonService) { }
  ngOnInit(): void {
    this.userService.getCurrentLoginUser().subscribe(user => {
      this.student = user.student;
      this.param.paramId = this.student.clazz.id;
      this.examService.pageForMyExam(this.param).subscribe(data => {
        this.pageData = data;
      });
    });
    this.examService.select(ExamService.pageDataForMyExam).subscribe(data => {
      this.pageData = data;
    });
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
    this.examService.pageForMyExam(this.param);
  }

  /**
   * 查询
   * */
  onQuery() {
    this.param.name = this.queryForm.get(this.keys.name)?.value;
    this.reload();
  }

  onRefreshState() {
    this.examService.refreshState().subscribe({
        next: () => {
          this.commonService.success(() => {
          }, '刷新成功');
          this.ngOnInit();
        },
        error: () => {
          this.commonService.error(() => {
          }, '刷新失败');
        }
      }
    );
  }
}