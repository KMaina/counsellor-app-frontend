import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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

import { SidebarComponent } from '././sidebar/sidebar.component';
import { GroupsComponent } from './groups/groups.component';


import { NavbarComponent } from './navbar/navbar.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';


import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppointmentFormComponent } from './forms/appointment-form/appointment-form.component';

import { ClientHomeComponent } from './client-home/client-home.component';
import { AppointmentsComponent } from './compoments/appointments/appointments.component';
import { AboutComponent } from './compoments/about/about.component';
import { ContactComponent } from './compoments/contact/contact.component';
import { ClientGroupsComponent } from './compoments/client-groups/client-groups.component';
import { GroupChatComponent } from './compoments/group-chat/group-chat.component';


import { authInterceptorProviders } from './auth/auth.interceptor';
import { CounsellorServiceService } from './counsellor/counsellor-service.service';
import { ClientlistComponent } from './counsellor/clientlist/clientlist.component';
import { MedicationComponent } from './medication/medication.component';



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
    PagenotfoundComponent,
    AppointmentFormComponent,
    ClientHomeComponent,
    SidebarComponent,
    GroupsComponent,
    AppointmentsComponent,
    AboutComponent,
    ContactComponent,
    ClientGroupsComponent,
    GroupChatComponent,
    MedicationComponent,
  
    ClientHomeComponent,
    ClientlistComponent,
    MedicationComponent,
    
    

  ],


  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [UserService, authInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule { }
