import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../services/game-services.service';

@Component({
  selector: 'app-scored',
  templateUrl: './scored.component.html',
  styleUrls: ['./scored.component.scss'],
})
export class ScoredComponent implements OnInit {
  constructor(private _gameService: GameService) {}

  ngOnInit(): void {}

  get _points() {
    const value = this._gameService.getVictories();
    return value < 10 ? '0' + value : value;
  }
}
