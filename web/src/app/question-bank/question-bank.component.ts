import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Page} from "../common/page";
import {environment} from "../../environments/environment";
import {CommonService} from "../../service/common.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionBank} from "../../entity/questionBank";
import {QuestionBankService} from "../../service/question-bank.service";
import {SubjectsService} from "../../service/subjects.service";

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent {
  queryForm = new FormGroup({
    name: new FormControl()
  });

  pageData = new Page<QuestionBank>();

  keys = {
    page: 'page',
    size: 'size',
    name: 'name',
  };

  param = {
    page: 0,
    size: environment.size,
    name: '',
  };


  constructor(private commonService: CommonService,
              private questionBankService: QuestionBankService,
              private subjectsService: SubjectsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.questionBankService.page(this.param).subscribe(data => {
      this.pageData = data;
    });
    this.questionBankService.select(QuestionBankService.pageData).subscribe(data => {
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
    this.questionBankService.page(this.param);
  }

  /**
   * 查询
   * */
  onQuery() {
    this.param.name = this.queryForm.get(this.keys.name)?.value;
    this.reload();
  }


  onDelete(questionBank: QuestionBank) {
    const description = questionBank.name;
    this.commonService.confirm(() => {
      this.questionBankService.deleteById(questionBank.id).subscribe({
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
