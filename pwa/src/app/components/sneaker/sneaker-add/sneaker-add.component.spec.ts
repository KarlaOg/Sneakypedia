import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerAddComponent } from './sneaker-add.component';

describe('SneakerAddComponent', () => {
  let component: SneakerAddComponent;
  let fixture: ComponentFixture<SneakerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
