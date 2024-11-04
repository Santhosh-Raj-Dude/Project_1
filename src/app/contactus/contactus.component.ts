import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contactus.component.html',
  standalone:true,
  styleUrls: ['./contactus.component.css'],
  imports:[CommonModule,FormsModule,ReactiveFormsModule]
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log("Contact Form Data:", this.contactForm.value);
      // Handle form data (send to service or backend here)
      alert('Thank you for contacting us!');
      this.contactForm.reset(); // Reset the form after submission
    }
  }
}
