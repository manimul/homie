import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HOUSE } from '../house';
import { Room } from '../room';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { timer } from 'rxjs';
import { HouseDataService } from '../house-data.service';

@Component({
  selector: 'app-room-panel',
  templateUrl: './room-panel.component.html',
  styleUrls: ['./room-panel.component.scss'],
})
export class RoomPanelComponent implements OnInit {
  house = HOUSE;
  houseData: Room;
  currentRoom: object;
  currentId: number;
  roomTitle: string;
  devices: number;
  energy: number;
  humidity: number;
  people: number;
  temperature: number;

  @Input() name: string | null;

  constructor(public houseDataService: HouseDataService) {
    this.houseData = HOUSE[0];
    this.roomTitle = '';
    this.name = '';
    this.currentRoom = {};
    this.devices = 0;
    this.energy = 0;
    this.humidity = 0;
    this.people = 0;
    this.temperature = 0;
    this.currentId = 0;

    this.houseDataService.getData().subscribe((data) => {
      data ? (this.houseData = data) : (this.houseData = this.house[0]);
      this.name = this.houseData.title;
      this.devices = this.houseData.devices;
      this.energy = this.houseData.energy;
      this.humidity = this.houseData.humidity;
      this.people = this.houseData.people;
      this.temperature = this.houseData.temperature;
      this.currentId = this.houseData.id;

      let source = timer(10000, 20000);
      let subscribe = source.subscribe((val) =>
        houseDataService.setData(this.currentId)
      );
    });
  }
  ngOnInit(): void {}
}
