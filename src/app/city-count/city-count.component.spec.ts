import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCountComponent } from './city-count.component';

describe('CityCountComponent', () => {
  let component: CityCountComponent;
  let fixture: ComponentFixture<CityCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
