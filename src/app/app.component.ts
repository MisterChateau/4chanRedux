import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { GetBoardsAction } from 'app/actions/board';
import { State as BoardState } from 'app/reducers/board';

@Component({
  selector: 'app-root',
  template: `
      <md-sidenav-container>
        <md-sidenav #sidenav mode="push">
          <app-board-list [boards]="boards$ | async"></app-board-list>
        </md-sidenav>
        <i class="sidenav-toggle fa fa-plus-circle" aria-hidden="true" (click)="sidenav.toggle()"></i>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </md-sidenav-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  boards$: Observable<any[]>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.boards$ = this.store.select((state: BoardState) => state.boards.list);
    this.store.dispatch(new GetBoardsAction());
    this.sidenav.toggle();
  }
}
