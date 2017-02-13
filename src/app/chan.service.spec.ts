/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChanService } from './chan.service';

describe('ChanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChanService]
    });
  });

  it('should ...', inject([ChanService], (service: ChanService) => {
    expect(service).toBeTruthy();
  }));
});
