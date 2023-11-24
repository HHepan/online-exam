import { Component } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../../entity/teacher";
import {TeacherService} from "../../../service/teacher.service";

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });


  constructor(private commonService: CommonService,
              private teacherService: TeacherService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }

  onSubmit() {
    console.log('teacher save c', this.formGroup.value);
    const teacher = this.formGroup.value as Teacher;
    this.teacherService.save(teacher).subscribe(res => {
      console.log('teacher save c res', res);
    });
  }
}
