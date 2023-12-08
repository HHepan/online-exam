import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamingComponent } from './examing.component';

describe('ExamingComponent', () => {
  let component: ExamingComponent;
  let fixture: ComponentFixture<ExamingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamingComponent]
    });
    fixture = TestBed.createComponent(ExamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
