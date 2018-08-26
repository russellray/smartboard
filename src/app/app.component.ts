import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {startWith, switchMap} from "rxjs/operators";
import {DatetimeService} from './datetime.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'smartboard';
  current_time: any;
  
  getTime(): any {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  //constructor (private timeData: DatetimeService) { }

  //ngOnInit() {
  //  this.current_time = this.getTime();
  //}

  ngOnInit() {
    interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.getTime())
      )
      .subscribe(
        this.current_time = this.getTime()
      );
  }
} 