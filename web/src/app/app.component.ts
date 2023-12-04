import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  constructor(private router: Router) {
    const isLogin = window.sessionStorage.getItem('login');
    if (isLogin !== 'true') {
      this.router.navigateByUrl('login').then();
    }
  }
}
