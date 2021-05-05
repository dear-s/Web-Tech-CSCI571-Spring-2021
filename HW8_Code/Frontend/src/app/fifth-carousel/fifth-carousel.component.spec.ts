import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthCarouselComponent } from './fifth-carousel.component';

describe('FifthCarouselComponent', () => {
  let component: FifthCarouselComponent;
  let fixture: ComponentFixture<FifthCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
