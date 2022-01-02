import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNavigationMenuComponent } from './quick-navigation-menu.component';

describe('QuickNavigationMenuComponent', () => {
  let component: QuickNavigationMenuComponent;
  let fixture: ComponentFixture<QuickNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickNavigationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
