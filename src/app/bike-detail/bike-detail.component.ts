import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BikeService } from '../bike.service'; // Import your service
import { Observable } from 'rxjs'; // Import Observable
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bike-detail',
  standalone: true,
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css'],
  imports : [RouterModule, CommonModule]
})
export class BikeDetailComponent implements OnInit {
  bike$: Observable<any> | null = null; 
bikeCategories: any;

  constructor(private route: ActivatedRoute, private bikeService: BikeService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bikeId = params.get('id'); // Get bike ID from route params
      this.fetchBikeDetails(bikeId); // Fetch bike details with the ID
    });
  }

  fetchBikeDetails(bikeId: string | null) {
    if (bikeId) {
      this.bike$ = this.bikeService.getBikeById(bikeId); // Fetch bike details
    }
  }
}
