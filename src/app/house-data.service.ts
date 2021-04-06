import { Injectable } from '@angular/core';
import { Room } from './room';
import { HOUSE } from './house';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseDataService {
  private _data: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public setData(data: any) {
    HOUSE[data];
    this._data.next(HOUSE[data]);
    // this._data.next(data);
  }

  public getData(): Observable<any> {
    return this._data.asObservable();
  }
  constructor() {}
  //getHouse(): Room[] {
  //return HOUSE;
  //}
}
