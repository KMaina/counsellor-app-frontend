import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { CounsellorComponent } from './counsellor/counsellor.component';

import { FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SignInComponent,
    SignUpComponent,
    CounsellorComponent,
    HomeComponent,
    NavbarComponent,
    ClientProfileComponent,
    AboutComponent,
    PagenotfoundComponent,
    ContactComponent,
    ClientHomeComponent,
    AppointmentComponent,

  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
