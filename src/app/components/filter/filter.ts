import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Searchtermeventbusservice } from '../../shared/services/searchtermeventbusservice';
import { Showonlybigeventbusservice } from '../../shared/services/showonlybigeventbusservice';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  searchterm! : string;
  showonlybigactivities : boolean = false;

  searchtermbus = inject(Searchtermeventbusservice);
  showonlybigbus = inject(Showonlybigeventbusservice);

  constructor(){
    this.searchterm = '';
  }

  filteractivities(){
    this.searchtermbus.emit(this.searchterm);
  }

  resetsearchterm(){
    this.searchterm = '';
    this.filteractivities();
  }

  changeShowOnlyBigActivities(){
    this.showonlybigbus.emit(this.showonlybigactivities);
  }
}
