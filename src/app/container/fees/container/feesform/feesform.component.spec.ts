import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesformComponent } from './feesform.component';

describe('FeesformComponent', () => {
  let component: FeesformComponent;
  let fixture: ComponentFixture<FeesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
