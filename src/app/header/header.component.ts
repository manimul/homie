import { Component, OnInit } from '@angular/core';
import { HouseDataService } from '../house-data.service';
import { HOUSE } from '../house';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routeOneName = 'this';
  constructor(private houseDataService: HouseDataService) {}
  updateValue() {
    this.houseDataService.setData(1);

    // do the thing
  }
  ngOnInit(): void {}
}
