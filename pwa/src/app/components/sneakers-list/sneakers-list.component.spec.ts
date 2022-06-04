import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersListComponent } from './sneakers-list.component';

describe('SneakersListComponent', () => {
  let component: SneakersListComponent;
  let fixture: ComponentFixture<SneakersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
