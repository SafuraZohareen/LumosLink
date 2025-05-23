import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePointsTrackerComponent } from './house-points-tracker.component';

describe('HousePointsTrackerComponent', () => {
  let component: HousePointsTrackerComponent;
  let fixture: ComponentFixture<HousePointsTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousePointsTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousePointsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
