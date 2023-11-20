import { Component } from '@angular/core';
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent {
  constructor(private commonService: CommonService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }
}
