import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AucompleteTextComponent } from './aucomplete-text.component';

describe('AucompleteTextComponent', () => {
  let component: AucompleteTextComponent;
  let fixture: ComponentFixture<AucompleteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AucompleteTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AucompleteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
