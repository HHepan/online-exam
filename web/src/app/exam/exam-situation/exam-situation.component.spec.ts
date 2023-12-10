import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSituationComponent } from './exam-situation.component';

describe('ExamSituationComponent', () => {
  let component: ExamSituationComponent;
  let fixture: ComponentFixture<ExamSituationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamSituationComponent]
    });
    fixture = TestBed.createComponent(ExamSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
