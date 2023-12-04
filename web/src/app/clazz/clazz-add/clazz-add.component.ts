import { Component } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../service/course.service";
import {Course} from "../../../entity/course";
import {ClazzService} from "../../../service/clazz.service";
import {Clazz} from "../../../entity/clazz";

@Component({
  selector: 'app-clazz-add',
  templateUrl: './clazz-add.component.html',
  styleUrls: ['./clazz-add.component.css']
})
export class ClazzAddComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private commonService: CommonService,
              private clazzService: ClazzService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }

  onSubmit() {
    const clazz = this.formGroup.value as Clazz;
    this.clazzService.save(clazz).subscribe(res => {
      this.commonService.success(() => {
        this.onClose();
      }, '新增成功');
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }
}
