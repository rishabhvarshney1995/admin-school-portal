import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisteredStudentComponent } from './list-registered-student.component';

describe('ListRegisteredStudentComponent', () => {
  let component: ListRegisteredStudentComponent;
  let fixture: ComponentFixture<ListRegisteredStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegisteredStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegisteredStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
