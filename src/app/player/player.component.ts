import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() weapon!: string;
  @Output() back = new EventEmitter();
  weaponIA!: string;
  previousWeaponIA!: string;
  weapons = ['rock', 'paper', 'scissors'];

  constructor() {}

  ngOnInit(): void {
    this.selectIA();
  }

  selectIA() {
    const interval = setInterval(() => {
      let newWeaponIA;
      do {
        newWeaponIA = this.weapons[Math.floor(Math.random() * 3)];
      } while (newWeaponIA === this.previousWeaponIA);

      this.weaponIA = newWeaponIA;
      this.previousWeaponIA = newWeaponIA;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  }
}
