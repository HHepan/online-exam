import {Component, forwardRef, Input} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Course} from "../../../entity/course";
import {ClazzService} from "../../../service/clazz.service";
import {CourseService} from "../../../service/course.service";

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CourseSelectComponent)
    }
  ]
})
export class CourseSelectComponent {
  /**
   * 所有课程
   */
  allCourse = new Array<Course>();
  courseSelected = new FormControl(null);

  /**
   * 是否显示 请选择
   */
  isShowPleaseSelect = true;

  @Input()
  set showAllCourse(isShowAllCourse: boolean) {
    this.isShowPleaseSelect = isShowAllCourse;
  }

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(allCourse => {
      this.allCourse = allCourse;
    });
  }

  /**
   * 子组件需要向父组件弹值时，直接调参数中的fn方法
   * 相当于@Ouput()
   * @param fn 此类型取决于当前组件的弹出值类型，当前弹出为clazzId number
   */
  registerOnChange(fn: any): void {
    this.courseSelected.valueChanges.subscribe(data => {
      fn(data);
    });
  }


  registerOnTouched(fn: any): void {
    console.warn('registerOnTouched not implemented');
  }

  /**
   * 将FormControl中的值通过此方法写入
   * FormControl的值每变换一次，该方法被重新执行一次
   * 相当于@Input set XXX
   * @param obj 此类型取决于当前组件的接收类型，当前接收为clazzId number
   */
  writeValue(obj: any): void {
    this.courseSelected.setValue(obj);
  }
}
