import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchViewExamComponent } from './tch-view-exam.component';

describe('TchViewExamComponent', () => {
  let component: TchViewExamComponent;
  let fixture: ComponentFixture<TchViewExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchViewExamComponent]
    });
    fixture = TestBed.createComponent(TchViewExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
