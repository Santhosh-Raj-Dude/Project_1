import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BikeNewsComponent } from './bike-news/bike-news.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'bike-detail/:id', component: BikeDetailComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'bike-news', component: BikeNewsComponent },
    
    { path: 'edit-bike/:id', component: EditBikeComponent },];
  