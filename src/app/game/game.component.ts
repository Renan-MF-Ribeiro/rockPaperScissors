import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Output() select = new EventEmitter<string>();
  @Input() tbbt: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
