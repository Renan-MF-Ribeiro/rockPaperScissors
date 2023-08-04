import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent implements OnInit {
  @Input() selected!: string;

  wepons: { [x: string]: any } = {
    paper: {
      img: 'assets/images/icon-paper.svg',
      color: '',
    },
    rock: {
      img: 'assets/images/icon-rock.svg',
      color: '',
    },
    scissors: {
      img: 'assets/images/icon-scissors.svg',
      color: '',
    },
  };

  weapon: any = {};

  constructor() {}

  ngOnInit(): void {
    this.weapon = this.wepons[this.selected];
  }
}
