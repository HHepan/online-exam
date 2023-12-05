import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Exam} from "../../../entity/exam";
import {User} from "../../../entity/user";
import {Clazz} from "../../../entity/clazz";
import {UserService} from "../../../service/user.service";
import {ExamService} from "../../../service/exam.service";

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})
export class ExamAddComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    questionCount: new FormControl('', [Validators.required]),
    score: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    startMoment: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    endMoment: new FormControl('', [Validators.required]),
    clazzIds: new FormControl('', [Validators.required]),
  });

  keys = {
    name: 'name',
    questionCount: 'questionCount',
    score: 'score',
    startDate: 'startDate',
    startMoment: 'startMoment',
    endDate: 'endDate',
    endMoment: 'endMoment',
    clazzIds: 'clazzIds',
  };

  currenLoginUser: User | undefined;

  constructor(private commonService: CommonService,
              private userService: UserService,
              private examService: ExamService) {
  }

  ngOnInit() {
    this.userService.getCurrentLoginUser().subscribe(user => {
      this.currenLoginUser = user;
    });
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }

  onSubmit() {
    const startTime = this.commonService.getTimeStampFromDateString(
      this.formGroup.get(this.keys.startDate)?.value + 'T' +
      this.formGroup.get(this.keys.startMoment)?.value
    );
    const endTime = this.commonService.getTimeStampFromDateString(
      this.formGroup.get(this.keys.endDate)?.value + 'T' +
      this.formGroup.get(this.keys.endMoment)?.value
    );
    let clazzes = [] as Clazz[];
    const clazz = {
      id: this.formGroup.get(this.keys.clazzIds)?.value
    } as Clazz;
    clazzes.push(clazz);
    const exam = {
      name: this.formGroup.get(this.keys.name)?.value,
      questionCount: this.formGroup.get(this.keys.questionCount)?.value,
      score: this.formGroup.get(this.keys.score)?.value,
      startTime,
      endTime,
      user: {
        id: this.currenLoginUser?.id
      },
      clazzes
    } as Exam;
    console.log('save exam', exam);
    this.examService.save(exam).subscribe(res => {
      this.commonService.success(() => {
        this.onClose();
      }, '新增成功');
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }
}
