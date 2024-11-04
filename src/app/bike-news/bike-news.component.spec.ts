import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeNewsComponent } from './bike-news.component';

describe('BikeNewsComponent', () => {
  let component: BikeNewsComponent;
  let fixture: ComponentFixture<BikeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
