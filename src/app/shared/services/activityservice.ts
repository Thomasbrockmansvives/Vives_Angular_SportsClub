import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, map, of, catchError } from 'rxjs';
import { Activity } from '../model/activity';

@Injectable({
  providedIn: 'root',
})
export class Activityservice {
  http = inject(HttpClient);
  private url = 'data/lessen.json';

  getActivities() : Observable<Activity[]>  {
    return this.http.get<Activity[]>(this.url)
      .pipe(
        tap(data => console.log('Opgehaald in service via http: ', data)),
        catchError(err => { console.error(err); return of([]); })
      );
  }

  getActivitiesSorted() : Observable<Activity[]>  {
    return this.http.get<Activity[]>(this.url)
      .pipe(
        map(data => [...data].sort((a,b) => a.name.localeCompare(b.name))),
        tap(data => console.log('Opgehaald sorted in service via http: ', data)),
        catchError(err => { console.error(err); return of([]); })
      );
  }

  getBigActivities() : Observable<Activity[]>  {
    return this.http.get<Activity[]>(this.url)
      .pipe(
        map(data => data.filter(a => a.maxParticipants >= 20)),
        tap(data => console.log('Opgehaald only big in service via http: ', data)),
        catchError(err => { console.error(err); return of([]); })
      );
  }


}
