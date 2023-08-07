import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../services/game-services.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() weapon!: string;
  @Output() back = new EventEmitter();
  weaponIA!: string;
  result!: string;
  previousWeaponIA!: string;
  weapons = ['rock', 'paper', 'scissors'];

  constructor(private _gameService: GameService) {}

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
      this.result = this.pedraPapelTesouraLagartoSpock(
        this.weapon,
        this.weaponIA
      );
    }, 3000);
  }

  pedraPapelTesouraLagartoSpock(player: string, IA: string): string {
    if (player === IA) {
      return 'Empate!';
    }

    switch (player) {
      case 'rock':
        if (IA === 'scissors' || IA === 'lizard') {
          this._gameService.updateVictories();
          return 'Você venceu!';
        } else {
          return 'Você perdeu!';
        }
      case 'paper':
        if (IA === 'rock' || IA === 'spock') {
          this._gameService.updateVictories();
          return 'Você venceu!';
        } else {
          return 'Você perdeu!';
        }
      case 'scissors':
        if (IA === 'paper' || IA === 'lizard') {
          this._gameService.updateVictories();
          return 'Você venceu!';
        } else {
          return 'Você perdeu!';
        }
      case 'lizard':
        if (IA === 'paper' || IA === 'spock') {
          this._gameService.updateVictories();
          return 'Você venceu!';
        } else {
          return 'Você perdeu!';
        }
      case 'spock':
        if (IA === 'rock' || IA === 'scissors') {
          this._gameService.updateVictories();
          return 'Você venceu!';
        }
        {
          return 'Você perdeu!';
        }
      default:
        return 'Erro na jogada.';
    }
  }
}
