import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State, threadsReducer } from 'app/reducers/thread';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {
  threads$: Observable<any[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.threads$ = this.store.select('threads')
  }

}
