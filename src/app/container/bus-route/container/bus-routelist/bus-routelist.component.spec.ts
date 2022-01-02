import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRoutelistComponent } from './bus-routelist.component';

describe('BusRoutelistComponent', () => {
  let component: BusRoutelistComponent;
  let fixture: ComponentFixture<BusRoutelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRoutelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusRoutelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
