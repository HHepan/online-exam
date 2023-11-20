import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzAddComponent } from './clazz-add.component';

describe('ClazzAddComponent', () => {
  let component: ClazzAddComponent;
  let fixture: ComponentFixture<ClazzAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClazzAddComponent]
    });
    fixture = TestBed.createComponent(ClazzAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
