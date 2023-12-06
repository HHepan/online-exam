import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankSelectComponent } from './question-bank-select.component';

describe('QuestionBankSelectComponent', () => {
  let component: QuestionBankSelectComponent;
  let fixture: ComponentFixture<QuestionBankSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionBankSelectComponent]
    });
    fixture = TestBed.createComponent(QuestionBankSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
