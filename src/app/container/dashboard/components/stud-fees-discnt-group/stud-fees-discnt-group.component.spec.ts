import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudFeesDiscntGroupComponent } from './stud-fees-discnt-group.component';

describe('StudFeesDiscntGroupComponent', () => {
  let component: StudFeesDiscntGroupComponent;
  let fixture: ComponentFixture<StudFeesDiscntGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudFeesDiscntGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudFeesDiscntGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
