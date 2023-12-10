import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ExamService} from "../../../service/exam.service";
import {CommonService} from "../../../service/common.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnswerStatusService} from "../../../service/answer-status.service";
import {Student} from "../../../entity/student";
import {AnswerStatus} from "../../../entity/answerStatus";
import {Exam} from "../../../entity/exam";

@Component({
  selector: 'app-stu-view-exam',
  templateUrl: './stu-view-exam.component.html',
  styleUrls: ['./stu-view-exam.component.css']
})
export class StuViewExamComponent implements OnInit {
  viewDetailArr: number[] = [];

  exam: Exam | undefined;

  examId: number | undefined;

  student: Student | undefined;

  AnswerStatusesOfCurrentExam: AnswerStatus[] = [];
  constructor(private userService: UserService,
              private examService: ExamService,
              private commonService: CommonService,
              private router: Router,
              private answerStatusService: AnswerStatusService,
              private route: ActivatedRoute,) {
    this.examId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log('StuViewExamComponent', this.AnswerStatusesOfCurrentExam);
    this.userService.getCurrentLoginUser().subscribe(user => {
      this.student = user.student;
      this.answerStatusService.getAllByExamIdAndStudentId(this.examId ? this.examId : 0, user.student.id)
        .subscribe(res => {
          console.log('StuViewExamComponent', res);
          this.exam = res[0].exam;
          this.AnswerStatusesOfCurrentExam = res;
          console.log('StuViewExamComponent', this.AnswerStatusesOfCurrentExam);
        });
    });
  }

  isShowQuestionDetail(id: number): boolean {
    if (this.viewDetailArr.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  viewDetail(id: number) {
    this.viewDetailArr.push(id);
  }

  getOptionsArr(inputString: string): string[] {
    let outputArray: string[];
    if (inputString) {
      const pairs = inputString.split(';');
      outputArray = pairs.map(pair => {
        const [key, value] = pair.split('-');
        return `${key}.${value}`;
      });
    } else {
      outputArray = [];
    }
    return outputArray;
  }

  getAnswer(options: string, answer: string) {
    let result = ''
    if (options === '') {
      result = answer;
    } else {
      const outputArray = this.getOptionsArr(options);
      outputArray.forEach(item => {
        const outputString = this.extractSubstring(item);
        if (outputString === answer) {
          result = item;
        }
      });
    }
    return result;
  }

  extractSubstring(inputString: string): string {
    let outputString = '';
    const parts = inputString.split('.');
    if (parts.length === 2) {
      outputString = parts[1];
    } else {
      // Handle invalid input
      outputString = '';
    }
    return outputString;
  }

  cancelViewDetail(id: number) {
    this.viewDetailArr.splice(this.viewDetailArr.indexOf(id), 1);
  }

}
