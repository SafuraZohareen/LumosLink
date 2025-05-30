import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

export interface HousePoint {
  house: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class HousePointsService {
  constructor(private http: HttpClient) {}

  getHousePoints(): Observable<HousePoint[]> {
    return this.http.get<HousePoint[]>('/assets/mock/house-points.json').pipe(
    //   delay(500) // simulate network delay
    );
  }
}
