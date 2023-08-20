import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tbbt: boolean = false;

  tbbtWapons: string[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  commonWapons: string[] = ['rock', 'paper', 'scissors'];

  listWeapons = this.tbbt ? this.tbbtWapons : this.commonWapons;

  title = this.tbbt
    ? 'Rock Paper Scissors Lizard Spock'
    : 'Rock Paper Scissors';

  weaponSelected!: string;
  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanatizer: DomSanitizer,
    public dialog: MatDialog,
    private _titleService: Title
  ) {
    this._matIconRegistry.addSvgIcon(
      'tbbt',
      this._domSanatizer.bypassSecurityTrustResourceUrl(
        '../assets/icon/tbbt.svg'
      )
    );

    this._titleService.setTitle('Rock Paper Scissors');
  }

  openRules() {
    this.dialog.open(RulesComponent, {
      data: this.tbbt,
      maxWidth: '60%',
      maxHeight: '80%',
    });
  }

  changeOption() {
    this.tbbt = !this.tbbt;
    this.listWeapons = this.tbbt ? this.tbbtWapons : this.commonWapons;
    this._titleService.setTitle(
      this.tbbt ? 'Rock Paper Scissors Lizard Spock' : 'Rock Paper Scissors'
    );
  }
}
