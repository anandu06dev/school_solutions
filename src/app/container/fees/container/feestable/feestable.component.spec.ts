import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeestableComponent } from './feestable.component';

describe('FeestableComponent', () => {
  let component: FeestableComponent;
  let fixture: ComponentFixture<FeestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeestableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
