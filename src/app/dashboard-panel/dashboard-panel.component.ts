import { Component, OnInit, Input } from '@angular/core';
import { HouseDataService } from '../house-data.service';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.scss'],
})
export class DashboardPanelComponent implements OnInit {
  constructor(private houseDataService: HouseDataService) {}

  ngOnInit(): void {}
}
