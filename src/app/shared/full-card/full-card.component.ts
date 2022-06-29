import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss'],
})
export class FullCardComponent implements OnInit {
  @Input() image!: string;
  @Input() text!: string;
  @Input() link!: string;
  @Input() params!: object;

  constructor() {}

  ngOnInit(): void {}
}
