import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthCarouselComponent } from './sixth-carousel.component';

describe('SixthCarouselComponent', () => {
  let component: SixthCarouselComponent;
  let fixture: ComponentFixture<SixthCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
