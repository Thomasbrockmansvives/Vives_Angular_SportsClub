import { Component, inject, OnInit } from '@angular/core';
import { Activityeventbusservice } from '../../shared/services/activityeventbusservice';
import { Activity } from '../../shared/model/activity';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit{
  selectedactivity : Activity | null = null;
  
  activitybus = inject(Activityeventbusservice);

  ngOnInit(){
    this.activitybus.event$.subscribe(activity => this.selectedactivity = activity);
  }


}
