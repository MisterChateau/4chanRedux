import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GetThreadsAction } from 'app/actions/thread';
import { State } from 'app/reducers/thread'

@Component({
  selector: 'app-find-thread',
  templateUrl: './find-thread.component.html',
  styleUrls: ['./find-thread.component.css']
})
export class FindThreadComponent implements OnInit {
  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  onKeyUp(value) {
      this.store.dispatch(new GetThreadsAction(value));
  }

}
