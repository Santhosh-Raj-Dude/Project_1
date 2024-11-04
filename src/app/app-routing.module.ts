import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bike-detail/:id', component: BikeDetailComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'edit-bike/:id', component: EditBikeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
