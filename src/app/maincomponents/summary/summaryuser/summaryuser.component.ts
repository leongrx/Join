import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-summaryuser',
  standalone: true,
  imports: [ MatSidenavModule],
  templateUrl: './summaryuser.component.html',
  styleUrl: './summaryuser.component.scss'
})
export class SummaryuserComponent {

}
