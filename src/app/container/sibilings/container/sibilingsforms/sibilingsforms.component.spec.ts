import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibilingsformsComponent } from './sibilingsforms.component';

describe('SibilingsformsComponent', () => {
  let component: SibilingsformsComponent;
  let fixture: ComponentFixture<SibilingsformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibilingsformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibilingsformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
