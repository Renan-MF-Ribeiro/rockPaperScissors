import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../services/game-services.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

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

  destroyed = new Subject<void>();
  currentScreenSize!: string;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private _gameService: GameService,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

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
      this.result = this.stonePaperScissorsLizardSpock(
        this.weapon,
        this.weaponIA
      );
    }, 3000);
  }

  stonePaperScissorsLizardSpock(player: string, IA: string): string {
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
