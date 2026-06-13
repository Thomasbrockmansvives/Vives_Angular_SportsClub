import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Searchtermeventbusservice {
  searchtermbus = new Subject<string>();
    event$ = this.searchtermbus.asObservable();
  
    emit(event: string){
      this.searchtermbus.next(event);
    }
}
