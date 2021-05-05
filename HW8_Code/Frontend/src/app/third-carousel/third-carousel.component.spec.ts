import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCarouselComponent } from './third-carousel.component';

describe('ThirdCarouselComponent', () => {
  let component: ThirdCarouselComponent;
  let fixture: ComponentFixture<ThirdCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
