import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemFormComponent } from './tem-form.component';

describe('TemFormComponent', () => {
  let component: TemFormComponent;
  let fixture: ComponentFixture<TemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
