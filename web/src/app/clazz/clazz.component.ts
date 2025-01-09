import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Page} from "../common/page";
import {environment} from "../../environments/environment";
import {CommonService} from "../../service/common.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClazzService} from "../../service/clazz.service";
import {Clazz} from "../../entity/clazz";
import {SubjectsService} from "../../service/subjects.service";

@Component({
  selector: 'app-clazz',
  templateUrl: './clazz.component.html',
  styleUrls: ['./clazz.component.css']
})
export class ClazzComponent implements OnInit{
  queryForm = new FormGroup({
    name: new FormControl()
  });

  pageData = new Page<Clazz>();

  keys = {
    page: 'page',
    size: 'size',
    name: 'name'
  };

  param = {
    page: 0,
    size: environment.size,
    name: '',
    phone: '',
  };


  constructor(private commonService: CommonService,
              private route: ActivatedRoute,
              private clazzService: ClazzService,
              private subjectsService: SubjectsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.clazzService.page(this.param).subscribe(data => {
      this.pageData = data;
    });
    this.clazzService.select(ClazzService.pageData).subscribe(data => {
      this.pageData = data;
    });
    const route = this.router.url;
    this.subjectsService.sentRootMessage(route);
  }

  /**
   * 点击分页
   * @param page 当前页
   */
  onPageChange(page: number): void {
    this.param.page = page;
    this.reload();
  }

  /**
   * 点击改变每页大小
   * @param size 每页大小
   */
  onSizeChange(size: number): void {
    this.param.size = size;
    this.reload();
  }

  /**
   * 查询
   */
  reload(): void {
    this.clazzService.page(this.param);
  }

  /**
   * 查询
   * */
  onQuery() {
    this.param.name = this.queryForm.get(this.keys.name)?.value;
    this.reload();
  }


  onDelete(clazz: Clazz) {
    const description = clazz.name;
    this.commonService.confirm(() => {
      this.clazzService.deleteById(clazz.id).subscribe({
          next: () => {
            this.commonService.success(() => {
            }, '删除成功');
          },
          error: () => {
            this.commonService.error(() => {
            }, '删除失败');
          }
        }
      );
    }, '即将删除' + description);
  }
}
