import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSelectorComponent } from './credit-selector.component';

describe('CreditSelectorComponent', () => {
  let component: CreditSelectorComponent;
  let fixture: ComponentFixture<CreditSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
