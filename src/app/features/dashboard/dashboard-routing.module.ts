import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetentionComponent } from './detention/detention.component';
import { HousePointsComponent } from './house-points-tracker/house-points-tracker.component';
import { NewsPortalComponent } from './news-portal/news-portal.component';
import { QuidditchSectionComponent } from './quidditch-section/quidditch-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'house-points', pathMatch: 'full' }, // default redirect
  { path: 'house-points', component: HousePointsComponent },
  { path: 'quidditch', component: QuidditchSectionComponent },
  { path: 'detention', component: DetentionComponent },
  { path: 'news', component: NewsPortalComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
