import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HOUSE } from '../house';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HouseDataService } from '../house-data.service';

@Component({
  selector: 'app-room-panel',
  templateUrl: './room-panel.component.html',
  styleUrls: ['./room-panel.component.scss'],
})
export class RoomPanelComponent implements OnInit {
  state$: Observable<object>;

  house = HOUSE;
  myRoom: object;
  unit: string;
  currentRoom: object;
  roomTitle: string;
  houseData: number;
  devices: number;
  energy: number;
  humidity: number;
  people: number;
  temperature: number;
  nextRoom() {
    console.log(this.houseData);
  }

  @Input() name: string | null;

  constructor(
    public route: ActivatedRoute,
    public houseDataService: HouseDataService
  ) {
    this.houseData = 1;

    this.myRoom = { energy: 0, people: 0 };
    this.roomTitle = '';
    this.name = '';
    this.unit = '';
    this.currentRoom = {};

    this.houseDataService.getData().subscribe((data) => {
      // Do whatever you want with your data
      console.log(data);
      data ? (this.houseData = data) : (this.houseData = 0);
      console.log(this.house[this.houseData]);
      this.name = this.house[this.houseData].title;
      this.devices = this.house[this.houseData].devices;
      this.energy = this.house[this.houseData].energy;
      this.humidity = this.house[this.houseData].humidity;
      this.people = this.house[this.houseData].people;
      this.temperature = this.house[this.houseData].temperature;
      return this.houseData;
    });

    this.devices = this.house[this.houseData].devices;
    this.energy = this.house[this.houseData].energy;
    this.humidity = this.house[this.houseData].humidity;
    this.people = this.house[this.houseData].people;
    this.temperature = this.house[this.houseData].temperature;
    this.state$ = this.route.paramMap.pipe(map(() => window.history.state));

    //console.log(window.history.state);
    //this.name = window.history.state.title;
    //this.data = 1;
    //@Input() initiale: string;
  }
  ngOnInit(): void {
    this.houseData = 1;
    //this.route.paramMap.subscribe((params) => (this.name = params.get('name')));
  }
}
