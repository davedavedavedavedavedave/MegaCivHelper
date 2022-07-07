import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryPointsComponent } from './victory-points.component';

describe('VictoryPointsComponent', () => {
  let component: VictoryPointsComponent;
  let fixture: ComponentFixture<VictoryPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictoryPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VictoryPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
