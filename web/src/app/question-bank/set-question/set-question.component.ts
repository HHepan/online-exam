import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Question} from "../../../entity/question";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../service/question.service";
import {CommonService} from "../../../service/common.service";
import {QuestionBankService} from "../../../service/question-bank.service";
import {QuestionBank} from "../../../entity/questionBank";

@Component({
  selector: 'app-set-question',
  templateUrl: './set-question.component.html',
  styleUrls: ['./set-question.component.css']
})
export class SetQuestionComponent implements OnInit{
  formGroup = new FormGroup({
    quesType: new FormControl('choice', [Validators.required]),
    quesStem: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required]),
    A: new FormControl('', [Validators.required]),
    B: new FormControl('', [Validators.required]),
    C: new FormControl('', [Validators.required]),
    D: new FormControl('', [Validators.required])
  });

  keys = {
    quesType: 'quesType',
    quesStem: 'quesStem',
    answer: 'answer',
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
  }

  isAdd: boolean = false;

  questionBankId: number;

  currentQuestionBank: QuestionBank | undefined;
  viewDetailArr: number[] = [];

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private commonService: CommonService,
              private questionBankService: QuestionBankService) {
    this.questionBankId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.questionBankService.getById(this.questionBankId).subscribe(res => {
      this.currentQuestionBank = res;
      console.log('currentQuestionBank', this.currentQuestionBank);
    });
    this.questionBankService.select(QuestionBankService.getById).subscribe(res => {
      this.currentQuestionBank = res;
    });
  }

  onAddQuestion() {
    this.isAdd = true;
  }

  onCancelAdd() {
    this.isAdd = false;
    this.setFormGroupNull(true);
  }

  onSaveQuestion() {
    const quesType = this.formGroup.get(this.keys.quesType)?.value;
    let options = '';
    let answer = '';

    if (quesType === 'choice') {
      options = this.keys.A + '-' + this.formGroup.get(this.keys.A)?.value + ';' +
        this.keys.B + '-' + this.formGroup.get(this.keys.B)?.value + ';' +
        this.keys.C + '-' + this.formGroup.get(this.keys.C)?.value + ';' +
        this.keys.D + '-' + this.formGroup.get(this.keys.D)?.value;
      const answerKey = this.formGroup.get(this.keys.answer)?.value;
      answer = this.formGroup.get(answerKey)?.value;
    } else if (quesType === 'blank') {
      options = '';
      answer = this.formGroup.get(this.keys.answer)?.value;
    }

    const question = {
      stem: this.formGroup.get(this.keys.quesStem)?.value,
      options,
      answer,
      questionBank: {
        id: this.questionBankId
      }
    } as Question;

    this.questionService.save(question).subscribe(res => {
      this.commonService.success(() => {
      }, '新增成功');
      this.onCancelAdd();
      this.ngOnInit();
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }

  changeQuesType() {
    this.setFormGroupNull(false);
  }

  setFormGroupNull(isCancel: boolean) {
    this.formGroup.get(this.keys.A)?.setValue(null);
    this.formGroup.get(this.keys.B)?.setValue(null);
    this.formGroup.get(this.keys.C)?.setValue(null);
    this.formGroup.get(this.keys.D)?.setValue(null);
    this.formGroup.get(this.keys.answer)?.setValue(null);
    if (isCancel) {
      this.formGroup.get(this.keys.quesStem)?.setValue(null);
    }
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

  viewDetail(id: number) {
    this.viewDetailArr.push(id);
  }

  isShowQuestionDetail(id: number): boolean {
    if (this.viewDetailArr.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  cancelViewDetail(id: number) {
    console.log('before', this.viewDetailArr);
    this.viewDetailArr.splice(this.viewDetailArr.indexOf(id), 1);
    console.log('after', this.viewDetailArr);

  }

  onDelete(question: Question) {
    const description = question.stem;
    this.commonService.confirm(() => {
      this.questionService.deleteById(question.id).subscribe({
          next: () => {
            this.commonService.success(() => {
            }, '删除成功');
            this.ngOnInit();
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
