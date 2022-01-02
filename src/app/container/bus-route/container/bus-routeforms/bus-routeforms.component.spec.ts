import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRouteformsComponent } from './bus-routeforms.component';

describe('BusRouteformsComponent', () => {
  let component: BusRouteformsComponent;
  let fixture: ComponentFixture<BusRouteformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRouteformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusRouteformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
