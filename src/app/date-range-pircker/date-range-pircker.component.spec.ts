import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePirckerComponent } from './date-range-pircker.component';

describe('DateRangePirckerComponent', () => {
  let component: DateRangePirckerComponent;
  let fixture: ComponentFixture<DateRangePirckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePirckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangePirckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
