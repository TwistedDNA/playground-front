import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-day-thumbnail',
  templateUrl: './day-thumbnail.component.html',
  styleUrls: ['./day-thumbnail.component.css']
})
export class DayThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() day:any

}
