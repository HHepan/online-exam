import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  subject = new Subject();
  eventKeys = {
    routeMessage: '',
  }

  getSubject() {
    return this.subject;
  }

  getRouteMessage() {
    return this.eventKeys.routeMessage;
  }

  sentRootMessage(route: string) {
    this.eventKeys.routeMessage = route;
    this.subject.next(this.eventKeys.routeMessage);
  }
}
