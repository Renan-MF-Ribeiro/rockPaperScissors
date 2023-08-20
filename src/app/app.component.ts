import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rockPaperScissors';

  tbbt: boolean = true;

  listNames = this.tbbt
    ? ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK ']
    : ['ROCK', 'PAPER', 'SCISSORS'];

  weaponSelected!: string;
  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanatizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    this._matIconRegistry.addSvgIcon(
      'tbbt',
      this._domSanatizer.bypassSecurityTrustResourceUrl(
        '../assets/icon/tbbt.svg'
      )
    );
  }

  openRules() {
    this.dialog.open(RulesComponent, {
      data: this.tbbt,
      width: '60%',
      maxHeight: '80%',
    });
  }

  changeOption() {
    this.tbbt = !this.tbbt;
    this.listNames = this.tbbt
      ? ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK ']
      : ['ROCK', 'PAPER', 'SCISSORS'];
  }
}
