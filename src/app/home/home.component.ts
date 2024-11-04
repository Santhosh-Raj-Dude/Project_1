import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '../bike.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports:[CommonModule,RouterLinkActive]

})
export class HomeComponent implements OnInit {
  bikes: any[] = [];

  constructor(private bikeService: BikeService, private router: Router) {}

  ngOnInit(): void {
    this.loadBikes();
  }

  loadBikes(): void {
    this.bikeService.getBikes().subscribe((data) => {
      this.bikes = data;
    });
  }

  editBike(id: string): void {
    this.router.navigate(['/edit-bike', id]); // Navigate to edit-bike with bike ID
  }

  deleteBike(index: number): void {
    if (confirm('Are you sure you want to delete this bike?')) {
      this.bikeService.deleteBike(index);
      this.loadBikes(); // Reload the bike list after deletion
    }
  }
}



