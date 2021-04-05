import { Component, OnInit, Input } from '@angular/core';
import { HOUSE } from '../house';
import { HouseDataService } from '../house-data.service';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.scss'],
})
export class DashboardPanelComponent implements OnInit {
  house = HOUSE;
  myRoom: object;
  roomTitle: string;
  data: number;
  title: string;
  constructor(private houseDataService: HouseDataService) {
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
