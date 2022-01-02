import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetsComponent } from './bottomsheets.component';

describe('BottomsheetsComponent', () => {
  let component: BottomsheetsComponent;
  let fixture: ComponentFixture<BottomsheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomsheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
