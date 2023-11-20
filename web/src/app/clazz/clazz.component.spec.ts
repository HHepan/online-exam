import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzComponent } from './clazz.component';

describe('ClazzComponent', () => {
  let component: ClazzComponent;
  let fixture: ComponentFixture<ClazzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClazzComponent]
    });
    fixture = TestBed.createComponent(ClazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
