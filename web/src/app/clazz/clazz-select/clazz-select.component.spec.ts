import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzSelectComponent } from './clazz-select.component';

describe('ClazzSelectComponent', () => {
  let component: ClazzSelectComponent;
  let fixture: ComponentFixture<ClazzSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClazzSelectComponent]
    });
    fixture = TestBed.createComponent(ClazzSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
