import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesRulesComponent } from './roles-rules.component';

describe('RolesRulesComponent', () => {
  let component: RolesRulesComponent;
  let fixture: ComponentFixture<RolesRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
