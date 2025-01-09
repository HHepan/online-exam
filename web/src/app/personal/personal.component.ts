import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../entity/user";
import {SubjectsService} from "../../service/subjects.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  currentLoginUser: User | undefined;
  constructor(private userService: UserService,
              private subjectsService: SubjectsService,
              private router: Router) {}
  ngOnInit() {
    this.userService.getCurrentLoginUser().subscribe(res => {
      this.currentLoginUser = res;
      console.log('personal', this.currentLoginUser);
    })
    const route = this.router.url;
    this.subjectsService.sentRootMessage(route);
  }
}
