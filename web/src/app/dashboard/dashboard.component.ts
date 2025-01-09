import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../../service/subjects.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private subjectsService: SubjectsService,
              private router: Router) { }

  ngOnInit(): void {
    const route = this.router.url;
    this.subjectsService.sentRootMessage(route);
  }

}
