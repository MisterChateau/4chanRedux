import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { GetThreadsAction } from 'app/actions/thread';
import { State } from 'app/reducers/thread';

@Component({
  selector: 'app-find-thread',
  styleUrls: ['./find-thread.component.css'],
  template:
    `<md-toolbar>
        <md-input-container>
          <input md-input placeholder="enter chan" #board (keyup)="onKeyUp(board.value)">
        </md-input-container>
      </md-toolbar>
    <app-threads-list [threads]="threads$ | async"></app-threads-list>`
})
export class FindThreadComponent implements OnInit {
  threads$: Observable<any[]>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.threads$ = this.store.select((state: State) => state.threads.list);
  }

  onKeyUp(value) {
    this.store.dispatch(new GetThreadsAction(value));
  }

}
