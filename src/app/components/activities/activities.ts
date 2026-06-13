import { Component, inject, OnInit} from '@angular/core';
import { List } from '../list/list';
import { Details } from '../details/details';
import { Filter } from '../filter/filter';
import { Activityeventbusservice } from '../../shared/services/activityeventbusservice';
import { Activity } from '../../shared/model/activity';

@Component({
  selector: 'app-activities',
  imports: [List, Details, Filter],
  templateUrl: './activities.html',
  styleUrl: './activities.css',
})
export class Activities implements OnInit{
  activitybus = inject(Activityeventbusservice);
  selectedactivity : Activity | null = null;

  ngOnInit(){
    this.activitybus.event$
    .subscribe(activity => this.selectedactivity = activity);
  }

}
