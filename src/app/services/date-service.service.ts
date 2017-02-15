import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class DateServiceService {

  constructor() {
    this.currentDate = Observable.interval(1000).map(x => new Date()).share();
  }
  currentDate

}
