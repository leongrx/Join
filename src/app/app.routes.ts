import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaincontentComponent } from './maincomponents/maincontent/maincontent.component';
import { SummaryComponent } from './maincomponents/maincontent/summary/summary.component';
import { AddtaskComponent } from './maincomponents/maincontent/addtask/addtask.component';
import { BoardComponent } from './maincomponents/maincontent/board/board.component';
import { ContactsComponent } from './maincomponents/maincontent/contacts/contacts.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'maincontent',
    component: MaincontentComponent,
    children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'addtask', component: AddtaskComponent },
      { path: 'board', component: BoardComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
];
