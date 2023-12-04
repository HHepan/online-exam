import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../entity/user";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  currentLoginUser: User | undefined;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getCurrentLoginUser().subscribe(res => {
      this.currentLoginUser = res;
      console.log('personal', this.currentLoginUser);
    })
  }
}
