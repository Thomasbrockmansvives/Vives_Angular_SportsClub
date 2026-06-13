import { Component, inject, OnInit } from '@angular/core';
import { Observable, tap, map, filter } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Activity } from '../../shared/model/activity';
import { Activityservice } from '../../shared/services/activityservice';
import { Activityeventbusservice } from '../../shared/services/activityeventbusservice';
import { Searchtermeventbusservice } from '../../shared/services/searchtermeventbusservice';
import { Showonlybigeventbusservice } from '../../shared/services/showonlybigeventbusservice';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit{
  activities$! : Observable<Activity[]>;
  showonlybigactivities! : boolean;
  searchterm! : string;
  averageparticipants$! : Observable<number>;
  

  activitiesservice = inject(Activityservice);
  activitybus = inject(Activityeventbusservice);
  searchtermbus = inject(Searchtermeventbusservice);
  showonlybigbus = inject(Showonlybigeventbusservice);

  ngOnInit(){
    this.searchterm = '';
    this.showonlybigactivities = false;

    this.searchtermbus.event$
      .subscribe(term => {
          this.searchterm = term,
          this.updateList()
      });

      this.showonlybigbus.event$
      .subscribe(value => {
        this.showonlybigactivities = value,
        this.updateList()
      });


    
      this.activities$ = this.activitiesservice.getActivitiesSorted()
        .pipe(
          tap(data => console.log('Opgehaald uit service: ', data))
        );

      this.averageparticipants$ = this.activities$.pipe(
      map(data => data.reduce((total, event) => total + event.maxParticipants, 0) / data.length)
    )

  }  

  selectActivity(activity : Activity) : void {
    this.activitybus.emit(activity);
  }

  showAverageParticipants(){
    this.averageparticipants$.subscribe(data => alert('Gemiddeld aantal deelnemers: ' + data))
  }


  updateList(){
    console.log('update aangevraagd.')

    if(this.showonlybigactivities){
      this.activities$ = this.activitiesservice.getBigActivities()
        .pipe(
          map(data => data.filter(activity => activity.name.toLowerCase().includes(this.searchterm.toLocaleLowerCase())))
        )
    }
    else{
      this.activities$ = this.activitiesservice.getActivities()
        .pipe(
          map(data => data.filter(activity => activity.name.toLowerCase().includes(this.searchterm.toLocaleLowerCase())))
        )
    }

    this.averageparticipants$ = this.activities$.pipe(
      map(data => data.reduce((total, event) => total + event.maxParticipants, 0) / data.length)
    )
  }
}
