import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rockPaperScissors';

  listNames = ['ROCK', 'PAPER', 'SCISSORS'];

  weaponSelected!: string;
}
