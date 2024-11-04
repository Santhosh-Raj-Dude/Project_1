import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeDetailComponent } from './bike-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BikeService } from '../bike.service';

describe('BikeDetailComponent', () => {
  let component: BikeDetailComponent;
  let fixture: ComponentFixture<BikeDetailComponent>;
  let bikeServiceMock: jasmine.SpyObj<BikeService>;

  beforeEach(async () => {
    bikeServiceMock = jasmine.createSpyObj('BikeService', ['getBikeById']);

    await TestBed.configureTestingModule({
      declarations: [BikeDetailComponent],
      providers: [
        { provide: BikeService, useValue: bikeServiceMock },
        { provide: ActivatedRoute, useValue: { paramMap: of(new Map([['id', '1']])) } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Ensure you have at least one test case defined
  it('should create the BikeDetailComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch bike details on init', () => {
    // Arrange
    bikeServiceMock.getBikeById.and.returnValue(of({ id: '1', name: 'Test Bike' }));
    
    // Act
    component.ngOnInit();

    // Assert
    expect(bikeServiceMock.getBikeById).toHaveBeenCalledWith('1');
    component.bike$.subscribe(bike => {
      expect(bike).toEqual({ id: '1', name: 'Test Bike' });
    });
  });
});
