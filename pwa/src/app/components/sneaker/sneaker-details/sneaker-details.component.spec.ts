import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerDetailsComponent } from './sneaker-details.component';

describe('SneakerDetailsComponent', () => {
  let component: SneakerDetailsComponent;
  let fixture: ComponentFixture<SneakerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
