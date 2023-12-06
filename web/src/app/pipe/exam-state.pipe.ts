import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examState'
})
export class ExamStatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value === undefined || value === null) {
      return '-';
    }
    if (value === 0) {
      return '未发布';
    } else if (value === 1) {
      return '未开始';
    } else if (value === 2) {
      return '考试中';
    } else if (value === 3) {
      return '已结束';
    }
    return  '-';
  }

}
