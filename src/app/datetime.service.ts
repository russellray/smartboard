import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class DatetimeService {

  constructor(private moment) { }
  
  getTime(): any {
    console.log('here!!!!!!!!!!!!!!!!!!!!!!');
    //return moment().format('MMMM Do YYYY, h:mm:ss a')
  }
}