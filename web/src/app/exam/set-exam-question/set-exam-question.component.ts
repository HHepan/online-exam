import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionBankService} from "../../../service/question-bank.service";
import {Question} from "../../../entity/question";
import {ActivatedRoute} from "@angular/router";
import {ExamService} from "../../../service/exam.service";
import {Exam} from "../../../entity/exam";

@Component({
  selector: 'app-set-exam-question',
  templateUrl: './set-exam-question.component.html',
  styleUrls: ['./set-exam-question.component.css']
})
export class SetExamQuestionComponent implements OnInit {
  formGroup = new FormGroup({
    questionBankId: new FormControl('', [Validators.required])
  });

  keys = {
    questionBankId: 'questionBankId'
  };

  examId: number | undefined;

  currentExam: Exam | undefined;

  currentQuestions: Question[] = [];

  viewDetailArr: number[] = [];

  constructor(private questionBankService: QuestionBankService,
              private examService: ExamService,
              private route: ActivatedRoute) {
    this.examId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.examService.getById(this.examId ? +this.examId : -1).subscribe(exam => {
      this.currentExam = exam;
    });
  }

  onRandomQuestions() {
    this.currentQuestions = [];
    this.questionBankService.getById(+this.formGroup.get(this.keys.questionBankId)?.value)
      .subscribe(questionBank => {
        this.setCurrentQuestions(questionBank.questions);
      });
  }

  setCurrentQuestions(questions: Question[]) {
    const randomArr = this.generateRandomNumbers(
      this.currentExam ? +this.currentExam?.questionCount : 0
      , questions.length);
    randomArr.forEach(index => {
      this.currentQuestions.push(questions[index]);
    });
  }

  generateRandomNumbers(count: number, max: number): number[] {
    const result: number[] = [];
    const min = 0;
    const range = max - min;

    while (result.length < count) {
      const randomNumber = Math.floor(Math.random() * range) + min;
      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }

    return result;
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

  cancelViewDetail(id: number) {
    this.viewDetailArr.splice(this.viewDetailArr.indexOf(id), 1);
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

  onCancelCurrentQuestions() {
    this.currentQuestions = [];
  }
}
