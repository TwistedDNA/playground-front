import {Component, OnInit} from '@angular/core';
import {DateServiceService} from "../services/date-service.service";

@Component({
             selector: 'app-calendar-grid',
             providers: [DateServiceService],
             templateUrl: './calendar-grid.component.html',
             styleUrls: ['./calendar-grid.component.css']
           })
export class CalendarGridComponent implements OnInit {
  currentDate;

  constructor(dateService: DateServiceService) {
    this.currentDate = dateService.currentDate;
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
