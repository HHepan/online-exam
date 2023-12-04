import { Component } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionBank} from "../../../entity/questionBank";
import {QuestionBankService} from "../../../service/question-bank.service";

@Component({
  selector: 'app-question-bank-add',
  templateUrl: './question-bank-add.component.html',
  styleUrls: ['./question-bank-add.component.css']
})
export class QuestionBankAddComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    courseId: new FormControl('', [Validators.required])
  });

  keys = {
    name: 'name',
    courseId: 'courseId'
  }

  constructor(private commonService: CommonService,
              private questionBankService: QuestionBankService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }

  onSubmit() {
    console.log('QuestionBankAddComponent', this.formGroup.value);
    const questionBank = {
      name: this.formGroup.get(this.keys.name)?.value,
      course: {
        id: this.formGroup.get(this.keys.courseId)?.value
      }
    } as QuestionBank;
    this.questionBankService.save(questionBank).subscribe(res => {
      this.commonService.success(() => {
        this.onClose();
      }, '新增成功');
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }
}
