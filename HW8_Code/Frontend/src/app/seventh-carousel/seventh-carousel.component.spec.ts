import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhCarouselComponent } from './seventh-carousel.component';

describe('SeventhCarouselComponent', () => {
  let component: SeventhCarouselComponent;
  let fixture: ComponentFixture<SeventhCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
