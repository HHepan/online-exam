import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {SubjectsService} from "../../../service/subjects.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = '';

  constructor(private userService: UserService,
              private subjectsService: SubjectsService) { }

  readonly environment = environment;
  currentRoute = '';

  ngOnInit(): void {
    this.userService.getCurrentLoginUser().subscribe(res => {
      if (res.teacher) {
        this.username = res.teacher.name;
      }
      if (res.student) {
        this.username = res.student.name;
      }
      if (!res.student && !res.teacher) {
        this.username = '管理员'
      }
    })
    const subject = this.subjectsService.getSubject();
    subject.subscribe(res => {
      this.currentRoute = this.subjectsService.getRouteMessage();
    });
  }

  logout() {
    this.userService.setCurrentLoginUserNull();
    window.sessionStorage.setItem('login', 'false');
  }
}
