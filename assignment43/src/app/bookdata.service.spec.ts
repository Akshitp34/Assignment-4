import { TestBed, inject } from '@angular/core/testing';

import { BookdataService } from './bookdata.service';

describe('BookdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookdataService]
    });
  });

  it('should be created', inject([BookdataService], (service: BookdataService) => {
    expect(service).toBeTruthy();
  }));
});
