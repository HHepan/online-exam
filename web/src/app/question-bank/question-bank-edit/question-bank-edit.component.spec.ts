import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankEditComponent } from './question-bank-edit.component';

describe('QuestionBankEditComponent', () => {
  let component: QuestionBankEditComponent;
  let fixture: ComponentFixture<QuestionBankEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionBankEditComponent]
    });
    fixture = TestBed.createComponent(QuestionBankEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
