import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Clazz} from "../../../entity/clazz";
import {ClazzService} from "../../../service/clazz.service";

@Component({
  selector: 'app-clazz-select',
  templateUrl: './clazz-select.component.html',
  styleUrls: ['./clazz-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ClazzSelectComponent)
    }
  ]

})
export class ClazzSelectComponent implements OnInit, ControlValueAccessor  {
  /**
   * 所有班级
   */
  allClazz = new Array<Clazz>();
  clazzSelected = new FormControl(null);

  /**
   * 是否显示 请选择
   */
  isShowPleaseSelect = true;

  @Input()
  set showAllClazz(isShowAllClazz: boolean) {
    this.isShowPleaseSelect = isShowAllClazz;
  }

  constructor(private clazzService: ClazzService) {
  }

  ngOnInit(): void {
    this.clazzService.getAll().subscribe(allClazz => {
      this.allClazz = allClazz;
    });

  }

  /**
   * 子组件需要向父组件弹值时，直接调参数中的fn方法
   * 相当于@Ouput()
   * @param fn 此类型取决于当前组件的弹出值类型，当前弹出为clazzId number
   */
  registerOnChange(fn: any): void {
    this.clazzSelected.valueChanges.subscribe(data => {
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
    this.clazzSelected.setValue(obj);
  }
}
