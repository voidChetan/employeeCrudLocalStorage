import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAmountUsersComponent } from './max-amount-users.component';

describe('MaxAmountUsersComponent', () => {
  let component: MaxAmountUsersComponent;
  let fixture: ComponentFixture<MaxAmountUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxAmountUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxAmountUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
