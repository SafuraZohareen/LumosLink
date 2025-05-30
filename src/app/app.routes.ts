import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'house-points',
    loadComponent: () =>
      import('./features/house-points-tracker/house-points-tracker.component')
        .then(m => m.HousePointsComponent), providers: [provideHttpClient()]
  },
  {
    path: 'detention',
    loadComponent: () =>
      import('./features/detention/detention.component').then(m => m.DetentionComponent),
    providers: [provideHttpClient()]
  },
  {
    path: 'detention',
    loadComponent: () =>
      import('./features/news-portal/news-portal.component').then(m => m.NewsPortalComponent),
    providers: [provideHttpClient()]
  },
  {
    path: 'detention',
    loadComponent: () =>
      import('./features/quidditch-section/quidditch-section.component').then(m => m.QuidditchSectionComponent),
    providers: [provideHttpClient()]
  },
  {
    path: '',
    redirectTo: 'house-points',
    pathMatch: 'full'
  }
];
