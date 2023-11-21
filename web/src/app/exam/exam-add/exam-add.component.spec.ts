import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAddComponent } from './exam-add.component';

describe('ExamAddComponent', () => {
  let component: ExamAddComponent;
  let fixture: ComponentFixture<ExamAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamAddComponent]
    });
    fixture = TestBed.createComponent(ExamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
