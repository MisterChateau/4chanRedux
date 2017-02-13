/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindThreadComponent } from './find-thread.component';

describe('FindThreadComponent', () => {
  let component: FindThreadComponent;
  let fixture: ComponentFixture<FindThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
