import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-thread-card',
  styleUrls: ['./thread-card.component.css'],
  template:
  `
    <md-grid-tile-header>
      <span>By {{thread.name}} - Replies({{thread.replies}})</span>
    </md-grid-tile-header>
    <img [src]="thread.imageUrl">
    <md-grid-tile-footer>
      <span [innerHtml]="message"></span>
    </md-grid-tile-footer>
  `
})
export class ThreadCardComponent implements OnInit {
  @Input() thread;

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit() {
  }

  get message() {
    return this.sanitize.sanitize(SecurityContext.HTML, this.thread.message);
  }

}
