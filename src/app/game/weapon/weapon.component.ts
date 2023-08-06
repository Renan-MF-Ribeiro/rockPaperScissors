import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent implements OnInit, OnChanges {
  @Input() selected!: string;

  wepons: { [x: string]: any } = {
    paper: 'assets/images/icon-paper.svg',

    rock: 'assets/images/icon-rock.svg',

    scissors: 'assets/images/icon-scissors.svg',
  };

  weapon: any = {};

  constructor() {}

  ngOnInit(): void {
    this.weapon = this.wepons[this.selected];
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.weapon = this.wepons[this.selected];
  }
}
