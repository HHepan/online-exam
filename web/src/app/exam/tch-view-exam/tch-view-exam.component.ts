import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnswerStatusService} from "../../../service/answer-status.service";
import {Exam} from "../../../entity/exam";
import {AnswerStatus} from "../../../entity/answerStatus";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../../service/common.service";

@Component({
  selector: 'app-tch-view-exam',
  templateUrl: './tch-view-exam.component.html',
  styleUrls: ['./tch-view-exam.component.css']
})
export class TchViewExamComponent implements OnInit {
  formGroup = new FormGroup({
    score: new FormControl('', [Validators.required]),
  });

  keys = {
    score: 'score'
  }

  viewDetailArr: number[] = [];

  exam: Exam | undefined;

  AnswerStatusesOfCurrentExam: AnswerStatus[] = [];

  examId: number;

  studentId: number;
  constructor(private answerStatusService: AnswerStatusService,
              private route: ActivatedRoute,
              private commonService: CommonService) {
    this.examId = +this.route.snapshot.params['examId'];
    this.studentId = +this.route.snapshot.params['studentId'];
  }

  ngOnInit() {
    this.answerStatusService.getAllByExamIdAndStudentId(this.examId ? this.examId : 0, this.studentId)
      .subscribe(res => {
        if (res.length > 0) {
          this.exam = res[0].exam;
          this.AnswerStatusesOfCurrentExam = res;
        }
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

  onScoreSave(answerStatusId: number) {
    const score = this.formGroup.get(this.keys.score)?.value;
    this.answerStatusService.saveScoreById(answerStatusId, score).subscribe(res => {
      this.commonService.success(() => {
        this.ngOnInit();
      }, '新增成功');
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }
}
