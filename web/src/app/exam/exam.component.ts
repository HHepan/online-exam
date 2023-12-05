import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Page} from "../common/page";
import {environment} from "../../environments/environment";
import {CommonService} from "../../service/common.service";
import {ActivatedRoute} from "@angular/router";
import {Exam} from "../../entity/exam";
import {ExamService} from "../../service/exam.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
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
  };


  constructor(private commonService: CommonService,
              private route: ActivatedRoute,
              private examService: ExamService) {
  }

  ngOnInit(): void {
    this.examService.page(this.param).subscribe(data => {
      this.pageData = data;
    });
    this.examService.select(ExamService.pageData).subscribe(data => {
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
    this.examService.page(this.param);
  }

  /**
   * 查询
   * */
  onQuery() {
    this.param.name = this.queryForm.get(this.keys.name)?.value;
    this.reload();
  }


  onDelete(exam: Exam) {
    const description = exam.name;
    this.commonService.confirm(() => {
      this.examService.deleteById(exam.id).subscribe({
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
