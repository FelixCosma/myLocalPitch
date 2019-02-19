import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IPitch } from '../../shared/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-pitches-grid',
  templateUrl: './pitches-grid.component.html',
  styleUrls: ['./pitches-grid.component.css'],
  // When using OnPush detectors, then the framework will check an OnPush
  // component when any of its input properties changes, when it fires
  // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchesGridComponent implements OnInit {

  @Input() pitches: IPitch[] = [];

  constructor() { }

  getTimeDifference(start, end) {
    end = moment(end);
    start = moment(start);
    return moment.duration(end.diff(start)).asMinutes() + ' minutes';
  }

  ngOnInit() {
  }
}
