import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.css']
})
export class ThreadCardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Input() thread
}
