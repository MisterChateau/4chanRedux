import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { GetThreadsAction } from 'app/actions/thread';
import { State as ThreadState } from 'app/reducers/thread';

@Component({
  selector: 'app-find-thread',
  styleUrls: ['./find-thread.component.css'],
  template: `
      <app-threads-list [threads]="threads$ | async"></app-threads-list>
    `
})
export class FindThreadComponent implements OnInit {
  threads$: Observable<any[]>;

  constructor(private store: Store<any>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.threads$ = this.store.select((state: ThreadState) => state.threads.list).take(40);

    this.route.params
      .subscribe((params: Params) => this.store.dispatch(new GetThreadsAction(params['board'])));
  }
}
