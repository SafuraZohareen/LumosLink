import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HousePointsService, HousePoint } from '../../shared/house-points.service';
import { NgIf  } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-house-points',
  templateUrl: './house-points-tracker.component.html',
  standalone: true,
  imports: [NgIf],
  providers: [HousePointsService],
})
export class HousePointsComponent {
  housePoints$: Observable<HousePoint[]>;
  house: any = [
    { "house": "Gryffindor", "points": 120 },
    { "house": "Hufflepuff", "points": 95 },
    { "house": "Ravenclaw", "points": 105 },
    { "house": "Slytherin", "points": 110 }
  ]
  constructor(private housePointsService: HousePointsService) {
    this.housePoints$ = this.housePointsService.getHousePoints();
  }
}
