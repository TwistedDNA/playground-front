import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-calendar-grid',
             templateUrl: './calendar-grid.component.html',
             styleUrls: ['./calendar-grid.component.css']
           })
export class CalendarGridComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  days = [
    {
      date: '2/14/2017',
      plans: 'Nothing to do here'
    },
    {
      date: '3/14/2017',
      plans: 'More to do, great to become'
    },
  ]

}
