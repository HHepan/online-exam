import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from "../../entity/user";
import {UserService} from "../../service/user.service";
import {environment} from "../../environments/environment";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorInfo: string | undefined;

  formGroup = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
    role: new FormControl<number>(-1)
  });

  keys = {
    username: 'username',
    password: 'password',
    role: 'role'
  };

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.formGroup.get(this.keys.username)?.value > 999999) {
      this.formGroup.get(this.keys.role)?.setValue(environment.TEACHER_ROLE);
    } else {
      this.formGroup.get(this.keys.role)?.setValue(environment.STUDENT_ROLE);
    }
    const user = this.formGroup.value as User;

    this.userService.login(user).subscribe(currentLoginUser => {
      if (currentLoginUser !== null) {
        window.sessionStorage.setItem('login', 'true');
        window.sessionStorage.setItem('currentLoginUserId', currentLoginUser.id.toString());
        this.router.navigateByUrl('dashboard').then();
      } else {
        this.errorInfo = '用户名或密码错误，请再次输入';
      }
    });
  }
}
