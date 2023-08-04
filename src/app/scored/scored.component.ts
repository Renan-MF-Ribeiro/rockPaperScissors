import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scored',
  templateUrl: './scored.component.html',
  styleUrls: ['./scored.component.scss'],
})
export class ScoredComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get _points() {
    return 12;
  }
}
