import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './auth/auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { GroupsComponent } from './groups/groups.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AboutComponent } from './compoments/about/about.component';
import { ContactComponent } from './compoments/contact/contact.component';
import { ClientGroupsComponent } from './compoments/client-groups/client-groups.component';



export const AppRoutingModule: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'signup', component: ClientsComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: ClientsComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'client-profile', component: ClientProfileComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: '**', component: PagenotfoundComponent },

  { path: 'client-home', component: ClientHomeComponent },

  { path: 'sidebar', component: SidebarComponent },
  { path: 'client-group', component: ClientGroupsComponent }


];