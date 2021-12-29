import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibilingsListComponent } from './sibilings-list.component';

describe('SibilingsListComponent', () => {
  let component: SibilingsListComponent;
  let fixture: ComponentFixture<SibilingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibilingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibilingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
