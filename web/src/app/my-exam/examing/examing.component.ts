import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExamService} from "../../../service/exam.service";
import {Exam} from "../../../entity/exam";
import {FormControl, FormGroup, Validators, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";
import {Question} from "../../../entity/question";
import {CommonService} from "../../../service/common.service";
import {AnswerStatus} from "../../../entity/answerStatus";
import {Student} from "../../../entity/student";
import {UserService} from "../../../service/user.service";
import {AnswerStatusService} from "../../../service/answer-status.service";

@Component({
  selector: 'app-examing',
  templateUrl: './examing.component.html',
  styleUrls: ['./examing.component.css']
})
export class ExamingComponent implements OnInit {
  formGroup = new FormGroup({});

  examId: number | undefined;

  exam: Exam | undefined;

  currentMoment: number | undefined;

  constructor(private route: ActivatedRoute,
              private examService:ExamService,
              private commonService:  CommonService,
              private router: Router,
              private userService: UserService,
              private answerStatusService: AnswerStatusService) {
    this.examId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.examService.getById(this.examId ? + this.examId : 0).subscribe(res => {
      this.exam = res;
      console.log('exam', this.exam);
      this.initFormGroup(this.exam.questions);

      this.currentMoment = new Date().getTime();

      setTimeout(() => {
        this.commonService.confirm(() => {}, '注意：距离考试结束还有5分钟，答题后请及时提交');
      }, this.exam.endTime - this.currentMoment - 5 *  60 * 1000);

      setTimeout(() => {
        this.onSave();
        this.commonService.success(() => {
          this.examService.refreshState();
          this.router.navigateByUrl('my-exam').then();
        }, '考试结束时间到，已为您自动提交');
      }, this.exam.endTime - this.currentMoment);
    });
  }

  initFormGroup(questions: Question[]) {
    questions.forEach(question => {
      this.formGroup.addControl(String(question.id), new FormControl('', [Validators.required]));
    });
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

  onSave() {
    const points = this.exam ? this.exam?.score / this.exam?.questionCount : 0;
    this.commonService.confirm(() => {
      this.userService.getCurrentLoginUser().subscribe(user => {
        let i = 0;
        this.exam?.questions.forEach(ques => {
          let score = -1;
          if (ques.options !== '') {
            if (ques.answer === this.getStuAnswer(this.formGroup.get(ques.id.toString())?.value, ques.options)) {
              score = points;
            } else {
              score = 0;
            }
          }
          const answerStatus = {
            student: {
              id: user.student.id
            },
            exam: {
              id: this.exam?.id
            },
            question: {
              id: ques.id
            },
            stuAnswer: this.getStuAnswer(this.formGroup.get(ques.id.toString())?.value, ques.options),
            correctAnswer: ques.answer,
            points,
            score
          } as AnswerStatus;
          this.answerStatusService.save(answerStatus).subscribe(res => {
            i++;
            if (i === this.exam?.questions.length) {
              this.commonService.success(() => {
                this.router.navigateByUrl('my-exam').then();
              }, '交卷成功');
            }
          }, () => {
            this.commonService.error(() => {}, '交卷失败');
          });
        });
      });
    }, '即将交卷');
  }

  getStuAnswer(value: ɵGetProperty<ɵTypedOrUntyped<{}, ɵFormGroupRawValue<{}>, any>, string> | undefined, options: string) {
    if (options === '') {
      return value;
    } else  {
      const key: string = value?.toString();
      return this.getValueFromKeyPair(key, options);
    }
  }

  getValueFromKeyPair(key: string, keyValuePairString: string): string | null {
    // 将键值对字符串分割成数组
    const pairs = keyValuePairString.split(';');

    // 遍历数组查找匹配的键值对
    for (const pair of pairs) {
      const [pairKey, pairValue] = pair.split('-');

      // 如果找到匹配的键，则返回对应的值
      if (pairKey.trim() === key.trim()) {
        return pairValue.trim();
      }
    }

    // 如果没有找到匹配的键，则返回null或者你希望的默认值
    return null;
  }
}
