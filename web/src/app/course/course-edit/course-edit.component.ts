import { Component } from '@angular/core';
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent {
  constructor(private commonService: CommonService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }
}
