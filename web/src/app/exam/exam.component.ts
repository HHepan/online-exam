import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Page} from "../common/page";
import {environment} from "../../environments/environment";
import {CommonService} from "../../service/common.service";
import {ActivatedRoute} from "@angular/router";
import {Exam} from "../../entity/exam";
import {ExamService} from "../../service/exam.service";
import {UserService} from "../../service/user.service";
import {Teacher} from "../../entity/teacher";

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

  teacher: Teacher | undefined;

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

  constructor(private commonService: CommonService,
              private route: ActivatedRoute,
              private examService: ExamService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.onRefreshState();
    this.userService.getCurrentLoginUser().subscribe(user => {
      this.teacher = user.teacher;
      this.param.paramId = user.teacher.id;
      this.examService.page(this.param).subscribe(data => {
        this.pageData = data;
      });
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

  onPublish(exam: Exam) {
    if (exam.questions.length > 0) {
      this.examService.publish(exam.id).subscribe({
        next: () => {
          this.commonService.success(() => {
          }, '发布成功');
        },
        error: () => {
          this.commonService.error(() => {
          }, '发布失败');
        }
      });
    } else {
      this.commonService.error(() => {
      }, '请先设置题目');
    }
  }

  onBack(id: number) {
    this.examService.back(id).subscribe({
      next: () => {
        this.commonService.success(() => {
        }, '撤回成功');
      },
      error: () => {
        this.commonService.error(() => {
        }, '撤回失败');
      }
    });
  }

  onRefreshState() {
    this.examService.refreshState().subscribe({
      error: () => {
        this.commonService.error(() => {
        }, '考试状态刷新失败');
      }
      }
    );
  }
}
