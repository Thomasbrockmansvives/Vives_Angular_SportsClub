import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  route = inject(Router);

  navigateToActivities() : void {
    this.route.navigateByUrl('activiteiten');
  }
}
