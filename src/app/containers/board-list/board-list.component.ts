import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-board-list',
  styleUrls: ['./board-list.component.css'],
  template: `
    <div *ngFor="let board of boards" routerLink="thread/{{board.name}}">
      {{ board.title }}
    </div>
  `,
})
export class BoardListComponent implements OnInit {
  @Input() boards: any[];
  constructor() { }

  ngOnInit() {
  }

}
