import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthCarouselComponent } from './fourth-carousel.component';

describe('FourthCarouselComponent', () => {
  let component: FourthCarouselComponent;
  let fixture: ComponentFixture<FourthCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
