import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public tbbt: boolean) {}

  rule: string = this.tbbt
    ? '/assets/images/image-rules-bonus.svg'
    : '/assets/images/image-rules.svg';
  ngOnInit(): void {}
}
