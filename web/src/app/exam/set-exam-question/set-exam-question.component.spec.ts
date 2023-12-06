import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetExamQuestionComponent } from './set-exam-question.component';

describe('SetExamQuestionComponent', () => {
  let component: SetExamQuestionComponent;
  let fixture: ComponentFixture<SetExamQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetExamQuestionComponent]
    });
    fixture = TestBed.createComponent(SetExamQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
