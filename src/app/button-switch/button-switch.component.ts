import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: ['./button-switch.component.scss'],
})
export class ButtonSwitchComponent implements OnInit {
  @Output() tbbt = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
