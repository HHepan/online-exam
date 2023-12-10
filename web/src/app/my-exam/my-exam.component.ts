import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Student} from "../../entity/student";
import {ExamService} from "../../service/exam.service";
import {environment} from "../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";
import {Page} from "../common/page";
import {Exam} from "../../entity/exam";
import {CommonService} from "../../service/common.service";
import {Router} from "@angular/router";
import {AnswerStatusService} from "../../service/answer-status.service";
import {AnswerStatus} from "../../entity/answerStatus";

@Component({
  selector: 'app-my-exam',
  templateUrl: './my-exam.component.html',
  styleUrls: ['./my-exam.component.css']
})
export class MyExamComponent implements OnInit {
  student: Student | undefined;

  allExamOfCurrentStudent: Exam[] = [];

  AnswerStatusesOfExams: AnswerStatusOfExam[] = [];

  getAnswerStatusesOfExamsSuccess: boolean = false;

  isAnswerCompletedKey: boolean | undefined;

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
              private commonService: CommonService,
              private router: Router,
              private answerStatusService: AnswerStatusService) { }
  ngOnInit(): void {
    this.onRefreshState();
    this.userService.getCurrentLoginUser().subscribe(user => {
      this.student = user.student;
      this.param.paramId = this.student.clazz.id;
      this.examService.pageForMyExam(this.param).subscribe(data => {
        this.pageData = data;
        this.allExamOfCurrentStudent = data.content;
        this.getAnswerStatus(data.content, user.student);
      });
    });
    this.examService.select(ExamService.pageDataForMyExam).subscribe(data => {
      this.pageData = data;
    });
  }

  getAnswerStatus(allExamOfCurrentStudent: Exam[], currentStudent: Student) {
    allExamOfCurrentStudent.forEach(exam => {
      this.answerStatusService.getAllByExamIdAndStudentId(exam.id, currentStudent.id)
        .subscribe(res => {
          const tmp = {
            exam,
            answerStatuses: res
          } as unknown as AnswerStatusOfExam;
          this.AnswerStatusesOfExams.push(tmp);
          this.getAnswerStatusesOfExamsSuccess = true;
      });
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
        error: () => {
          this.commonService.error(() => {
          }, '考试状态刷新失败');
        }
      }
    );
  }

  intoExaming(id: number) {
    this.commonService.confirm(() => {
      this.router.navigateByUrl('my-exam/examing/' + id).then();
    }, '考试须知：' +
      '（1）进入考试后请勿退出考试界面，若推出则您的作答情况将不会被保存。\n' +
      '（2）若考试时间到您仍未提交，则系统将为您自动提交。');
  }

  isAnswerCompleted(examId: number) {
    // @ts-ignore
    this.AnswerStatusesOfExams.forEach(item => {
      if (item.exam?.id === examId && item.answerStatuses !== undefined) {
        this.isAnswerCompletedKey = (item.answerStatuses?.length > 0);
      }
    });
  }
}

class AnswerStatusOfExam {
  exam: Exam | undefined
  answerStatuses: AnswerStatus[] | undefined
}
