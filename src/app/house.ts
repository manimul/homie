import { Room } from './room';
import { timer } from 'rxjs';

let source = timer(2000, 10000);
let subscribe = source.subscribe((val) => updater(val));

function updater(val: any) {
  Object.values(HOUSE).forEach((val) => {
    val.energy = Math.floor(Math.random() * (2500 - 2400) + 2400);
    val.temperature = Math.floor(Math.random() * (25 - 20) + 20);
    val.humidity = Math.floor(Math.random() * (40 - 30) + 30);
  });
  // this.devices = this.devices + 1;
  //randomNumber = Math.floor(Math.random() * 100 + 1);

  //HOUSE[0].people++;
}

export const HOUSE: Room[] = [
  {
    id: 0,
    title: 'Living Room',
    temperature: 23,
    humidity: 30,
    energy: 1420,
    people: 1,
    devices: 2,
  },
  {
    id: 1,
    title: 'Kitchen',
    temperature: 23,
    humidity: 49,
    energy: 2400,
    people: 1,
    devices: 3,
  },
  {
    id: 2,
    title: 'Bathroom',
    temperature: 22,
    humidity: 65,
    energy: 1000,
    people: 1,
    devices: 0,
  },
  {
    id: 3,
    title: 'Bedroom 1',
    temperature: 19,
    humidity: 46,
    energy: 500,
    people: 0,
    devices: 0,
  },
  {
    id: 4,
    title: 'Bedroom 2',
    temperature: 22,
    humidity: 56,
    energy: 1500,
    people: 2,
    devices: 4,
  },
];
