import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsFormsComponent } from './parents-forms.component';

describe('ParentsFormsComponent', () => {
  let component: ParentsFormsComponent;
  let fixture: ComponentFixture<ParentsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
