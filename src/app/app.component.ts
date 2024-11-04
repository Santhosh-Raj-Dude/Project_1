import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component'; 
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FooterComponent,RouterLink, RouterModule, HomeComponent, BikeDetailComponent, LoginComponent,RegisterComponent] 
 
})
export class AppComponent {
  title: any;
}
