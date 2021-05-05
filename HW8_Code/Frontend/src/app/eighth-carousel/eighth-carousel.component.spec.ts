import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthCarouselComponent } from './eighth-carousel.component';

describe('EighthCarouselComponent', () => {
  let component: EighthCarouselComponent;
  let fixture: ComponentFixture<EighthCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighthCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
