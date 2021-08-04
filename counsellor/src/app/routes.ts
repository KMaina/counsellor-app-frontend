import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { CounsellorProfileComponent } from './counsellor-profile/counsellor-profile.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'signup', component: ClientsComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: ClientsComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'client-profile', component: ClientProfileComponent },
    { path: 'counsellor-profile', component: CounsellorProfileComponent },
    { path: 'about', component: AboutComponent },
    { path:'**', component: PagenotfoundComponent },

];