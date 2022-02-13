/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeamSortService } from './team-sort.service';

describe('Service: TeamSort', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamSortService]
    });
  });

  it('should ...', inject([TeamSortService], (service: TeamSortService) => {
    expect(service).toBeTruthy();
  }));
});
