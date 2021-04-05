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
  myRoom: object;
  roomTitle: string;
  title: string;
  routeName = '';
  id: number;

  constructor(private houseDataService: HouseDataService) {
    this.myRoom = this.house[0];
    this.roomTitle = this.house[0].title;
    this.title = '';
    this.panel = '';
    this.overview = false;
    this.roomsList = false;
    this.roomDetail = false;
    this.id = 0;
    // this.houseDataService.setData('any data that you want');
  }

  discoverClicked(id: number) {
    // do the thing
    this.houseDataService.setData(id);
    this.id = id;
  }
  @Input() panel: string;
  @Input() overview: boolean;
  @Input() roomsList: boolean;
  @Input() roomDetail: boolean;
  ngOnInit(): void {}
}
