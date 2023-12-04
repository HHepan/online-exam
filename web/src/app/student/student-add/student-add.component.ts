import { Component } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../entity/student";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sno: new FormControl('', [Validators.required]),
    clazzId: new FormControl('', [Validators.required])
  });

  keys = {
    name: 'name',
    sno: 'sno',
    clazzId: 'clazzId'
  }
  constructor(private commonService: CommonService,
              private studentService: StudentService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }

  onSubmit() {
    const student = {
      name: this.formGroup.get(this.keys.name)?.value,
      sno: this.formGroup.get(this.keys.sno)?.value,
      clazz: {
        id: this.formGroup.get(this.keys.clazzId)?.value
      }
    } as Student;
    this.studentService.save(student).subscribe(res => {
      this.commonService.success(() => {
        this.onClose();
      }, '新增成功');
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }
}
