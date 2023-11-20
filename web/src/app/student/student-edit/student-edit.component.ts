import { Component } from '@angular/core';
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  constructor(private commonService: CommonService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }
}
