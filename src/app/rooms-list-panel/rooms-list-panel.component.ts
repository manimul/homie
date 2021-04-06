import { Component, OnInit, Input } from '@angular/core';
import { HOUSE } from '../house';
import { HouseDataService } from '../house-data.service';

@Component({
  selector: 'app-rooms-list-panel',
  templateUrl: './rooms-list-panel.component.html',
  styleUrls: ['./rooms-list-panel.component.scss'],
})
export class RoomsListPanelComponent implements OnInit {
  house = HOUSE;
  title: string;
  id: number;

  constructor(private houseDataService: HouseDataService) {
    this.title = '';
    this.id = 0;
  }

  discoverClicked(id: number) {
    this.houseDataService.setData(id);
    this.id = id;
  }

  ngOnInit(): void {}
}
