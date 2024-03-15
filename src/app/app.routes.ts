import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryuserComponent } from './maincomponents/summary/summaryuser/summaryuser.component';
import { SummaryguestComponent } from './maincomponents/summary/summaryguest/summaryguest.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'summaryuser', component: SummaryuserComponent },
    { path: 'summaryguest', component: SummaryguestComponent },
];
