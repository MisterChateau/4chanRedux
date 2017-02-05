import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-thread',
  templateUrl: './find-thread.component.html',
  styleUrls: ['./find-thread.component.css']
})
export class FindThreadComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  onKeyUp(value) {
    console.log(value);
  }

}
