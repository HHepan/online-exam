import { Component } from '@angular/core';
import {CommonService} from "../../../service/common.service";

@Component({
  selector: 'app-question-bank-add',
  templateUrl: './question-bank-add.component.html',
  styleUrls: ['./question-bank-add.component.css']
})
export class QuestionBankAddComponent {
  constructor(private commonService: CommonService) {
  }

  /**
   * 关闭窗口
   */
  onClose() {
    this.commonService.back();
  }
}
