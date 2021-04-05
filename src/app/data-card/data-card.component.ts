import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent implements OnInit {
  constructor() {
    this.title = 'this';
    this.data = null;
    this.unit = '';
  }
  @Input() title: string;
  @Input() data: any;
  @Input() unit: string;

  ngOnInit(): void {}
}
