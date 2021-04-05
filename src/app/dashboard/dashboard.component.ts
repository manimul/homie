import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  panel: string;
  overview: boolean;
  roomsList: boolean;
  roomDetail: boolean;
  dashboards: Array<Object>;

  constructor() {
    this.panel = '';
    this.overview = false;
    this.roomsList = false;
    this.roomDetail = false;

    this.dashboards = [
      { panel: 'Home Overview', overview: 'true' },
      { panel: 'Rooms', roomsList: 'true' },
      { panel: 'Room', roomDetail: 'true' },
    ];
  }

  ngOnInit(): void {}
}
