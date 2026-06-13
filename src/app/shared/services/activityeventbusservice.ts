import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Activity } from '../model/activity';

@Injectable({
  providedIn: 'root',
})
export class Activityeventbusservice {
  activitybus = new BehaviorSubject<Activity | null>(null);
  event$ = this.activitybus.asObservable();

  emit(event: Activity){
    this.activitybus.next(event);
  }
}
