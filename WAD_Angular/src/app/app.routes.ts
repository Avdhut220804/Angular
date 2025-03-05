
import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartoonComponent } from './cartoon/cartoon.component';

export const routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'cartoon', component: CartoonComponent},
    {path: '', redirectTo: 'signin', pathMatch: 'full'}
];
