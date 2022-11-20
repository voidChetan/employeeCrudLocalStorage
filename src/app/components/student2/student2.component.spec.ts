import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student2Component } from './student2.component';

describe('Student2Component', () => {
  let component: Student2Component;
  let fixture: ComponentFixture<Student2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
