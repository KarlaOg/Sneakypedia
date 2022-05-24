import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserDashboardComponent } from './nav-user-dashboard.component';

describe('NavUserDashboardComponent', () => {
  let component: NavUserDashboardComponent;
  let fixture: ComponentFixture<NavUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavUserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
