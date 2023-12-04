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
    const teacher = this.formGroup.value as Teacher;
    this.teacherService.save(teacher).subscribe(res => {
      this.commonService.success(() => {
        this.onClose();
      }, '新增成功');
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }
}
