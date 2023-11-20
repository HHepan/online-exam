import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzEditComponent } from './clazz-edit.component';

describe('ClazzEditComponent', () => {
  let component: ClazzEditComponent;
  let fixture: ComponentFixture<ClazzEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClazzEditComponent]
    });
    fixture = TestBed.createComponent(ClazzEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
