import { Component } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { RouterLink, Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { BoardComponent } from './board/board.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'board', component: BoardComponent },
  { path: 'contacts', component: ContactsComponent },
];

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [SummaryComponent, MatSidenavModule, HeaderComponent, SidebarComponent, RouterLink, RouterModule ],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
