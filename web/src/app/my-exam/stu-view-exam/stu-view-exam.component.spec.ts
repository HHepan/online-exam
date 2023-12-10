import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuViewExamComponent } from './stu-view-exam.component';

describe('StuViewExamComponent', () => {
  let component: StuViewExamComponent;
  let fixture: ComponentFixture<StuViewExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuViewExamComponent]
    });
    fixture = TestBed.createComponent(StuViewExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
