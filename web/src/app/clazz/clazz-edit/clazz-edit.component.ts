import { Component } from '@angular/core';
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-clazz-edit',
  templateUrl: './clazz-edit.component.html',
  styleUrls: ['./clazz-edit.component.css']
})
export class ClazzEditComponent {
  constructor(private commonService: CommonService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }
}
