import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerModifyComponent } from './sneaker-modify.component';

describe('SneakerModifyComponent', () => {
  let component: SneakerModifyComponent;
  let fixture: ComponentFixture<SneakerModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
