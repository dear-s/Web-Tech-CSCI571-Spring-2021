import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCarouselComponent } from './first-carousel.component';

describe('FirstCarouselComponent', () => {
  let component: FirstCarouselComponent;
  let fixture: ComponentFixture<FirstCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
