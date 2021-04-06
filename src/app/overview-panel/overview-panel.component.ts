import { Component, OnInit, Input } from '@angular/core';
import { HOUSE } from '../house';
import { timer } from 'rxjs';

let temperatureAvg: number;

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
  energy: number;
  temperature: number;
  humidity: number;
  people: number;
  devices: number;

  constructor() {
    this.energy = HOUSE.reduce((sum, house) => sum + house.energy, 0);
    //this.energy = energyAvg;
    this.temperature =
      HOUSE.reduce((sum, house) => sum + house.temperature, 0) / 5;
    this.humidity = HOUSE.reduce((sum, house) => sum + house.humidity, 0) / 5;
    this.people = HOUSE.reduce((sum, house) => sum + house.people, 0);
    this.devices = HOUSE.reduce((sum, house) => sum + house.devices, 0);

    this.data = 0;
    this.myRoom = this.house[0];
    this.roomTitle = this.house[0].title;
    this.title = '';
    this.panel = '';
    this.overview = false;
    this.roomsList = false;
    this.roomDetail = false;
    let source = timer(10000, 20000);
    let subscribe = source.subscribe((val) => updater());

    function updater() {
      let energy = HOUSE.reduce((sum, house) => sum + house.energy, 0);
      let temperature =
        HOUSE.reduce((sum, house) => sum + house.temperature, 0) / 5;
    }
  }
  @Input() panel: string;
  @Input() overview: boolean;
  @Input() roomsList: boolean;
  @Input() roomDetail: boolean;
  ngOnInit(): void {}
}
