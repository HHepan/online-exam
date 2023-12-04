import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-set-question',
  templateUrl: './set-question.component.html',
  styleUrls: ['./set-question.component.css']
})
export class SetQuestionComponent {
  formGroup = new FormGroup({
    quesType: new FormControl('', [Validators.required]),
    quesStem: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required])
  });
}
