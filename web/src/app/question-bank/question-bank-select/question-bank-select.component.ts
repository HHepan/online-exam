import {Component, forwardRef, Input} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {QuestionBank} from "../../../entity/questionBank";
import {QuestionBankService} from "../../../service/question-bank.service";

@Component({
  selector: 'app-question-bank-select',
  templateUrl: './question-bank-select.component.html',
  styleUrls: ['./question-bank-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => QuestionBankSelectComponent)
    }
  ]
})
export class QuestionBankSelectComponent {
  /**
   * 所有题库
   */
  allQuestionBank = new Array<QuestionBank>();
  questionBankSelected = new FormControl(null);

  /**
   * 是否显示 请选择
   */
  isShowPleaseSelect = true;

  @Input()
  set showAllCourse(isShowAllCourse: boolean) {
    this.isShowPleaseSelect = isShowAllCourse;
  }

  constructor(private questionBankService: QuestionBankService) {
  }

  ngOnInit(): void {
    this.questionBankService.getAll().subscribe(allQuestionBank => {
      this.allQuestionBank = allQuestionBank;
    });
  }

  /**
   * 子组件需要向父组件弹值时，直接调参数中的fn方法
   * 相当于@Ouput()
   * @param fn 此类型取决于当前组件的弹出值类型，当前弹出为clazzId number
   */
  registerOnChange(fn: any): void {
    this.questionBankSelected.valueChanges.subscribe(data => {
      fn(data);
    });
  }


  registerOnTouched(fn: any): void {
    console.warn('registerOnTouched not implemented');
  }

  /**
   * 将FormControl中的值通过此方法写入
   * FormControl的值每变换一次，该方法被重新执行一次
   * 相当于@Input set XXX
   * @param obj 此类型取决于当前组件的接收类型，当前接收为clazzId number
   */
  writeValue(obj: any): void {
    this.questionBankSelected.setValue(obj);
  }
}
