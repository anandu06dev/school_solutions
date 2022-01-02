import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRoutetableComponent } from './bus-routetable.component';

describe('BusRoutetableComponent', () => {
  let component: BusRoutetableComponent;
  let fixture: ComponentFixture<BusRoutetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRoutetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusRoutetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
