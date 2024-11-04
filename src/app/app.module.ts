import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppComponent,
    CommonModule,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
    
    // No need to bootstrap AppComponent here
  ],
  declarations: [
    
  ],
  providers: [],
})
export class AppModule {}
