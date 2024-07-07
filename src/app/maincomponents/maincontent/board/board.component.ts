import { Component } from '@angular/core';
import { MaincontentComponent } from '../maincontent.component';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [MaincontentComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  openBoard() {
    let openBoard = document.getElementById('openBoard') as HTMLElement;
    openBoard.style.display = 'flex';
  }
}
