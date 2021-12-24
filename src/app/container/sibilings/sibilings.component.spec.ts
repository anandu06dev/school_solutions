import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibilingsComponent } from './sibilings.component';

describe('SibilingsComponent', () => {
  let component: SibilingsComponent;
  let fixture: ComponentFixture<SibilingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibilingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
