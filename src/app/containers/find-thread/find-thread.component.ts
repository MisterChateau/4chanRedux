import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { GetThreadsAction } from 'app/actions/thread';
import { GetBoardsAction } from 'app/actions/board';
import { State as ThreadState } from 'app/reducers/thread';
import { State as BoardState } from 'app/reducers/board';

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
  boards$: Observable<any[]>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.threads$ = this.store.select((state: ThreadState) => state.threads.list).take(40);
    this.boards$ = this.store.select((state: BoardState) => state.boards.list);

    this.store.dispatch(new GetThreadsAction('int'));
    this.store.dispatch(new GetBoardsAction(undefined));
  }

  onKeyUp(value) {
    this.store.dispatch(new GetThreadsAction(value));
  }

}
