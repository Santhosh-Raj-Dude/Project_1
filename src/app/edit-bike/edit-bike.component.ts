import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BikeService } from '../bike.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-bike',
  standalone:true,
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css'],
  imports:[ReactiveFormsModule,CommonModule]
})
export class EditBikeComponent implements OnInit {
  editForm: FormGroup;
  bikeId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      mileage: ['', Validators.required],
      engine: ['', Validators.required],
      description: [''], // Optional
    });
  }

  ngOnInit(): void {
    this.bikeId = this.route.snapshot.paramMap.get('id');
    if (this.bikeId) {
      this.loadBikeData(this.bikeId);
    }
  }

  loadBikeData(id: string): void {
    this.bikeService.getBikeById(id).subscribe((bike) => {
      if (bike) {
        this.editForm.patchValue(bike);
      }
    });
  }

  onSubmit(): void {
    if (this.editForm.valid && this.bikeId) {
      this.bikeService.updateBike(this.bikeId, this.editForm.value);
      alert('Bike details updated successfully!');
      this.router.navigate(['/home']);
    }
  }
}
