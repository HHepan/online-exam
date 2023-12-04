import { Component } from '@angular/core';
import {CommonService} from "../../../service/common.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../../entity/teacher";
import {CourseService} from "../../../service/course.service";
import {Course} from "../../../entity/course";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private commonService: CommonService,
              private courseService: CourseService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }

  onSubmit() {
    const course = this.formGroup.value as Course;
    this.courseService.save(course).subscribe(res => {
      this.commonService.success(() => {
        this.onClose();
      }, '新增成功');
    }, error => {
      this.commonService.error(() => {
      }, '新增失败');
    });
  }
}
