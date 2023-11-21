import { Component } from '@angular/core';
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-question-bank-edit',
  templateUrl: './question-bank-edit.component.html',
  styleUrls: ['./question-bank-edit.component.css']
})
export class QuestionBankEditComponent {
  constructor(private commonService: CommonService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }
}
