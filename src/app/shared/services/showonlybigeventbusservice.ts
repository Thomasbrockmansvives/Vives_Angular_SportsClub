import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Showonlybigeventbusservice {
  showonlybigbus = new Subject<boolean>();
      event$ = this.showonlybigbus.asObservable();
    
      emit(event: boolean){
        this.showonlybigbus.next(event);
      }
}
