import { Component } from '@angular/core';
import { HouseDataService } from './house-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home-monitor';
  routeOneName = 'one';

  constructor(public houseDataService: HouseDataService) {
    this.houseDataService.getData().subscribe((data) => {
      // Do whatever you want with your data
      console.log('this is app' + data);
    });
  }
  ngOnInit() {}
}
