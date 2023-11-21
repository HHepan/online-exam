import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankAddComponent } from './question-bank-add.component';

describe('QuestionBankAddComponent', () => {
  let component: QuestionBankAddComponent;
  let fixture: ComponentFixture<QuestionBankAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionBankAddComponent]
    });
    fixture = TestBed.createComponent(QuestionBankAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
