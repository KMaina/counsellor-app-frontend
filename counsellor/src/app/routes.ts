import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
// import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { ContactComponent } from './contact/contact.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { GroupsComponent } from './groups/groups.component';
// import { AppointmentsComponent } from './appointments/appointments.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppointmentsComponent } from './compoments/appointments/appointments.component';
import { AboutComponent } from './compoments/about/about.component';
import { ContactComponent } from './compoments/contact/contact.component';
import { ClientGroupsComponent } from './compoments/client-groups/client-groups.component';
import { ClientlistComponent } from './counsellor/clientlist/clientlist.component';


export const appRoutes: Routes = [
    
    { path: 'home', component: HomeComponent },
    
    { path: 'sidebar', component: SidebarComponent },

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
    
    { path: 'groups', component: GroupsComponent },

    { path: 'appointments', component: AppointmentsComponent },

    { path: 'clientslist', component: ClientlistComponent },

    { path: 'about', component: AboutComponent },

    { path: 'contact', component: ContactComponent },

    { path: 'client-home', component: ClientHomeComponent },
    { path: 'client-group', component: ClientGroupsComponent },


    { path: 'logout', component: HomeComponent },


    { path: '**', component: PagenotfoundComponent },

    

    


    { path:'**', component: PagenotfoundComponent },
    
];