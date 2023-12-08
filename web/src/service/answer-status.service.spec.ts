import { TestBed } from '@angular/core/testing';

import { AnswerStatusService } from './answer-status.service';

describe('AnswerStatusService', () => {
  let service: AnswerStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
