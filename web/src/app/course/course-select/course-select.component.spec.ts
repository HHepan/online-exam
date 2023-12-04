import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSelectComponent } from './course-select.component';

describe('CourseSelectComponent', () => {
  let component: CourseSelectComponent;
  let fixture: ComponentFixture<CourseSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSelectComponent]
    });
    fixture = TestBed.createComponent(CourseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
