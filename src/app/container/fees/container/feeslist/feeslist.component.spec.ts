import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeslistComponent } from './feeslist.component';

describe('FeeslistComponent', () => {
  let component: FeeslistComponent;
  let fixture: ComponentFixture<FeeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
