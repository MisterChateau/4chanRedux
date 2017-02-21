import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-thread-card',
  styleUrls: ['./thread-card.component.css'],
  template:
  `
    <div>
      <div>By {{thread.name}} replies({{thread.replies}})</div>
      <img src={{thread.imageThumbnailUrl}}>
      <p>{{message}}</p>
    </div>
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
