import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibilingstableComponent } from './sibilingstable.component';

describe('SibilingstableComponent', () => {
  let component: SibilingstableComponent;
  let fixture: ComponentFixture<SibilingstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibilingstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibilingstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
