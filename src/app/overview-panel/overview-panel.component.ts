import { Component, OnInit, Input } from '@angular/core';
import { HOUSE } from '../house';

@Component({
  selector: 'app-overview-panel',
  templateUrl: './overview-panel.component.html',
  styleUrls: ['./overview-panel.component.scss'],
})
export class OverviewPanelComponent implements OnInit {
  house = HOUSE;
  myRoom: object;
  roomTitle: string;
  data: number;
  title: string;
  constructor() {
    this.data = 0;
    this.myRoom = this.house[0];
    this.roomTitle = this.house[0].title;
    this.title = '';
    this.panel = '';
    this.overview = false;
    this.roomsList = false;
    this.roomDetail = false;
  }
  @Input() panel: string;
  @Input() overview: boolean;
  @Input() roomsList: boolean;
  @Input() roomDetail: boolean;
  ngOnInit(): void {}
}
