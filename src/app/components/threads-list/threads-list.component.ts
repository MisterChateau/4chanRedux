import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State, threadsReducer } from 'app/reducers/thread';

@Component({
  selector: 'app-threads-list',
  styleUrls: ['./threads-list.component.css'],
  template:
    `
      <md-grid-list cols="4" rowHeight="4:3" gutter="10px">
        <md-grid-tile *ngFor="let thread of threads">
          <app-thread-card [thread]="thread"></app-thread-card>
        </md-grid-tile>
      </md-grid-list>
    `
})
export class ThreadsListComponent implements OnInit {
  @Input() threads;

  constructor(private store: Store<State>) {}

  ngOnInit() {
  }
}
